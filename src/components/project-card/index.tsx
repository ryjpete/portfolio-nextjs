"use client";

import Image from "next/image";

import imgGo from "../../../public/assets/images/icons/icon-go.svg";
import imgPlc from "@/app/icon-512.png";

import styles from "./project-card.module.css";

interface ProjectData {
  project: {
    title: string;
    slug: string;
    client: string;
    description: string;
    stack: string[];
    thumb?: string;
    imageSet?: string[];
    specs?: Array<{
      display: string;
      label: string;
    }>;

    url?: string;
    target?: string;
    isActive?: boolean;
    type?: string;
    blurb?: string;
    cats?: string[];
    techs?: Array<{
      category: string;
      isActive?: boolean;
      items: string[];
    }>;
  };
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectData) {
  const header = (
    <div className={styles.header}>
      <h2>{project.title}</h2>
    </div>
  );

  const content = (
    <div className={styles.content}>
      <Image
        src={project?.thumb || imgPlc}
        alt={`Thumbnail for ${project.title}`}
        width={1000}
        height={1000}
        className={!project?.thumb ? styles.plc : ''}
      />

      <div className={styles.details}>
        <div className={styles.intro}>
          {project.description && (
            <p className={styles.desc}>{project.description}</p>
          )}
          {project.stack && (
            <p className={styles.blurb}>{project.stack}</p>
          )}
        </div>
        <Image
          src={imgGo}
          alt={`View details for ${project.title}`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );

  const body = (
    <div className={styles.body}>
      <div className={styles.side} />
      {content}
    </div>
  );

  const footer = <div className={styles.footer} />;

  return (
    <button
      type="button"
      className={styles.projectCard}
      onClick={onClick}
    >
      {header}
      {body}
      {footer}
    </button>
  );
}