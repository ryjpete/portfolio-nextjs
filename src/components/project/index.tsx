"use client";

import styles from "./project.module.css";

export default function Project() {
  const backdrop = <div className={styles.backdrop} />;

  const project = (
    <div className={styles.project}>
      <div className={styles.content}>
        <p>Project details coming soon...</p>
      </div>
    </div>
  );

  return (
    <>
      {backdrop}
      {project}
    </>
  );
}
