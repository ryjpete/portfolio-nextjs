import Link from "next/link";

import go from "@/app/assets/go.svg";

import styles from "./link-list.module.css";
import Image from "next/image";

export interface LinkItem {
  label: string;
  href: string;
}

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <nav className={styles.linkList}>
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className={styles.link}>
          {label}
          <Image src={go} alt="" />
        </Link>
      ))}
    </nav>
  );
}
