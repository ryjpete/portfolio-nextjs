"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgPlc from "@/app/assets/logos/bolt/logo.svg";

import styles from "@/app/(profile)/resume/(section)/experience/[slug]/experience-detail.module.css";
import { formatDate } from "@/utils/utils";

interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  roleDesc: string;
  description: string;
  contact: { url: string };
  position: string[];
  tenure: { start: string; end: string };
  responsibilities: string[];
  tech: { name: string; icon: string }[];
}

export default function ExperienceDetail({
  exp,
  onClose,
}: {
  exp: Experience;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div layoutId={`resume-item-${exp.id}`} className={`${styles.detail}`}>
        <div className={styles.header}>
          <Image
            src={exp?.logo || imgPlc}
            alt={exp.company}
            className={exp?.logo ? styles.companyLogo : styles.plc}
            width={50}
            height={50}
          />
          <div className={styles.intro}>
            <h2 className={styles.company}>{exp.company}</h2>
            <p className={styles.role}>{exp.role}</p>
            <p className={styles.companyDesc}>{exp.description}</p>
          </div>
          <p className={styles.tenure}>{formatDate(exp.tenure.start)} - {formatDate(exp.tenure.end)}</p>
        </div>

        <div className={styles.content}>
          <p className={styles.roleDesc}>{exp.roleDesc}</p>

          <div className={styles.btm}>
            {exp?.tech?.length > 0 && (
              <div className={styles.stackBlock}>
                <h5>Tech Stack</h5>
                <div className={styles.stack}>
                  {exp.tech.map((tech) => (
                    <Image
                      key={tech.name}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
              </div>
            )}

            <ul className={styles.responsibilities}>
              {exp.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
