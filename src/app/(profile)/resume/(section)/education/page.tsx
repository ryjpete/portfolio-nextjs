"use client";

import { useEffect, useState } from "react";

import ResumeItem from "@/components/resume-item";

import styles from "../experience/experience.module.css";

interface Education {
  id: number;
  company: string;
  route: string;
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

export default function EducationPage() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setEducation(data.education.eds || []);
      });
  }, []);

  console.log('education', education);

  return (
    <>
      <div className={styles.experiences}>
        {education.map((educ) => (
          <ResumeItem key={educ.id} exp={educ} />
        ))}
      </div>
    </>
  );
}
