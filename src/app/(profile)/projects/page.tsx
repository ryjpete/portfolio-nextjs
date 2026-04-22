"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProject } from "@/context/ProjectContext";

import ProjectCard from "@/components/project-card";

import styles from "./projects.module.css";

interface Project {
  title: string;
  slug: string;
  url?: string;
  target?: string;
  client?: string;
  isActive?: boolean;
  type?: string;
  blurb?: string;
  description?: string;
  cats?: string[];
  images: {
    thumb: string;
    imageSet?: string[];
  };
  techs?: Array<{
    category: string;
    isActive?: boolean;
    items: string[];
  }>;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { activeProject } = useProject();
  
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
    router.push(`/projects/${project.slug}`);
  };

  const projectsBlock =
		projects.length > 0
			? projects.map((prj, index) => (
					// <>
					//   {projects && projects.map((prj, index) => (
					//     <button
					//       key={index}
					//       className={`${styles.project} ${activeProject?.title === prj.title ? styles.active : ""}`}
					//       style={{ "--bgi": `url(${prj.images.thumb})` } as React.CSSProperties}
					//       onClick={() => handleProjectClick(prj)}
					//     >
					//       <div className={styles.intro}>
					//         <h5>{prj.title}</h5>
					//         {prj.type && <p className={styles.type}>{prj.type}{prj.client && <> for {prj.client}</>}</p>}
					//       </div>
					//       {prj.blurb && <p>{prj.blurb}</p>}

					//       {prj.cats && <Categories project={prj} />}
					//     </button>
					//   ))}
					// </>
					<ProjectCard
						key={index}
						project={prj}
						onClick={() => handleProjectClick(prj)}
					/>
				))
			: null;

  return (
    <section className={styles.projects}>
      {projectsBlock}

      {/* <div className={`${styles.project} ${styles.persist}`}>
        <h4>Keep coming back.</h4>
        <p>This whole site is a work in progress. And admittedly, I&rsquo;ve always been terrible at keeping up with a portfolio site. So, I&rsquo;ll keep adding things. You keep checking back. Deal.</p>
      </div> */}
    </section>
  );
}
