"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProject } from "@/context/ProjectContext";

import Categories from "../categories";

import styles from "./project.module.css";
import Image from "next/image";

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

interface ProjectProps {
  slug: string;
}

export default function Project({ slug }: ProjectProps) {
  const router = useRouter();
  const { activeProject, setActiveProject } = useProject();
  const [loading, setLoading] = useState(!activeProject);

  console.log("activeProject", activeProject);

  useEffect(() => {
    // If there's an active project, don't fetch
    if (activeProject) return;

    // If no active project, fetch by slug
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const found = data.projects.find((p: Project) => p.slug === slug);

        if (found) {
          setActiveProject(found);
        } else {
          router.push("/projects");
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

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
      {activeProject?.images?.imageSet && (
        <div className={styles.imageSet}>
          {activeProject.images.imageSet.map((src, index) => (
            <div key={index}>
              <Image src={src} alt={`${activeProject.title} screenshot ${index + 1}`} width={800} height={600} className={styles.image} />
            </div>
          ))}
        </div>
      )}
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
