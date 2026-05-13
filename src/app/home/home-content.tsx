"use client";

import Link from "next/link";

import styles from "./home.module.css";

export default function HomeContent() {
  return (
    <div className={`container ${styles.container}`}>
      <h1>
        <span>Design System Engineer</span>
        <span>Senior Frontend</span>
        <span>UI Engineer</span>
        <span>Frontend Software Dev</span>
        <span>Web Developer</span>
        <span>Creative</span>
      </h1>
    </div>
  );
}
