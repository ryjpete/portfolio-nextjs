import Image from "next/image";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { formatDate } from "@/utils/utils";

import imgPlaceholder from "@public/assets/images/icon-plc.svg";

import styles from "./experience.module.css";

export default function Experience({
	company,
	position,
	tenure,
	description,
	logo = imgPlaceholder,
  responsibilities,
	contact,
  tech = [],
}: {
	company: string;
	position: string[];
	tenure: { start: string; end: string; };
	description?: string;
	logo: string;
  responsibilities: string[];
  contact: { url: string; };
  tech: { name: string; icon: string }[];
}) {
  console.log(position)
  const logoProps = {
    src: logo,
    alt: `${company} logo`,
    width: 125,
    height: 125,
    // className: styles.placeholder,
  };

  const logoBlock = <Image {...logoProps} alt={company} className={logo === imgPlaceholder ? styles.plc : ''} />;

  const items = (
    <>
      <h2>{position.length > 0 ? position[0] : 'Responsibilities'}</h2>

      {position.length > 1 && (
        <ul className={styles.list}>
          {position.map((pos, index) => (
            <li key={index}>{pos}</li>
          ))}
        </ul>
      )}

      {responsibilities.length > 0 && (
        <ul className={styles.respList}>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );

  const header = contact?.url ? (
    <a className={styles.name} href={contact.url} target="_blank" rel="noopener noreferrer">
      <h3>{company}</h3>
      <ArrowUpRightIcon height={24} width={24} color="var(--clr-red-himalayan-balsam)" />
    </a>
  ) : (
    <h3>{company}</h3>
  );

  const infoBlock = (
    <div className={styles.info}>
      <div className={styles.coInfo}>
        {logoBlock}
        {header}
        {description && <p className="sm">{description}</p>}
      </div>

      <h4 className={styles.tenure}>{formatDate(tenure.start)} - {formatDate(tenure.end)}</h4>

      {tech.length > 0 && (
        <div className={styles.stack}>
          <h5>Tech Stack</h5>
            <div className={styles.icons}>
              {tech.map((item, index) => (
                <Image
                  key={index}
                  src={item.icon}
                  alt={item.name}
                  className={styles.icon}
                  width={24}
                  height={24}
                />
              ))}
            </div>
        </div>
      )}
    </div>
  );

  const positionBlock = (
    <div className={styles.position}>
      {items}
    </div>
  );

	return (
		<div className={styles.exp}>
      {infoBlock}
      {positionBlock}
		</div>
	);
}
