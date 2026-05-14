"use client";

import Image from "next/image";

import imgGrow from "@/app/assets/imgs/grow.svg";
import imgPlc from "@/app/assets/logos/bolt/logo.svg";

import styles from "./resume-item.module.css";

export default function ResumeItem({ exp }: {
  exp: {
    id: number;
    company: string;
    logo: string;
    role: string;
    roleDesc: string;
    description: string;
    contact: { url: string };
    position: string[];
    tenure: { start: string; end: string };
    responsibilities: string[];
    tech: { name: string; icon: string }[];
  };
}) {
  console.log('data', exp);

  return (
    <div className={styles.resumeItem}>
      <Image
        src={imgGrow}
        alt="grow"
        className={styles.grow}
        width={24}
        height={24}
      />

      <div className={styles.header}>
        <Image
          src={exp?.logo || imgPlc}
          alt={exp.company}
          className={exp?.logo ? styles.companyLogo : styles.plc}
          width={50}
          height={50}
        />
        <div className={styles.intro}>
          <h3 className={styles.client}>{exp.company}</h3>
          <p className={styles.role}>{exp.role}</p>
        </div>
      </div>

      <p className={styles.roleDesc}>{exp.roleDesc}</p>

      <div className={styles.stack}>
        {exp?.tech?.map((tech) => (
          <div key={tech.name} className={styles.tech}>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
