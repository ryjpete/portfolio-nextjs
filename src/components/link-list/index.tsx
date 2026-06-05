import Link from "next/link";

import styles from "./link-list.module.css";
import { usePathname } from "next/navigation";

export interface LinkItem {
  label: string;
  href: string;
}

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.linkList}>
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className={`${styles.link} ${pathname === href ? styles.active : ""}`}>
          {label}
          <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15 8.66016L0 17.3204L0 -9.82285e-05L15 8.66016Z" fill="currentColor" />
          </svg>
        </Link>
      ))}
    </nav>
  );
}
