"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import imgPlc from "@/app/icon-512.png";

// Re-use the project-detail styles (fixed overlay, same as experience-detail pattern)
import detailStyles from "@/components/project-detail/project-detail.module.css";

interface Project {
  title: string;
  slug: string;
  client?: string;
  description?: string;
  stack?: string[];
  thumb?: string;
  specs?: Array<{ display: string; label: string }>;
  url?: string;
  blurb?: string;
  techs?: Array<{ category: string; items: string[] }>;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const allProjects: Project[] = data.projects?.items ?? [];
        const found = allProjects.find((p) => p.slug === slug);
        setProject(found ?? null);
      });
  }, [slug]);

  if (!project) return null;

  return (
    <>
      <motion.div
        className={detailStyles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.back()}
      />

      <motion.div
        layoutId={`project-card-${project.slug}`}
        className={detailStyles.detail}
      >
        <div className={detailStyles.header}>
          <Image
            src={project.thumb || imgPlc}
            alt={project.title}
            className={!project.thumb ? detailStyles.plc : ""}
            width={100}
            height={100}
          />
          <div className={detailStyles.intro}>
            <h2 className={detailStyles.title}>{project.title}</h2>
            {project.client && (
              <p className={detailStyles.client}>{project.client}</p>
            )}
            {project.description && (
              <p className={detailStyles.desc}>{project.description}</p>
            )}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={detailStyles.link}
            >
              View Project
            </a>
          )}
        </div>

        {(project.stack?.length || project.specs?.length) ? (
          <div className={detailStyles.content}>
            {project.stack && project.stack.length > 0 && (
              <div className={detailStyles.stackBlock}>
                <h5>Tech Stack</h5>
                <p className={detailStyles.stack}>{project.stack.join(" · ")}</p>
              </div>
            )}

            {project.specs && project.specs.length > 0 && (
              <ul className={detailStyles.specs}>
                {project.specs.map((spec) => (
                  <li key={spec.label} className={detailStyles.spec}>
                    <span className={detailStyles.specLabel}>{spec.label}</span>
                    <span>{spec.display}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </motion.div>
    </>
  );
}
