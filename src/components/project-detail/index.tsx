"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgPlc from "@/app/icon-512.png";

import styles from "./project-detail.module.css";
// import styles from "@/app/(profile)/resume/(section)/experience/[slug]/experience-detail.module.css";

import { type Project } from "@/components/project-item";

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  console.log('ProjectDetail render', { project });
  return (
    <>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        layoutId={`project-item-${project.id}`}
        className={styles.detail}
      >
        <div className={styles.header}>
          <Image
            src={project.logo || imgPlc}
            alt={project.company}
            className={!project.logo ? styles.plc : ""}
            width={50}
            height={50}
          />
          <div className={styles.intro}>
            <h2 className={styles.company}>{project.company}</h2>
            <p className={styles.role}>{project.name}</p>
            {project.desc && <p className={styles.desc}>{project.desc}</p>}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.frame}>
            {project.detailedDesc && (
              <div className={styles.detailedDesc}>
                {/* <h5>a little bit more...</h5> */}
                <p className={styles.roleDesc}>{project.detailedDesc}</p>
              </div>
            )}

            {project.roleDesc && (
              <div className={styles.detailedDesc}>
                <h5>my role</h5>
                <p className={styles.roleDesc}>{project.roleDesc}</p>
              </div>
            )}

            <div className={styles.btm}>
              {project.tech?.length > 0 && (
                <div className={styles.stackBlock}>
                  <h5>Tech Stack</h5>
                  <div className={styles.stack}>
                    {project.tech.map((t) => (
                      t.svg
                        ? <span key={t.name} title={t.name} dangerouslySetInnerHTML={{ __html: t.svg }} />
                        : t.icon
                          ? <Image key={t.name} src={t.icon} alt={t.name} title={t.name} width={24} height={24} />
                          : null
                    ))}
                  </div>
                </div>
              )}

              {/* <div className={styles.highlights}> */}
                {project.highlights ? (
                  <ul className={styles.highlights}>
                    {project.highlights.map((h, index) => (
                      <li key={index}>
                        <strong>{h.label}:</strong> {h.entry}
                      </li>
                    ))}
                  </ul>
                ) : null}
              {/* </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
