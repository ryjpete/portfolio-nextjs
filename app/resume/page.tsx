"use client";

import Image from "next/image";
import Link from "next/link";

import imgRjp from "@/public/assets/images/rjp.png";

import WorkExperience from "@/components/work-experience";

import styles from "./resume.module.css";

export default function ResumePage() {

  const imgProps = {
    alt: "Ryan Peterson",
    width: 200,
    height: 200,
    src: imgRjp,
    className: styles.image
  };

  const image = <Image {...imgProps} alt={imgProps.alt} />;

  const intro = (
    <section className={styles.intro}>
      <h1>Ryan Peterson</h1>
      <h2>Senior Software Developer</h2>
      <h3>React enthusiast. CSS superhero. Overall nerd.</h3>
    </section>
  );

  const summary = (
    <section className={styles.summary}>
      <p>
        Howdy. I&apos;m Ryan. I&apos;m a senior / lead / principal ... I&apos;m a developer. I have 20+ years of experience designing and building web applications and digital products across various industries using a plethora of technologies. My primary focus is on the frontend, though I&apos;m not opposed to jumping into that full-stack arena.
      </p>
    </section>
  );

  const work = (
    <section className={styles.work}>
      <WorkExperience />
    </section>
  );

  const content = (
    <div className={styles.content}>
      {intro}
      {summary}
      {work}
    </div>
  );

  return (
    <div className={`container ${styles.resume}`}>
      {image}
      {content}
      <p><Link href="/" className="underline">Go back home</Link></p>
    </div>
  );
}
