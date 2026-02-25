"use client";

// import Image from "next/image";s
import Link from "next/link";

// import imgRjp from "@public/assets/images/rjp.png";

import WorkExperience from "@/components/work-experience";

import styles from "./resume.module.css";

export default function ResumePage() {

  // const imgProps = {
  //   alt: "Ryan Peterson",
  //   width: 200,
  //   height: 200,
  //   src: imgRjp,
  //   className: styles.image
  // };

  // const image = <Image {...imgProps} alt={imgProps.alt} />;

  const intro = (
    <div className={styles.intro}>
      <div>
        <p>UI Engineer.</p>
        <p>Frontend Software Dev. React enthusiast. CSS superhero. Overall nerd.</p>
      </div>
      <p>
        I&apos;m a versatile UI Engineer that has straddled the line between design and development for 20 years. I&apos;ve been labeled as a designer, frontend developer, software engineer, etc. No matter the title, I love building clean, organized code that creates parity between beautifully crafted designs and streamlined functional applications. Figma, CSS, and React are my best friends.
      </p>
    </div>
  );

  const work = (
    <section className={styles.work}>
      <WorkExperience />
    </section>
  );

  const content = (
    <>
      <h1>Ryan Peterson.</h1>
      {intro}
      {work}
    </>
  );

  return (
    <div className={`container ${styles.resume}`}>
      {/* {image} */}
      {content}
      {/* <p><Link href="/" className="underline">Go back home</Link></p> */}
    </div>
  );
}
