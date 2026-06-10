"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useSpring, useTransform, motion } from "framer-motion";

import styles from "./app-background.module.css";

// Each shape is 4 points: [x, y][]
// All shapes must have exactly 4 points (same command structure for morphing)
type Point = [number, number];

type BgShape = {
  points: [Point, Point, Point, Point];
  fill: string;
};

type BgVariant = {
  query: string;
  shape?: BgShape;
  shapeBack?: BgShape;
  anchorOffsets?: Array<[number, number]>;
};

type BgConfig = {
  color: string;
  imageOpacity: number;
  shape?: BgShape;
  shapeBack?: BgShape;
  anchor?: "top-edge" | "box"; // "top-edge": top points track element bottom Y | "box": all 4 points from bounding rect
  anchorOffsets?: Array<[number, number]>; // per-point [dx, dy] offsets, index matches point order
  variants?: BgVariant[]; // responsive overrides — first match wins
};

const SPRING = { stiffness: 120, damping: 18, mass: 1.2 };

const RESUME_SECTION_BG: BgConfig = {
  color: "oklch(0.18 0.02 260)",
  imageOpacity: 1,
  shape: {
    points: [[0, 11], [100, -18], [100, 250], [0, 85]],
    fill: "url(#home-gradient)",
  },
  shapeBack: {
    points: [[3, 7], [100, 7], [100, 100], [3, 100]],
    fill: "url(#experience-gradient)",
  },
  variants: [
    {
      query: "(min-width: 1100px)",
      shape: {
        points: [[0, 34], [100, 20], [100, 115], [0, 74]],
        fill: "url(#home-gradient)",
      },
      shapeBack: {
        points: [[20, 27], [100, 27], [100, 100], [20, 100]],
        fill: "url(#experience-gradient)",
      },
    },
    {
      query: "(min-width: 992px)",
      shape: {
        points: [[0, 30], [100, 22], [100, 115], [0, 80]],
        fill: "url(#home-gradient)",
      },
      shapeBack: {
        points: [[22, 25], [100, 25], [100, 100], [22, 100]],
        fill: "url(#experience-gradient)",
      },
    },
    {
      query: "(min-width: 768px)",
      shape: {
        points: [[0, 28], [100, 25], [100, 115], [0, 80]],
        fill: "url(#home-gradient)",
      },
      shapeBack: {
        points: [[8, 24], [100, 24], [100, 100], [8, 100]],
        fill: "url(#experience-gradient)",
      },
    },
    {
      query: "(min-width: 576px)",
      shape: {
        points: [[0, 14], [100, -10], [100, 125], [0, 90]],
        fill: "url(#home-gradient)",
      },
      shapeBack: {
        points: [[4, 10], [100, 10], [100, 100], [4, 100]],
        fill: "url(#experience-gradient)",
      },
    },
  ],
};

const PROJECTS_BG: BgConfig = {
  color: "var(--clr-green-grass)",
  imageOpacity: 0.05,
  shape: {
    points: [[0, 5], [100, 7], [100, 100], [6, 100]],
    fill: "url(#projects-gradient)",
  },
  shapeBack: {
    points: [[3, 6], [100, 6], [100, 100], [3, 100]],
    fill: "var(--clr-red-alexandria)",
  },
  variants: [
    {
      query: "(min-width: 992px)",
      shape: {
        points: [[0, 12], [100, 28], [100, 125], [6, 80]],
        fill: "url(#projects-gradient)",
      },
      shapeBack: {
        points: [[16, 24], [100, 24], [100, 100], [16, 100]],
        fill: "var(--clr-red-alexandria)",
      },
    },
    {
      query: "(min-width: 768px)",
      shape: {
        points: [[0, 8], [100, 24], [100, 125], [6, 90]],
        fill: "url(#projects-gradient)",
      },
      shapeBack: {
        points: [[10, 20], [100, 20], [100, 100], [10, 100]],
        fill: "var(--clr-red-alexandria)",
      },
    },
    {
      query: "(min-width: 576px)",
      shape: {
        points: [[0, 8], [100, 12], [100, 125], [6, 90]],
        fill: "url(#projects-gradient)",
      },
      shapeBack: {
        points: [[10, 10], [100, 10], [100, 100], [10, 100]],
        fill: "var(--clr-red-alexandria)",
      },
    },
  ],
};

