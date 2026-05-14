"use client";

import { usePathname } from "next/navigation";
import { useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

import styles from "./app-background.module.css";

// Each shape is 4 points: [x, y][]
// All shapes must have exactly 4 points (same command structure for morphing)
type Point = [number, number];

type BgShape = {
  points: [Point, Point, Point, Point];
  fill: string;
};

type BgConfig = {
  color: string;
  imageOpacity: number;
  shape?: BgShape;
  shapeBack?: BgShape;
};

const SPRING = { stiffness: 120, damping: 18, mass: 1.2 };

const bgByRoute: Record<string, BgConfig> = {
  "/": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 850], [1000, 600], [1000, 1000], [0, 1000]],
      fill: "url(#home-gradient)",
    },
  },
  "/about": {
    color: "var(--clr-red-bonker-pink)",
    imageOpacity: 0.05,
  },
  "/resume": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 130], [1000, 130], [1000, 475], [0, 475]],
      fill: "url(#home-gradient)",
    },
  },
  "/resume/experience": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 360], [1000, 300], [1000, 1500], [0, 800]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[200, 290], [1000, 290], [1000, 1000], [200, 1000]],
      fill: "url(#experience-gradient)",
    },
  },
  "/resume/skills": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 360], [1000, 300], [1000, 1500], [0, 800]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[200, 290], [1000, 290], [1000, 1000], [200, 1000]],
      fill: "url(#experience-gradient)",
    },
  },
  "/resume/education": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[0, 360], [1000, 300], [1000, 1500], [0, 800]],
      fill: "url(#home-gradient)",
    },
    shapeBack: {
      points: [[200, 290], [1000, 290], [1000, 1000], [200, 1000]],
      fill: "url(#experience-gradient)",
    },
  },
  "/projects": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
    shapeBack: {
      points: [[300, 0], [1000, 0], [1000, 1000], [300, 1000]],
      fill: "oklch(0.6 0.18 40)",
    },
  },
};

const FALLBACK_SHAPE: BgShape = {
  points: [[0, 1000], [1000, 1000], [1000, 1000], [0, 1000]],
  fill: "transparent",
};

const FALLBACK_SHAPE_BACK: BgShape = {
  points: [[0, 1000], [1000, 1000], [1000, 1000], [0, 1000]],
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

  const activeShape = bg.shape ?? FALLBACK_SHAPE;
  const activeShapeBack = bg.shapeBack ?? FALLBACK_SHAPE_BACK;
  const d = useShapeSprings(activeShape.points);
  const dBack = useShapeSprings(activeShapeBack.points);

  return (
    <div className={styles.appBg} aria-hidden>
      <div className={styles.appBgColor} />
      <div className={styles.appBgImage} />
      <svg
        className={styles.appBgShape}
        viewBox="0 0 1000 1000"
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