"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

import imgLines from "@/app/assets/imgs/lines.svg";

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
};

const SPRING = { stiffness: 120, damping: 18, mass: 1.2 };

const bgByRoute: Record<string, BgConfig> = {
  "/": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1,
    shape: {
      points: [[100, 100], [300, 100], [300, 300], [100, 300]],
      fill: "var(--clr-red-bonker-pink)",
    },
  },
  "/about": {
    color: "var(--clr-red-bonker-pink)",
    imageOpacity: 0.05,
  },
  "/resume": {
    color: "var(--clr-red-himalayan-balsam)",
    imageOpacity: 0.05,
    shape: {
      points: [[80, 120], [320, 80], [340, 310], [90, 330]],
      fill: "var(--clr-green-grass)",
    },
  },
  "/projects": {
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05,
  },
};

const FALLBACK_SHAPE: BgShape = {
  points: [[100, 100], [300, 100], [300, 300], [100, 300]],
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
  const d = useShapeSprings(activeShape.points);

  const lines = (
    <div className={styles.lines} data-page={pathname}>
      <Image src={imgLines} alt="Decorative lines" width={200} height={100} />
    </div>
  );

  return (
    <div
      className={styles.appBg}
      style={
        {
          "--bg-color": bg.color,
          "--img-opacity": bg.imageOpacity,
          "--bg-image": `url(/assets/images/bgs/galaxy2.png)`,
        } as React.CSSProperties
      }
      aria-hidden
    >
      <div className={styles.appBgColor} />
      {lines}
      <div className={styles.appBgImage} />
      <svg
        className={styles.appBgShape}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path d={d} fill={bg.shape ? activeShape.fill : "transparent"} />
      </svg>
    </div>
  );
}