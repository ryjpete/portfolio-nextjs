"use client";

import LinkList from "@/components/link-list";
import PageHeader from "@/components/page-header";

import styles from "../resume/(section)/resume-section.module.css";

const NAV_LINKS = [
  { label: "All Projects", href: "/projects" },
  { label: "Web Apps",     href: "/projects/web-apps" },
  { label: "Mobile Apps",  href: "/projects/mobile-apps" },
  { label: "Design",       href: "/projects/design" },
];

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
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
