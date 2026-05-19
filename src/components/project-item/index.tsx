"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgGrow from "@/app/assets/imgs/grow.svg";
import imgPlc from "@/app/assets/logos/bolt/logo.svg";

import styles from "./project-item.module.css";

export interface Project {
  id: number;
  company: string;
  route: string;
  logo?: string;
  name: string;
  desc?: string;
  tech: { name: string; icon: string }[];
  cats?: string[];
}

export default function ProjectItem({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  return (
    <motion.div
      layoutId={`project-item-${project.id}`}
      onClick={onClick}
      className={styles.projectItem}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {project.route && (
        <Image
          src={imgGrow}
          alt="active"
          className={styles.grow}
          width={24}
          height={24}
        />
      )}

      <div className={styles.header}>
        <Image
          src={project.logo || imgPlc}
          alt={project.company}
          className={project.logo ? styles.thumb : styles.plc}
          width={50}
          height={50}
        />
        <div className={styles.intro}>
          <h3 className={styles.title}>{project.company}</h3>
          <p>{project.name}</p>
        </div>
      </div>

      {project.desc && (
        <p className={styles.description}>{project.desc}</p>
      )}

      {project.tech.length > 0 && (
        <div className={styles.stack}>
          {project.tech.map((t) => (
            <Image
              key={t.name}
              src={t.icon}
              alt={t.name}
              title={t.name}
              width={20}
              height={20}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
