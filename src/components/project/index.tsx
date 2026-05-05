"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { useProject, ProjectCntxt } from "@/context/ProjectContext";

import Categories from "../categories";

import styles from "./project.module.css";

interface ProjectProps {
	slug: string;
}

export default function Project({ slug }: ProjectProps) {
	const router = useRouter();
	const { activeProject, setActiveProject } = useProject();

	console.log('activeProject', activeProject);

	useEffect(() => {
		// If there's an active project, don't fetch
		if (activeProject?.slug === slug) return;

		// If no active project, fetch by slug
		fetch("/api/projects")
			.then((res) => res.json())
			.then((data) => {
				const found = data.projects.find(
					(p: ProjectCntxt) => p.slug === slug,
				);

				if (found) {
					setActiveProject(found);
				} else {
					router.push("/projects");
				}
			})
	}, [slug, activeProject, setActiveProject, router]);

	useEffect(() => {
		return () => {
			setActiveProject(null);
		};
	}, [setActiveProject]);

	// const left = (
	// 	<div className={styles.left}>
	// 		<h5>
	// 			Project Status:{" "}
	// 			{activeProject?.isActive ? (
	// 				<span className={styles.active}>Active</span>
	// 			) : (
	// 				<span className={styles.inactive}>Inactive</span>
	// 			)}
	// 		</h5>

	// 		{activeProject?.cats && (
	// 			<div className={styles.roles}>
	// 				<h5>Project Roles</h5>
	// 				<Categories showCatItemTitle={true} />
	// 			</div>
	// 		)}
	// 	</div>
	// );

	// const right = (
	// 	<div className={styles.right}>
	// 		{activeProject?.images?.imageSet && (
	// 			<div className={styles.imageSet}>
	// 				{activeProject.images.imageSet.map((src, index) => (
	// 					<Image
	// 						key={src}
	// 						src={src}
	// 						alt={`${activeProject.title} screenshot ${index + 1}`}
	// 						width={800}
	// 						height={600}
	// 						className={styles.image}
	// 					/>
	// 				))}
	// 			</div>
	// 		)}

	// 		{activeProject?.techs && (
	// 			<div className={styles.techs}>
	// 				{activeProject.techs.map(({ category, items }) => (
	// 					<Categories
	// 						key={category}
	// 						project={{ cats: items }}
	// 						showCatTitle={true}
	// 						catTitle={category}
	// 						showCatItemTitle={true}
	// 					/>
	// 				))}
	// 			</div>
	// 		)}
	// 	</div>
	// );

	const project = (
		<div className={styles.project}>
			<div className={styles.header}>
				<h1>{activeProject?.title}</h1>
			</div>

			<div className={styles.body}>
				{activeProject?.description && <h5>{activeProject?.description}</h5>}

				{activeProject?.client !== "me" && (
					<div>
						<h5>Client</h5>
						<p>{activeProject?.client}</p>
					</div>
				)}

				<div className={styles.content}>
					{activeProject?.stack && (
						<div>
							<h5>Tech Stack</h5>
							<p>{activeProject.stack}</p>
						</div>
					)}
					{activeProject?.specs && activeProject.specs.length > 0 && (
						<div>
							<h5>Highlights</h5>
							<ul>
								{activeProject.specs.map(({ display, label }) => (
									<li key={label}>
										<strong>{label}:</strong> {display}
									</li>
								))}
							</ul>
						</div>
					)}
					{activeProject?.imageSet && (
						<div className={styles.imageSet}>
							{activeProject.imageSet.map((img, index) => (
								<Image
									key={img}
									src={img}
									alt={`${activeProject.title} screenshot ${index + 1}`}
									width={800}
									height={600}
									className={styles.image}
								/>
							))}
						</div>
					)}
				</div>
			</div>
			
		</div>
	);

	return (
		<>
			{project}
		</>
	);
}
