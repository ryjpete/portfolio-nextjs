"use client";

import LinkList from "@/components/link-list";

import styles from "./home.module.css";

const LINKS = [
  { label: "Resume",   href: "/resume" },
  { label: "Projects", href: "/projects" },
];

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

      <LinkList links={LINKS} />
    </div>
  );
}
