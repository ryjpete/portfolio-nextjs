"use client";

import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import styles from "./profile-intro.module.css";

type PageHeaderContent = {
  header: {
    h1: string;
    start: string;
    mid: string | { text?: string; list?: string[]};
    end: string | { text?: string; list?: string[]};
  };
};

export default function ProfileIntro() {
  const segment = useSelectedLayoutSegment() ?? "about";
  const [content, setContent] = useState<PageHeaderContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`/api/${segment}`);
      const data = await res.json();
      setContent(data);
    };

    fetchContent();
  }, [segment]);

  const startMid = (
    <div className={styles.startMid}>
      {content?.header?.start && <p>{content.header.start}</p>}
      {content?.header?.mid && (
        typeof content.header.mid === "object" ? (
          <div className={styles.mid}>
            {content.header.mid.text && <p>{content.header.mid.text}</p>}
            {content.header.mid.list && (
              <ul>
                {content.header.mid.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ) : (
          <p>{content.header.mid}</p>
        )
      )}
    </div>
  );

  const intro = (
    <div className={styles.intro}>
      {startMid}

      {content?.header?.end && (
        typeof content.header.end === "object" ? (
          <div className={styles.end}>
            {content.header.end.text && <p>{content.header.end.text}</p>}
            {content.header.end.list && (
              <>
                {content.header.end.list.map((item, i) => <p key={i} className="sm">{item}</p>)}
              </>
            )}
          </div>
        ): (
          <p className="sm">{content.header.end}</p>
        )
      )}
      
    </div>
  );

  return (
    <div className={styles.profileIntro}>
      <h1>{content?.header?.h1}</h1>
      {intro}
    </div>
  );
}
