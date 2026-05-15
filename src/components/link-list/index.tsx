import Link from "next/link";

import go from "@/app/assets/go.svg";

import styles from "./link-list.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";

export interface LinkItem {
  label: string;
  href: string;
}

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const pathname = usePathname();
  console.log('pathname', pathname);

  return (
    <nav className={styles.linkList}>
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className={`${styles.link} ${pathname === href ? styles.active : ""}`}>
          {label}
          <Image src={go} alt="" />
        </Link>
      ))}
    </nav>
  );
}
