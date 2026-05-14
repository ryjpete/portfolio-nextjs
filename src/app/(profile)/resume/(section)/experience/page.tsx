"use client";

import ResumeItem from "@/components/resume-item";

import styles from "./experience.module.css";
import { useEffect, useState } from "react";

interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  roleDesc: string;
  position: string[];
  tenure: { start: string; end: string; };
  description: string;
  responsibilities: string[];
  contact: { url: string; };
  tech: { name: string; icon: string }[];
}

interface Tab {
  title: string;
  workExperiences: Experience[];
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data.tabs.find((tab: Tab) => tab.title === "Work Experience")?.workExperiences || []);
      });
  }, []);

  return (
    <div className={styles.experiences}>
      {experiences && experiences.map((exp) => <ResumeItem key={exp.id} exp={exp} />)}
    </div>
  );
}
