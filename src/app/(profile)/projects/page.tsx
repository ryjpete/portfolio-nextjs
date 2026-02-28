"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProject } from "@/context/ProjectContext";

import Categories from "@/components/categories";
import Project from "@/components/project";

import styles from "./projects.module.css";

interface Project {
  title: string;
  slug: string;
  url?: string;
  target?: string;
  client?: string;
  type?: string;
  blurb?: string;
  description?: string;
  cats?: string[];
  images: {
    thumb: string;
    imageSet?: string[];
  };
  techs?: {
    [category: string]: string[];
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { activeProject, setActiveProject } = useProject();
  
  const router = useRouter();

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
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
    router.push(`/projects/${project.slug}`);
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
          {prj.blurb && <p>{prj.blurb}</p>}

          {prj.cats && <Categories project={prj} />}
        </button>
      ))}
    </>
  ) : null;

  return (
    <section className={styles.projects}>
      {projectsBlock}

      <div className={`${styles.project} ${styles.persist}`}>
        <h4>Keep coming back.</h4>
        <p>This whole site is a work in progress. And admittedly, I&rsquo;ve always been terrible at keeping up with a portfolio site. So, I&rsquo;ll keep adding things. You keep checking back. Deal.</p>
      </div>
    </section>
  );
}
