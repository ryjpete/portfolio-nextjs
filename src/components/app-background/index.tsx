"use client";

// import { useEffect, useState } from "react";
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
    color: "var(--clr-red-ponzu-brown)",
    imageOpacity: 0.05
  },
};

export default function AppBackground() {
  const pathname = usePathname();
  // const [bgImageLoaded, setBgImageLoaded] = useState<string | null>(null);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   fetch("/api/hubble-feed")
  //     .then((res) => res.text())
  //     .then(async (xmlStr) => {
  //       const parser = new DOMParser();
  //       const xml = parser.parseFromString(xmlStr, "application/xml");
  //       const items = xml.querySelectorAll("item");
  //       const images = Array.from(items)
  //         .map((item) => item.querySelector("enclosure")?.getAttribute("url"))
  //         .filter(Boolean) as string[];

  //       const filteredImages = (await Promise.all(
  //         images.map((url) =>
  //           new Promise<string | null>((resolve) => {
  //             const img = new Image();
  //             img.onload = () => resolve(img.naturalWidth > 900 ? url : null);
  //             img.onerror = () => resolve(null);
  //             img.src = url;
  //           })
  //         )
  //       )).filter(Boolean) as string[];

  //       if (filteredImages.length > 0) {
  //         const random = filteredImages[Math.floor(Math.random() * filteredImages.length)];
  //         setBgImageLoaded(random);
  //       }
  //     });
  // }, []);

  const bg = bgByRoute[pathname] ?? { color: "oklch(0.22 0.03 265)", imageOpacity: 0.2 };

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
          // "--bg-image": `url(${bgImageLoaded ?? ""})`
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