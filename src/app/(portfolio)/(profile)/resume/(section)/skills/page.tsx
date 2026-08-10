"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./skills.module.css";

interface Skill {
  id: number;
  title: string;
  desc: string;
  items: string[];
  tech: { name: string; icon?: string; svg?: string }[];
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills.sklz || []);
      })
  }, []);

  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.skillsSection}>
          <div className={styles.intro}>
            <h5>{skill.title}</h5>
            <p>{skill.desc}</p>
          </div>

          <div className={styles.icons}>
            {skill.tech.map((tech) => (
              tech.svg
                ? <span key={tech.name} dangerouslySetInnerHTML={{ __html: tech.svg }} />
                : tech.icon
                  ? <Image key={tech.name} src={tech.icon} alt={tech.name} title={tech.name} width={24} height={24} />
                  : null
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
