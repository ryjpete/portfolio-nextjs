"use client";

import Image from "next/image";

import { useProject } from "@/context/ProjectContext";
import { mapProjectCategories } from "@/utils/utils";

import styles from "./categories.module.css";

export default function Categories({ project }: { project?: { cats?: string[] } }) {
  const { activeProject } = useProject();

  const projectToUse = project || activeProject;

  if (!projectToUse || !projectToUse.cats) {
    return null;
  }

  return (
    <ul className={styles.cats}>
      {mapProjectCategories(projectToUse.cats).map(({ label, icon }, index) => (
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
