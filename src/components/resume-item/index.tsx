"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { formatDate } from "@/utils/utils";

import Logo from "../logo";

import styles from "./resume-item.module.css";

export default function ResumeItem({
  exp,
  onClick,
}: {
  exp: {
    id: number;
    company: string;
    route?: string;
    logo: string;
    role: string;
    roleDesc: string;
    description: string;
    contact: { url: string };
    position: string[];
    tenure: { start?: string; end?: string };
    responsibilities: string[];
    tech: { name: string; icon?: string; svg?: string }[];
  };
  onClick?: () => void;
}) {
  const clr = "var(--clr-red-flicker-pink)";

  return (
    <motion.div
      layoutId={`resume-item-${exp.id}`}
      onClick={onClick}
      className={styles.resumeItem}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {exp?.tenure?.start || exp?.tenure?.end ? <p className={styles.date}>{formatDate(exp?.tenure?.start)} - {formatDate(exp?.tenure?.end)}</p> : null}

      {exp.route && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.grow}>
          <path d="M24 0L0 0L24 24L24 0Z" fill={clr}/>
        </svg>
      )}

      <div className={styles.header}>
        {exp?.logo ? (
          <Image
            src={exp.logo}
            alt={exp.company}
            className={exp?.logo ? styles.companyLogo : styles.plc}
            width={50}
            height={50}
          />
        ) : (
          <Logo />
        )}
        <div className={styles.intro}>
          <h3 className={styles.client}>{exp.company}</h3>
          <p className={styles.role}>{exp.role}</p>
        </div>
      </div>

      <p className={styles.roleDesc}>{exp.roleDesc}</p>

      <div className={styles.stack}>
        {exp?.tech?.map((tech) => {
          console.log('tech', tech);
          return (
          tech.svg
            ? <span key={tech.name} dangerouslySetInnerHTML={{ __html: tech.svg }} />
            : tech.icon
              ? <Image key={tech.name} src={tech.icon} alt={tech.name} title={tech.name} width={24} height={24} />
              : null
        )})}
      </div>
    </motion.div>
  );
}

