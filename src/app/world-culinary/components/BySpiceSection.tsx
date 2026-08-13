// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React, { useState } from "react";
import { SECTIONS, SPICE_CATEGORIES } from "../sections";
import { SPICE_INDEX, SPICE_BY_LETTER, SPICE_LETTERS } from "../lib";
import { SPICE_INFO } from "../data/spice-info";
import { styles } from "../styles";

export function BySpiceSection({ onBack, onNavigateToPlace }) {
  const meta = SECTIONS.find((s) => s.key === "spice");
  const accent = meta.accent;
  const [category, setCategory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedSpice, setSelectedSpice] = useState(null);

  const goToCategory = () => { setSelectedLetter(null); setSelectedSpice(null); };
  const goToLetterList = () => setSelectedSpice(null);
  const goToSpiceRoot = () => { setCategory(null); setSelectedLetter(null); setSelectedSpice(null); };

  if (!category) {
    return (
      <div>
        <div style={styles.crumbTrail}>
          <div style={styles.crumbRow}>
            <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
          </div>
        </div>
        <div style={styles.titleBlock}>
          <span style={styles.crumbCountry}>By Spice</span>
        </div>
        <div style={styles.sectionGrid}>
          {SPICE_CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              style={{ ...styles.sectionCard, borderColor: accent }}
              className="country-btn"
            >
              <div className="stamp" style={{ ...styles.sectionTag, color: accent }}>{c.ready ? "Browse" : "Coming soon"}</div>
              <div style={styles.sectionName}>{c.label}</div>
              <div style={styles.sectionDesc}>{c.desc}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const catMeta = SPICE_CATEGORIES.find((c) => c.key === category);

  if (!catMeta.ready) {
    return (
      <div>
        <div style={styles.crumbTrail}>
          <div style={styles.crumbRow}>
            <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
            <span style={styles.crumbSep}>›</span>
            <span className="back-link stamp" style={styles.crumbLink} onClick={goToSpiceRoot}>By Spice</span>
          </div>
        </div>
        <div style={styles.titleBlock}>
          <span style={styles.crumbCountry}>{catMeta.label}</span>
        </div>
        <div style={{ ...styles.comingSoonBox, borderColor: accent }}>
          <div className="stamp" style={{ ...styles.sectionTag, color: accent }}>Coming soon</div>
          <p style={styles.comingSoonDesc}>{catMeta.desc} This grouping is still being catalogued — check back later.</p>
        </div>
      </div>
    );
  }

  if (!selectedLetter) {
    return (
      <div>
        <div style={styles.crumbTrail}>
          <div style={styles.crumbRow}>
            <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
            <span style={styles.crumbSep}>›</span>
            <span className="back-link stamp" style={styles.crumbLink} onClick={goToSpiceRoot}>By Spice</span>
          </div>
        </div>
        <div style={styles.titleBlock}>
          <span style={styles.crumbCountry}>Alphabetical</span>
        </div>
        <div style={styles.spiceLetterGrid}>
          {SPICE_LETTERS.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              style={{ ...styles.spiceLetterCard, borderColor: accent }}
              className="country-btn"
            >
              <div style={styles.regionName}>{letter}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedSpice) {
    return (
      <div>
        <div style={styles.crumbTrail}>
          <div style={styles.crumbRow}>
            <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
            <span style={styles.crumbSep}>›</span>
            <span className="back-link stamp" style={styles.crumbLink} onClick={goToSpiceRoot}>By Spice</span>
            <span style={styles.crumbSep}>›</span>
            <span className="back-link stamp" style={styles.crumbLink} onClick={goToCategory}>Alphabetical</span>
          </div>
        </div>
        <div style={styles.titleBlock}>
          <span style={styles.crumbCountry}>{selectedLetter}</span>
        </div>
        <ul style={styles.dishList}>
          {SPICE_BY_LETTER[selectedLetter].map((name) => (
            <li key={name} style={styles.recDish}>
              <button className="dish-link" onClick={() => setSelectedSpice(name)}>{name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const places = SPICE_INDEX[selectedSpice] || [];
  const info = SPICE_INFO[selectedSpice];
  return (
    <div>
      <div style={styles.crumbTrail}>
        <div style={styles.crumbRow}>
          <span className="back-link stamp" style={styles.crumbLink} onClick={onBack}>All</span>
          <span style={styles.crumbSep}>›</span>
          <span className="back-link stamp" style={styles.crumbLink} onClick={goToSpiceRoot}>By Spice</span>
          <span style={styles.crumbSep}>›</span>
          <span className="back-link stamp" style={styles.crumbLink} onClick={goToCategory}>Alphabetical</span>
          <span style={styles.crumbSep}>›</span>
          <span className="back-link stamp" style={styles.crumbLink} onClick={goToLetterList}>{selectedLetter}</span>
        </div>
      </div>
      <div style={styles.titleBlock}>
        <span style={styles.crumbCountry}>{selectedSpice}</span>
      </div>
      <div style={styles.detail}>
        <div style={styles.recHeader} className="stamp">About</div>
        {info ? (
          <p style={styles.modalBody}>{info.about}</p>
        ) : (
          <p style={styles.modalBodyMuted}>Not catalogued yet — check back later.</p>
        )}
        <div style={{ ...styles.recHeader, marginTop: 22 }} className="stamp">Flavor profile</div>
        {info ? (
          <p style={styles.modalBody}>{info.flavor}</p>
        ) : (
          <p style={styles.modalBodyMuted}>Not catalogued yet.</p>
        )}
        <div style={{ ...styles.recHeader, marginTop: 22 }} className="stamp">Texture</div>
        {info ? (
          <p style={styles.modalBody}>{info.texture}</p>
        ) : (
          <p style={styles.modalBodyMuted}>Not catalogued yet.</p>
        )}
      </div>
    </div>
  );
}
