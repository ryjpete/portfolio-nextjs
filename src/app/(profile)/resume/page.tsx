"use client";

import WorkExperience from "@/components/work-experience";

import styles from "./resume.module.css";
import TabHolder from "@/components/tab-holder";

export default function ResumePage() {
  const arrTabs = [
    { name: 'Work Experience', }
    // { name: 'Education', }
    // { name: 'Tech Stack', }
  ];

  const tabFrame = (
    <div className={styles.tabFrame}>
      {arrTabs.map((tab, index) => (
        <TabHolder key={index} tab={tab} />
      ))}
    </div>
  );

  return (
    <section className={styles.work}>
      {arrTabs && tabFrame}

      <div>
        <WorkExperience />
      </div>
    </section>
  );
}
