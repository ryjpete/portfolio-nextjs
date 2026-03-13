"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Experience from "../experience";

import styles from "./tech-stack.module.css";

interface Experience {
  id: number;
  company: string;
  position: string[];
  tenure: { start: string; end: string; };
  description: string;
  stack: { name: string; icon: string }[];
}

interface Tab {
  title: string;
  workExperiences: Experience[];
}

export default function TechStack() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data.tabs.find((tab: Tab) => tab.title === "Tech Stack")?.stack || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading tech stack...</div>

  return (
    <div className={styles.techStack}>
      {experiences && experiences.map((exp, index) => {
        console.log('exp: ', exp);
        const header = <h3>{exp.company}</h3>;

        const infoBlock = (
          <div className={styles.info}>
            <div className={styles.coInfo}>
              {header}
              {exp.description && <p className="sm">{exp.description}</p>}
            </div>
          </div>
        );

        const items = exp.stack.length > 0 && exp.stack.map((item, index) => (
          <Image
            key={index}
            src={item.icon}
            alt={item.name}
            width={32}
            height={32}
            title={item.name}
          />
        ));

        const positionBlock = (
          <div className={styles.position}>
            {items}
          </div>
        );

        return (
          <div key={index} className={styles.exp}>
            {infoBlock}
            {positionBlock}
          </div>
        )
      })}
    </div>
  );
}
