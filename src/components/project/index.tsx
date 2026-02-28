"use client";

import { useRouter } from "next/navigation";

import { useProject } from "@/context/ProjectContext";

import Categories from "../categories";

import styles from "./project.module.css";

interface ProjectProps {
  slug: string;
}

export default function Project({ slug }: ProjectProps) {
  const router = useRouter();

  const { activeProject, setActiveProject } = useProject();

  const handleClose = () => {
    setActiveProject(null);
    router.back();
  };

  const backdrop = <div className={styles.backdrop} onClick={handleClose} />;

  const left = (
    <div className={styles.left}>
      <a href={activeProject?.url} target={activeProject?.target || "_blank"} rel="noopener noreferrer">
        <h3>{activeProject?.title}</h3>
      </a>
      {activeProject?.description && <p>{activeProject?.description}</p>}
      {activeProject?.url && (
        <p>
          <a href={activeProject.url} target={activeProject?.target || "_blank"} rel="noopener noreferrer" className={styles.url}>
            {activeProject.url}
          </a>
        </p>
      )}
      {activeProject?.cats && <Categories />}
    </div>
  );

  const right = (
    <div className={styles.right}>
      {activeProject?.techs && Object.entries(activeProject.techs)
        .filter(([_, techs]) => techs.length > 0)
        .map(([category, techs], index) => (
        <div key={index} className={styles.techCategory}>
          <h2>{category}</h2>
          <ul>
            {techs.map((t, tIndex) => <li key={tIndex}>{t}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );

  const project = (
    <div className={styles.project}>
      <div className={styles.content}>
        {left}
        {right}
      </div>
    </div>
  );

  return (
    <>
      {backdrop}
      {project}
    </>
  );
}
