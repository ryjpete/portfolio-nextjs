"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { mapProjectCategories } from "@/utils/utils";

import styles from "./projects.module.css";
import Project from "@/components/project";
import { useProject } from "@/context/ProjectContext";

interface Project {
  title: string;
  client?: string;
  type?: string;
  description?: string;
  cats?: string[];
  images: {
    thumb: string;
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { activeProject, setActiveProject } = useProject();

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);

  };

  const projectsBlock = projects.length > 0 ?(
    <>
      {projects && projects.map((prj, index) => (
        <button
          key={index}
          className={`${styles.project} ${activeProject?.title === prj.title ? styles.active : ""}`}
          style={{ "--bgi": `url(${prj.images.thumb})` } as React.CSSProperties}
          onClick={() => handleProjectClick(prj)}
        >
          <div className={styles.intro}>
            <h5>{prj.title}</h5>
            {prj.type && <p className={styles.type}>{prj.type}{prj.client && <> for {prj.client}</>}</p>}
          </div>
          {prj.description && <p>{prj.description}</p>}

          {prj.cats && (
            <ul className={styles.cats}>
              {mapProjectCategories(prj.cats).map(({ label, icon}, index) => (
                <li key={index}>
                  {icon ? (
                    <Image src={icon} alt={label} width={48} height={48} />
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </button>
      ))}
    </>
  ) : null;

  const project = <Project />;

  return (
    <section className={styles.projects}>
      {projectsBlock}

      <div className={`${styles.project} ${styles.persist}`}>
        <h4>Keep coming back.</h4>
        <p>This whole site is a work in progress. And admittedly, I&rsquo;ve always been terrible at keeping up with a portfolio site. So, I&rsquo;ll keep adding things. You keep checking back. Deal.</p>
      </div>

      {activeProject && <>{project}</>}
    </section>
  );
}
