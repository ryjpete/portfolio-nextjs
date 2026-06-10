"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import imgPlc from "@/app/assets/logos/bolt/logo.svg";

import styles from "@/components/experience-detail/experience-detail.module.css";

interface Experience {
  id: number;
  company: string;
  route: string;
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

export default function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [exp, setExp] = useState<Experience | null>(null);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        const found = data.experience.workExperiences.find(
          (e: Experience) => e.route.split("/").pop() === slug
        );
        setExp(found ?? null);
      });
  }, [slug]);

  if (!exp) return null;

  const startYear = new Date(exp.tenure.start).getFullYear();
  const endYear = new Date(exp.tenure.end).getFullYear();

  return (
    <motion.div layoutId={`resume-item-${exp.id}`} className={styles.detail}>
      <div className={styles.header}>
        <Image
          src={exp?.logo || imgPlc}
          alt={exp.company}
          className={exp?.logo ? styles.companyLogo : styles.plc}
          width={64}
          height={64}
        />
        <div className={styles.intro}>
          <h2 className={styles.company}>{exp.company}</h2>
          <p className={styles.role}>{exp.role}</p>
          <p className={styles.tenure}>{startYear} – {endYear}</p>
        </div>
      </div>

      <p className={styles.roleDesc}>{exp.roleDesc}</p>

      <ul className={styles.responsibilities}>
        {exp.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      {exp?.tech?.length > 0 && (
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
      )}
    </motion.div>
  );
}
