"use client";

import { usePathname } from "next/navigation";
import { useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const bgByRoute: Record<string, BgConfig> = {
  "/": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    anchor: "top-edge",
    anchorOffsets: [[0, 12], [0, -2]],
    shape: {
      points: [[0, 85], [100, 60], [100, 100], [0, 100]],
      fill: "url(#home-gradient)",
    },
    variants: [
      {
        // query: "(max-width: 575px)",
        query: "(min-width: 575px)",
        shape: {
          points: [[0, 25], [100, 20], [100, 100], [0, 100]],
          fill: "url(#home-gradient)",
        },
      },
    ],
  },
  "/about": {
    color: "var(--clr-red-bonker-pink)",
    imageOpacity: 0.05,
  },
  "/resume": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    anchor: "box",
    anchorOffsets: [
      [-25, -2.5],   // top-left
      [25, -2.5],   // top-right
      [25, 3],   // bottom-right
      [-25, 3],   // bottom-left
    ],
    shape: {
      points: [[10, 0], [100, 0], [100, 100], [0, 100]],
      fill: "url(#home-gradient)",
    },
    // variants: [
    //   {
    //     query: "(min-width: 576px)",
    //     anchorOffsets: [
    //       [-25, -5],   // top-left
    //       [25, -5],   // top-right
    //       [25, 5],   // bottom-right
    //       [-25, 5],   // bottom-left
    //     ],
    //   },
    // ],
  },
  "/resume/experience": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 16], [100, 14], [100, 150], [0, 90]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[5, 13], [100, 13], [100, 100], [5, 100]],
      fill: "url(#experience-gradient)",
    },
    variants: [
      {
        query: "(min-width: 1300px)",
        shape: {
          points: [[0, 33], [100, 28], [100, 115], [0, 80]],
          fill: "url(#home-gradient)",
        },
        shapeBack: {
          points: [[14, 26], [100, 26], [100, 100], [14, 100]],
          fill: "url(#experience-gradient)",
        },
      },
      {
        query: "(min-width: 992px)",
        shape: {
          points: [[0, 30], [100, 26], [100, 115], [0, 80]],
          fill: "url(#home-gradient)",
        },
        shapeBack: {
          points: [[14, 25], [100, 25], [100, 100], [14, 100]],
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
          points: [[14, 24], [100, 24], [100, 100], [14, 100]],
          fill: "url(#experience-gradient)",
        },
      },
      {
        query: "(min-width: 576px)",
        shape: {
          points: [[0, 19], [100, 17], [100, 150], [0, 80]],
          fill: "url(#home-gradient)",
        },
        shapeBack: {
          points: [[14, 17], [100, 17], [100, 100], [14, 100]],
          fill: "url(#experience-gradient)",
        },
      },
    ],
  },
  "/resume/skills": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 36], [100, 30], [100, 150], [0, 80]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#experience-gradient)",
    },
    variants: [
      {
        query: "(max-width: 575px)",
        shape: {
          points: [[0, 36], [100, 30], [100, 150], [0, 80]],
          fill: "url(#home-gradient)",
        },
        shapeBack: {
          points: [[20, 29], [100, 29], [100, 100], [20, 100]],
          fill: "url(#experience-gradient)",
        },
      },
    ],
  },
  "/resume/education": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 36], [100, 30], [100, 150], [0, 80]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#experience-gradient)",
    },
    variants: [
      {
        query: "(max-width: 575px)",
        shape: {
          points: [[0, 36], [100, 30], [100, 150], [0, 80]],
          fill: "url(#home-gradient)",
        },
        shapeBack: {
          points: [[20, 29], [100, 29], [100, 100], [20, 100]],
          fill: "url(#experience-gradient)",
        },
      },
    ],
  },
  "/projects": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
    shape: {
      points: [[0, 14], [100, 36], [100, 125], [4.8, 80]],
      fill: "url(#projects-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#projects-back-gradient)",
    },
  },
  "/projects/mobile-apps": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
    shape: {
      points: [[0, 14], [100, 36], [100, 125], [4.8, 80]],
      fill: "url(#projects-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#projects-back-gradient)",
    },
  },
  "/projects/web-apps": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
    shape: {
      points: [[0, 14], [100, 36], [100, 125], [4.8, 80]],
      fill: "url(#projects-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#projects-back-gradient)",
    },
  },
  "/projects/design": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
    shape: {
      points: [[0, 14], [100, 36], [100, 125], [4.8, 80]],
      fill: "url(#projects-gradient)",
    },
    shapeBack: {
      points: [[20, 29], [100, 29], [100, 100], [20, 100]],
      fill: "url(#projects-back-gradient)",
    },
  },
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

  useEffect(() => {
    p0x.set(targetPoints[0][0]);
    p0y.set(targetPoints[0][1]);
    p1x.set(targetPoints[1][0]);
    p1y.set(targetPoints[1][1]);
    p2x.set(targetPoints[2][0]);
    p2y.set(targetPoints[2][1]);
    p3x.set(targetPoints[3][0]);
    p3y.set(targetPoints[3][1]);
  }, [targetPoints, p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y]);

  const d = useTransform(
    [p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y],
    ([x0, y0, x1, y1, x2, y2, x3, y3]: number[]) =>
      `M ${x0} ${y0} L ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`
  );

  return d;
}

export default function AppBackground() {
  const pathname = usePathname();

  const bg =
    bgByRoute[pathname] ??
    Object.entries(bgByRoute).find(([key]) => key.endsWith("/*") && pathname.startsWith(key.slice(0, -2)))?.[1] ??
    { color: "var(--clr-green-jade-glass)", imageOpacity: 0.2 };

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

  const baseShape = activeVariant?.shape ?? bg.shape ?? FALLBACK_SHAPE;
  const offsets = activeVariant?.anchorOffsets ?? bg.anchorOffsets ?? [];
  const getOffset = (i: number): [number, number] => offsets[i] ?? [0, 0];
  const activeShape: BgShape = (() => {
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
  })();
  const activeShapeBack = activeVariant?.shapeBack ?? bg.shapeBack ?? FALLBACK_SHAPE_BACK;
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

          <filter id="shape-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="50" floodColor="#000" floodOpacity="0.85" />
          </filter>
        </defs>
        <motion.path d={dBack} fill={bg.shapeBack ? activeShapeBack.fill : "transparent"} />
        <motion.path d={d} fill={bg.shape ? activeShape.fill : "transparent"} filter="url(#shape-shadow)" />
      </svg>
    </div>
  );
}