const bgByRoute: Record<string, BgConfig> = {
  "/": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    anchor: "top-edge",
    // anchorOffsets: [[0, 12], [0, -2]],
    anchorOffsets: [[0, 10], [0, -2]],
    shape: {
      points: [[0, 50], [100, 45], [100, 100], [0, 100]],
      fill: "url(#home-gradient)",
    },
    variants: [
      {
        query: "(min-width: 575px)",
        shape: {
          points: [[0, 25], [100, 20], [100, 100], [0, 100]],
          fill: "url(#home-gradient)",
        },
      },
    ],
  },
  "/resume": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    anchor: "box",
    anchorOffsets: [[-25, -1.75], [25, -1.75], [25, 1.75], [-25, 1.75]],
    shape: {
      points: [[13, 0], [100, 0], [100, 100], [0, 100]],
      fill: "url(#home-gradient)",
    },
  },
  "/resume/experience": RESUME_SECTION_BG,
  "/resume/skills": RESUME_SECTION_BG,
  "/resume/education": RESUME_SECTION_BG,
  "/projects": PROJECTS_BG,
  "/projects/mobile-apps": PROJECTS_BG,
  "/projects/web-apps": PROJECTS_BG,
  "/projects/design": PROJECTS_BG,
};

const FALLBACK_SHAPE: BgShape = {
  points: [[0, 100], [100, 100], [100, 100], [0, 100]],
  fill: "transparent",
};

const FALLBACK_SHAPE_BACK: BgShape = {
  points: [[0, 100], [100, 100], [100, 100], [0, 100]],
  fill: "transparent",
};

// One spring per coordinate (4 points × x,y = 8 springs)
function useShapeSprings(targetPoints: [Point, Point, Point, Point]) {
  const p0x = useSpring(targetPoints[0][0], SPRING);
  const p0y = useSpring(targetPoints[0][1], SPRING);
  const p1x = useSpring(targetPoints[1][0], SPRING);
  const p1y = useSpring(targetPoints[1][1], SPRING);
  const p2x = useSpring(targetPoints[2][0], SPRING);
  const p2y = useSpring(targetPoints[2][1], SPRING);
  const p3x = useSpring(targetPoints[3][0], SPRING);
  const p3y = useSpring(targetPoints[3][1], SPRING);

  const [x0, y0] = targetPoints[0];
  const [x1, y1] = targetPoints[1];
  const [x2, y2] = targetPoints[2];
  const [x3, y3] = targetPoints[3];

  useEffect(() => {
    p0x.set(x0); p0y.set(y0);
    p1x.set(x1); p1y.set(y1);
    p2x.set(x2); p2y.set(y2);
    p3x.set(x3); p3y.set(y3);
  }, [x0, y0, x1, y1, x2, y2, x3, y3, p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y]);

  const d = useTransform(
    [p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y],
    ([x0, y0, x1, y1, x2, y2, x3, y3]: number[]) =>
      `M ${x0} ${y0} L ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`
  );

  return d;
}

