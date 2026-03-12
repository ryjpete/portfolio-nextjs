"use client";

import { useState } from "react";

import Carousel from "@/components/carousel";
import WorkExperience from "@/components/work-experience";

import styles from "./resume.module.css";
import Education from "@/components/education";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("Work Experience");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const arrTabs = [
    {
      name: 'Work Experience',
      onClick: () => setActiveTab("Work Experience"),
      panel: <WorkExperience />,
    },
    {
      name: 'Education',
      onClick: () => setActiveTab("Education"),
      panel: <Education />,
    },
    // {
    //   name: 'Tech Stack',
    //   onClick: () => setActiveTab("Tech Stack"),
    //   panel: <p>Tech stack</p>,
    // },
  ];

  return (
    <section className={styles.work}>
      <Carousel
        carousel={arrTabs}
        activeTab={activeTab}
        onTabClick={(tabname) => handleTabClick(tabname)}
      />
    </section>
  );
}
