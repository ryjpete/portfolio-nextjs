import { formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

import styles from "./experience.module.css";

export default function Experience({
	id,
	company,
	position,
	tenure,
	description,
	logo,
  responsibilities,
	contact,
}: {
	id: number;
	company: string;
	position: string[];
	tenure: { start: string; end: string; };
	description: string;
	logo: string;
  responsibilities: string[];
  contact: { url: string; };
}) {
  console.log(position)
  const logoProps = {
    src: logo,
    alt: `${company} logo`,
    width: 50,
    height: 50,
    style: {
      filter: "brightness(80%) saturate(0%) invert(0%) sepia(0%) saturate(10000%) hue-rotate(-10deg)",
    },
  };

  const logoBlock = <Image {...logoProps} alt={company} />;

  const items = (
    <div className={styles.items}>
      <div className={styles.item}>
        <p><strong>Position</strong></p>

        {position.length > 0 && (
          <ul>
            {position.map((pos, index) => (
              <li key={index}>{pos}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.item}>
        <p><strong>Tenure</strong></p>
        <p>{formatDate(tenure.start)} - {formatDate(tenure.end)}</p>
      </div>

      <div className={styles.item}>
        <p><strong>Responsibilities</strong></p>
        {responsibilities.length > 0 && (
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  const contentBlock = (
    <div className={styles.content}>
      <div className={styles.head}>
        <h2>
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            {company}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
              <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
            </svg>
          </a>
        </h2>

        <p>{description}</p>
      </div>

      {items}
    </div>
  );

	return (
		<div className={styles.exp}>
			{logoBlock}
      {contentBlock}
		</div>
	);
}
