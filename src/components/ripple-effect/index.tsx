"use client";

import { useEffect } from "react";
import styles from "./ripple-effect.module.css";

export default function RippleEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // don't show ripple on buttons/links/interactive els.
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select")
      ) {
        return;
      }

      // create ripple element
      const ripple = document.createElement('div');
      ripple.className = styles.ripple;
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      // append ripple to body
      document.body.appendChild(ripple);

      // remove ripple after animation
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [])

  return null;
}
