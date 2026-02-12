"use client";

import styles from "./breathe-effect.module.css";

export default function BreatheEffect({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.breatheEffect}>{children}</div>
  );
}
