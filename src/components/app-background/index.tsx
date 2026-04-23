"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import imgLines from "@/app/assets/imgs/lines.svg";

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
    color: "var(--clr-green-grass)",
    imageOpacity: 0.05
  },
};

export default function AppBackground() {
  const pathname = usePathname();

  const bg =
    bgByRoute[pathname] ??
    Object.entries(bgByRoute).find(([key]) => key.endsWith("/*") && pathname.startsWith(key.slice(0, -2)))?.[1] ??
    { color: "var(--clr-green-jade-glass)", imageOpacity: 0.2 };

  const lines = (
    <div className={styles.lines} data-page={pathname}>
			<Image src={imgLines} alt="Decorative lines" width={200} height={100} />
		</div>
  );

  return (
    <div className={styles.appBg}
      style={
        {
          "--bg-color": bg.color,
          "--img-opacity": bg.imageOpacity,
          "--bg-image": `url(/assets/images/bgs/galaxy2.png)`
        } as React.CSSProperties
      }
      aria-hidden
    >
      <div className={styles.appBgColor} />
      {lines}
      <div className={styles.appBgImage} />
    </div>
  );
}