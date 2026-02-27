"use client";

import Link from "next/link";

import styles from "./home.module.css";

export default function HomeContent() {
  return (
    <div className={`container ${styles.container}`}>
      <h1>
        HI. I&rsquo;M <Link href="/about">RYAN</Link>.<br />
        I&rsquo;M A <Link href="/resume">UI ENGINEER</Link>.<br />
        {/* I <Link href="/projects">BUILD THINGS</Link>. */}
        I <span>
          BUILD

          <div className={styles.subs}>
            <span>CREATE</span>
            <span>DEVELOP</span>
            <span>DESIGN</span>
            <span>WRITE</span>
            <span>PLAY</span>
          </div>
        </span>
        &nbsp;THINGS.
      </h1>
    </div>
  );
}
