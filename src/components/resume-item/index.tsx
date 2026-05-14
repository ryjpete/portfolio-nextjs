"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgGrow from "@/app/assets/imgs/grow.svg";
import imgPlc from "@/app/assets/logos/bolt/logo.svg";

import { formatDate } from "@/utils/utils";

import styles from "./resume-item.module.css";

export default function ResumeItem({
  exp,
  onClick,
}: {
  exp: {
    id: number;
    company: string;
    route: string;
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
  onClick?: () => void;
}) {
  return (
    <motion.div
      layoutId={`resume-item-${exp.id}`}
      onClick={onClick}
      className={styles.resumeItem}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <p className={styles.date}>{formatDate(exp.tenure.start)} - {formatDate(exp.tenure.end)}</p>
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
          <Image
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            width={20}
            height={20}
          />
        ))}
      </div>
    </motion.div>
  );
}

