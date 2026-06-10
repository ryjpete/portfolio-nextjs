"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "../logo";

import styles from "./project-item.module.css";

export interface Project {
  id: number;
  company: string;
  route: string;
  logo?: string;
  name: string;
  desc?: string;
  detailedDesc?: string;
  roleDesc?: string;
  highlights?: { id?: number; label: string; entry: string }[];
  slug?: string;
  tech: { name: string; icon?: string; svg?: string }[];
  cats?: string[];
}

export default function ProjectItem({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const clr = "var(--clr-violet-pheromone)";

  return (
    <motion.div
      layoutId={`project-item-${project.id}`}
      onClick={onClick}
      className={styles.projectItem}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {project.route && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.grow}>
          <path d="M24 0L0 0L24 24L24 0Z" fill={clr}/>
        </svg>
      )}

      <div className={styles.header}>
        {project?.logo ? (
          <Image
            src={project.logo}
            alt={project.company}
            className={project.logo ? styles.thumb : styles.plc}
            width={50}
            height={50}
          />
        ) : (
          <Logo />
        )}
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
            t.svg
              ? <span key={t.name} title={t.name} dangerouslySetInnerHTML={{ __html: t.svg }} />
              : t.icon
                ? <Image key={t.name} src={t.icon} alt={t.name} title={t.name} width={24} height={24} />
                : null
          ))}
        </div>
      )}
    </motion.div>
  );
}
