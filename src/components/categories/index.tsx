"use client";

import Image from "next/image";

import { useProject, ProjectCntxt } from "@/context/ProjectContext";
import { mapProjectCategories } from "@/utils/utils";

import styles from "./categories.module.css";

interface CategoriesProps {
	project?: ProjectCntxt;
	showCatTitle?: boolean;
	catTitle?: string;
	showCatItemTitle?: boolean;
}

export default function Categories({
	project,
	showCatTitle = false,
	catTitle,
	showCatItemTitle = false,
}: CategoriesProps) {
	const { activeProject } = useProject();

	const projectToUse = project ?? activeProject;

	if (!projectToUse || !projectToUse.cats) {
		return null;
	}

	return (
		<div className={styles.categories}>
			{showCatTitle && <h5>{catTitle}</h5>}
			<ul className={styles.cats}>
				{mapProjectCategories(projectToUse.cats).map(({ label, icon }) => (
					<li key={label}>
						{icon ? (
							<>
								<Image
									src={icon}
									alt={label}
									width={48}
									height={48}
								/>
								{showCatItemTitle && <span>{label}</span>}
							</>
						) : (
							<span>{label}</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
