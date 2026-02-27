"use client";

import { usePathname } from "next/navigation";

import styles from "./app-background.module.css";

const bgByRoute: Record<string, { color: string; imageOpacity: number }> = {
  "/": {
    color: "oklch(0.18 0.02 260)",
    imageOpacity: 1
  },
  "/about": {
    color: "var(--clr-red-bonker-pink)",
    imageOpacity: 0.05
  },
  "/resume": {
    color: "var(--clr-red-himalayan-balsam)",
    imageOpacity: 0.05
  },
  "/projects": {
    color: "var(--clr-red-ponzu-brown)",
    imageOpacity: 0.05
  },
};

export function AppBackground() {
  const pathname = usePathname();
  console.log('pathname', pathname);

  const bg = bgByRoute[pathname] ?? { color: "oklch(0.22 0.03 265)", imageOpacity: 0.2 };

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