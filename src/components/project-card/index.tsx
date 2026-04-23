"use client";

import Image from "next/image";

import Categories from "../categories";

import imgGo from "../../../public/assets/images/icons/icon-go.svg";

import styles from "./project-card.module.css";

interface ProjectData {
  project: {
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
      items: string[]
    }>;
  };
  onClick?: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectData) {
  console.log("ProjectCard project:", project);

  const header = (
    <div className={styles.header}>
      <h2>{project.title}</h2>
      <Image
        src={imgGo}
        alt={`View details for ${project.title}`}
        width={48}
        height={48}
      />
    </div>
  );

  const contentTop = (
    <div className={styles.contentTop}>
      <div className={styles.intro}>
        {project.isActive && <h5>Active</h5>}

        {project.cats && project.cats.length > 0 && <Categories project={project} />}
      </div>

      {project.description && <p>{project.description}</p>}
    </div>
  );

  const contentBtm = (
    <div className={styles.contentBtm}>
      {project.techs && (
        <div className={styles.techs}>
          {project.techs.map(({ category, items }) => (
            <Categories key={category} project={{ cats: items }} />
          ))}
        </div>
      )}

      <Image
        src={project.images.thumb}
        alt={`Thumbnail for ${project.title}`}
        width={200}
        height={200}
      />
    </div>
  );

  const content = (
    <div className={styles.content}>
      {contentTop}
      {contentBtm}
    </div>
  );

  const body = (
    <div className={styles.body}>
      <div className={styles.side} />
      {content}
    </div>
  );

  const footer = <div className={styles.footer} />;

	return (
		<button
      type="button"
      className={styles.projectCard}
      onClick={onClick}
    >
      {header}
			{body}
      {footer}
		</button>
	);
}
