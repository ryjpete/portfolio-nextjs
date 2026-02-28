"use client";

import { useEffect, useState } from "react";

import Experience from "../experience";

import styles from "./work-experience.module.css";

interface Experience {
  id: number;
  company: string;
  position: string[];
  tenure: { start: string; end: string; };
  description: string;
  logo: string;
  responsibilities: string[];
  contact: { url: string; };
  tech: { name: string; icon: string }[];
}

export default function WorkExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data.workExperiences);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading work experience...</div>

  return (
    <div className={styles.workExperience}>
      {experiences && experiences.map((exp) => <Experience key={exp.id} {...exp} />)}
    </div>
  );
}
