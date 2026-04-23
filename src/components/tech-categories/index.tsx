"use client";

import Image from "next/image";

import { useProject } from "@/context/ProjectContext";
import { mapProjectCategories } from "@/utils/utils";

import styles from "./categories.module.css";

export default function TechCategories({ project }: { project?: { techs?: string[] } }) {
  const { activeProject } = useProject();

  const projectToUse = project || activeProject;

  if (!projectToUse || !projectToUse.techs || projectToUse.techs.length === 0) {
    return null;
  }

  return (
    <ul className={styles.cats}>
      {mapProjectCategories(Object.keys(projectToUse.techs)).map(({ label, icon }, index) => (
        <li key={index}>
          {icon ? (
            <Image src={icon} alt={label} width={48} height={48} />
          ) : (
            <span>{label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
