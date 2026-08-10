"use client";

import LinkList from "@/components/link-list";
import PageHeader from "@/components/page-header";

import styles from "./resume-section.module.css";

const NAV_LINKS = [
  { label: "Experience", href: "/resume/experience" },
  { label: "Skills",     href: "/resume/skills" },
  { label: "Education",  href: "/resume/education" },
];

export default function ResumeSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <PageHeader />

      <div className={styles.panels}>
        <aside className={styles.nav}>
          <LinkList links={NAV_LINKS} />
        </aside>
        <main className={styles.panel}>
          {children}
        </main>
      </div>
    </div>
  );
}
