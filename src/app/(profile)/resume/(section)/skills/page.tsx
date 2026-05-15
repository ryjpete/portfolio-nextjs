"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./skills.module.css";

interface Skill {
  id: number;
  title: string;
  desc: string;
  items: string[];
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
            {skill.items.map((item, idx) => (
              <Image
                key={idx}
                src={item}
                alt={item}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
