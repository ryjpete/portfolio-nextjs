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
      <h2>UI Engineer.</h2>
      <h3>Frontend Software Dev. React enthusiast. CSS superhero. Overall nerd.</h3>
    </section>
  );

  const summary = (
    <section className={styles.summary}>
      <p>
        Hey there. I&apos;m Ryan. It&apos;s wild how many titles exist for what I&apos;ve been up to for the past two decades. But the one that fits best would probably be <strong>UI Engineer</strong>. I fit right at that intersection of design and developmnent. My education and early career started from the design world, but I quickly found passion in building and styling digital things. Figma and React are my best friends, and the challenge of creating parity between the two is what gets me going. That&apos;s not to say deep-diving on creative mockups and backend development isn&apos;t something I&apos;m interested in. It is. It&apos;s just that my sweet spot has always been somewhere in the middle. I love crafting clean code with streamlined styling that is flawless across the board. The goal is to hand off code to the backend team that is seamless to integrate with.
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