export default function AppBackground() {
  const pathname = usePathname();

  const bg = useMemo(
    () =>
      bgByRoute[pathname] ??
      Object.entries(bgByRoute).find(([key]) => key.endsWith("/*") && pathname.startsWith(key.slice(0, -2)))?.[1] ??
      { color: "var(--clr-green-jade-glass)", imageOpacity: 0.2 },
    [pathname]
  );

  const [anchorRect, setAnchorRect] = useState<{ top: number; right: number; bottom: number; left: number } | null>(null);

  useEffect(() => {
    const el = document.querySelector("[data-bg-anchor]");
    if (!el) return;
    const measure = () => {
      const { top, right, bottom, left } = el.getBoundingClientRect();
      const w = window.innerWidth;
      const h = window.innerHeight;
      setAnchorRect({
        top: (top / h) * 100,
        right: (right / w) * 100,
        bottom: (bottom / h) * 100,
        left: (left / w) * 100,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pathname]);

  const [activeVariant, setActiveVariant] = useState<BgVariant | undefined>(undefined);

  useEffect(() => {
    const variants = bg.variants ?? [];
    const mqs = variants.map(v => window.matchMedia(v.query));
    const update = () => setActiveVariant(variants.find((_, i) => mqs[i].matches));
    update();
    mqs.forEach(mq => mq.addEventListener("change", update));
    return () => mqs.forEach(mq => mq.removeEventListener("change", update));
  }, [bg.variants]);

  const baseShape = useMemo(
    () => activeVariant?.shape ?? bg.shape ?? FALLBACK_SHAPE,
    [activeVariant, bg.shape]
  );
  const offsets = useMemo(
    () => activeVariant?.anchorOffsets ?? bg.anchorOffsets ?? [],
    [activeVariant, bg.anchorOffsets]
  );
  const activeShape = useMemo((): BgShape => {
    const getOffset = (i: number): [number, number] => offsets[i] ?? [0, 0];
    if (!anchorRect || !bg.anchor) return baseShape;
    if (bg.anchor === "box") {
      const { top, right, bottom, left } = anchorRect;
      return {
        ...baseShape,
        points: [
          [left  + getOffset(0)[0], top    + getOffset(0)[1]],
          [right + getOffset(1)[0], top    + getOffset(1)[1]],
          [right + getOffset(2)[0], bottom + getOffset(2)[1]],
          [left  + getOffset(3)[0], bottom + getOffset(3)[1]],
        ],
      };
    }
    // "top-edge": top two points' Y tracks element bottom
    return {
      ...baseShape,
      points: [
        [baseShape.points[0][0] + getOffset(0)[0], anchorRect.bottom + getOffset(0)[1]],
        [baseShape.points[1][0] + getOffset(1)[0], anchorRect.bottom + getOffset(1)[1]],
        baseShape.points[2],
        baseShape.points[3],
      ],
    };
  }, [anchorRect, bg.anchor, baseShape, offsets]);
  const activeShapeBack = useMemo(
    () => activeVariant?.shapeBack ?? bg.shapeBack ?? FALLBACK_SHAPE_BACK,
    [activeVariant, bg.shapeBack]
  );
  const d = useShapeSprings(activeShape.points);
  const dBack = useShapeSprings(activeShapeBack.points);

  return (
    <div className={styles.appBg} aria-hidden>
      <div className={styles.appBgColor} />
      <div className={styles.appBgImage} />
      <svg
        className={styles.appBgShape}
        // viewBox="0 0 1000 1000"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="home-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#C30066" />
            <stop offset="50%"  stopColor="#F50482" />
            <stop offset="100%" stopColor="#C30066" />
          </linearGradient>

          <linearGradient id="experience-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#BF7D03" />
            <stop offset="50%"  stopColor="#F5A104" />
            <stop offset="100%" stopColor="#BF7D03" />
          </linearGradient>

          <linearGradient id="projects-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="var(--clr-violet-pheromone)" />
            <stop offset="50%"  stopColor="#9146CE" />
            <stop offset="100%" stopColor="var(--clr-violet-pheromone)" />
          </linearGradient>

          <linearGradient id="projects-back-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="var(--clr-red-alexandria)" />
            <stop offset="50%"  stopColor="var(--clr-red-apricot)" />
            <stop offset="100%" stopColor="var(--clr-red-alexandria)" />
          </linearGradient>

          {/* <filter id="shape-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="50" floodColor="#000" floodOpacity="0.85" />
          </filter> */}
        </defs>
        <motion.path d={dBack} fill={bg.shapeBack ? activeShapeBack.fill : "transparent"} />
        <motion.path d={d} fill={bg.shape ? activeShape.fill : "transparent"} filter="url(#shape-shadow)" />
      </svg>
    </div>
  );
}