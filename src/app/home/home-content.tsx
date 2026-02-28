"use client";

import Link from "next/link";

import styles from "./home.module.css";

export default function HomeContent() {
  return (
    <div className={`container ${styles.container}`}>
      <h1>
        <span>HI. I&rsquo;M </span>
        <Link
          href="/about"
          className={styles.link}
        >
          RYAN
        </Link>
        <span>.</span>
        <br />
        <span>I&rsquo;M a </span>
        <Link
          href="/resume"
          className={styles.link}
        >
          UI ENGINEER
        </Link>
        <span>.</span>
        <br />
        <span>I </span>
        <Link
          href="/projects"
          className={`${styles.build} ${styles.link}`}
        >
          BUILD
          <div className={styles.subs}>
            <span>CREATE</span>
            <span>DEVELOP</span>
            <span>DESIGN</span>
            <span>WRITE</span>
            <span>PLAY</span>
          </div>{" "}
          <span>THINGS.</span>
        </Link>
      </h1>
    </div>
  );
}
