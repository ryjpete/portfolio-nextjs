"use client";

import WorkExperience from "@/components/work-experience";

import styles from "./resume.module.css";

export default function ResumePage() {
  return (
    <section className={styles.work}>
      <WorkExperience />
    </section>
  );
}
