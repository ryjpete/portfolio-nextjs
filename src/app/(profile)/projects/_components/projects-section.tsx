"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ProjectDetail from "@/components/project-detail";
import ProjectItem, { Project } from "@/components/project-item";

import styles from "../projects.module.css";

function filterProjects(projects: Project[], filter: string): Project[] {
  if (filter === "all") return projects;
  return projects.filter((p) => {
    const cats = (p.cats ?? []).map((c) => c.toLowerCase());
    if (filter === "mobile") return cats.includes("mobile");
    if (filter === "web") return cats.includes("web");
    if (filter === "design") return cats.includes("design");
    return true;
  });
}

export default function ProjectsSection({
  sectionKey,
  filter = "all",
}: {
  sectionKey: string;
  filter?: string;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const items = data[sectionKey]?.items;
        if (Array.isArray(items)) {
          setProjects(items);
        }
      });
  }, [sectionKey]);

  useEffect(() => {
    if (selected) window.history.pushState({ modal: true }, "");
  }, [selected]);

  useEffect(() => {
    const handlePopState = () => {
      if (selected) setSelected(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selected]);

  const filtered = filterProjects(projects, filter);

  return (
    <div className={styles.projects}>
      {filtered.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          onClick={() => setSelected(project)}
        />
      ))}

      <AnimatePresence>
        {selected && (
          <ProjectDetail project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
