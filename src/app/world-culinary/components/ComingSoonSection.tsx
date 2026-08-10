// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React from "react";
import { SECTIONS } from "../sections";
import { styles } from "../styles";

export function ComingSoonSection({ section, onBack }) {
  const meta = SECTIONS.find((s) => s.key === section);
  return (
    <div>
      <div style={styles.crumbTrail}>
        <div style={styles.crumbRow}>
          <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
        </div>
      </div>
      <div style={styles.titleBlock}>
        <span style={styles.crumbCountry}>{meta.label}</span>
      </div>
      <div style={{ ...styles.comingSoonBox, borderColor: meta.accent }}>
        <div className="stamp" style={{ ...styles.sectionTag, color: meta.accent }}>Coming soon</div>
        <p style={styles.comingSoonDesc}>{meta.desc} This section is still being catalogued — check back later.</p>
      </div>
    </div>
  );
}
