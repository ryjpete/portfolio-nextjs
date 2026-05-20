"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./page-header.module.css";

type PageHeaderContent = {
  header: {
    h1: string;
    title?: string;
    desc?: string;
  };
};

export default function PageHeader() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const apiRoute = segments[0] ?? "resume";
  const dataKey  = segments[segments.length - 1] ?? apiRoute;

  const [content, setContent] = useState<PageHeaderContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`/api/${apiRoute}`);
      const data = await res.json();
      setContent(data[dataKey] ?? data[apiRoute] ?? null);
    };

    fetchContent();
  }, [apiRoute, dataKey]);

  const cssPageHeader = `pageHeader ${styles.pageHeader}`;

  return (
    <div className={cssPageHeader} data-bg-anchor>
      <div>
        <h1>{content?.header?.h1}</h1>
        {content?.header?.title && <p>{content.header.title}</p>}
      </div>
      {content?.header?.desc && <p className={styles.desc}>{content.header.desc}</p>}
    </div>
  );
}

