"use client";

import { usePathname } from "next/navigation";

import styles from "./app-background.module.css";

const bgByRoute: Record<string, { color: string; imageOpacity: number }> = {
  "/": {
    color: "#05070f",
    imageOpacity: 1
  },
  "/resume": {
    color: "#f4b2cf",
    imageOpacity: 0.12
  },
  "/projects": {
    color: "#9fb7ff",
    imageOpacity: 0.18
  },
};

export function AppBackground() {
  const pathname = usePathname();
  console.log('pathname', pathname);

  const bg = bgByRoute[pathname] ?? { color: "#0b1020", imageOpacity: 0.2 };

  return (
    <div className={styles.appBg}
      style={
        {
          "--bg-color": bg.color,
          "--img-opacity": bg.imageOpacity,
        } as React.CSSProperties
      }
      aria-hidden
    >
      <div className={styles.appBgColor} />
      <div className={styles.appBgImage} />
    </div>
  );
}