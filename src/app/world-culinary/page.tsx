// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { SEED, REGION_ORDER } from "./data/seed";
import { resolveNode, countCountries, ALL_PLACES, samePath } from "./lib";
import { SECTIONS } from "./sections";
// import { styles } from "./styles";
import styles from "./world-culinary.module.css";
import { DishModal } from "./components/DishModal";
import { ComingSoonSection } from "./components/ComingSoonSection";
import { BySpiceSection } from "./components/BySpiceSection";
import sageIcon from "./images/sage_icon.png";
import Image from "next/image";

function NoteTooltip({ label, tip }: { label: string; tip: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span
      style={{ position: "relative", display: "inline" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <span style={{ borderBottom: "1px dotted #C97A3D", color: "#C97A3D", cursor: "help" }}>{label}</span>
      {open && (
        <span style={{
          position: "absolute", bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)",
          background: "#FFFFFF", border: "1px solid #E8E2D8", borderRadius: 4,
          padding: "6px 10px", fontSize: 12, color: "#2C2C2C", lineHeight: 1.5,
          whiteSpace: "nowrap", zIndex: 10, pointerEvents: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontStyle: "normal", fontWeight: "normal",
        }}>
          {tip}
        </span>
      )}
    </span>
  );
}

function renderNote(text: string) {
  // supports **bold**, *italic*, [label]{tooltip}, *[label]*{tip}, **[label]**{tip}
  const parts = text.split(/(\*\*\[[^\]]+\]\*\*\{[^}]+\}|\*\[[^\]]+\]\*\{[^}]+\}|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\{[^}]+\})/g);
  return parts.map((part, i) => {
    const boldTooltip = part.match(/^\*\*\[([^\]]+)\]\*\*\{([^}]+)\}$/);
    if (boldTooltip) return <strong key={i}><NoteTooltip label={boldTooltip[1]} tip={boldTooltip[2]} /></strong>;
    const italicTooltip = part.match(/^\*\[([^\]]+)\]\*\{([^}]+)\}$/);
    if (italicTooltip) return <em key={i}><NoteTooltip label={italicTooltip[1]} tip={italicTooltip[2]} /></em>;
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    const tooltip = part.match(/^\[([^\]]+)\]\{([^}]+)\}$/);
    if (tooltip) return <NoteTooltip key={i} label={tooltip[1]} tip={tooltip[2]} />;
    return part;
  });
}

export default function CuisineAtlas() {
  const [section, setSection] = useState(null);
  const [region, setRegion] = useState(null);
  const [path, setPath] = useState([]);
  const [country, setCountry] = useState(null);
  const [areaIndex, setAreaIndex] = useState(0);
  const [selectedDish, setSelectedDish] = useState(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setAreaIndex(0); }, [country]);

  const accent = region ? SEED[region].accent : "#C97A3D";
  const node = region ? resolveNode(region, path) : null;
  const dish = node && node.countries && country ? node.countries[country] : null;
  const activeData = dish ? (dish.areas ? dish.areas[areaIndex] : dish) : null;

  const currentIndex = ALL_PLACES.findIndex(
    (p) => p.region === region && p.country === country && samePath(p.path, path)
  );

  const goTo = (delta) => {
    if (currentIndex === -1) return;
    const next = ALL_PLACES[(currentIndex + delta + ALL_PLACES.length) % ALL_PLACES.length];
    setRegion(next.region);
    setPath(next.path);
    setCountry(next.country);
  };

  const goHome = () => { setRegion(null); setPath([]); setCountry(null); };
  const goToSections = () => { setSection(null); setRegion(null); setPath([]); setCountry(null); };
  const navigateToPlace = (p) => {
    setSection("region");
    setRegion(p.region);
    setPath(p.path);
    setCountry(p.country);
  };

  const isAtRegionRoot = !region;
  const isRegionTitle = region && !country && path.length === 0;
  const ancestors = [{ label: "All", onClick: goToSections }];
  if (!isAtRegionRoot) {
    ancestors.push({ label: "By Region", onClick: goHome });
    if (!isRegionTitle) {
      ancestors.push({ label: region, onClick: () => { setPath([]); setCountry(null); } });
    }
    const pathAncestors = country ? path : path.slice(0, -1);
    pathAncestors.forEach((seg, i) => {
      ancestors.push({
        label: seg,
        onClick: () => { setPath(path.slice(0, i + 1)); setCountry(null); },
      });
    });
  }
  const title = isAtRegionRoot ? "By Region" : (country || (path.length > 0 ? path[path.length - 1] : region));

  return (
    <div className={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600&display=swap&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap&family=Rubik+Dirt&display=swap');
        * { box-sizing: border-box; }
        .wc-page { padding: 32px 20px 60px; }
        @media (min-width: 768px) { .wc-page { padding: 40px 48px 80px; } }
        .wc-title-header { margin-top: -32px; margin-left: -20px; margin-right: -20px; }
        @media (min-width: 768px) { .wc-title-header { margin-top: -40px; margin-left: -48px; margin-right: -48px; } }
        .wc-bleed { margin-left: -20px; margin-right: -20px; }
        @media (min-width: 768px) { .wc-bleed { margin-left: -48px; margin-right: -48px; } }
        .stamp { font-family: 'Space Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase; }
        // .country-btn:hover { transform: translateY(-2px); }
        .back-link:hover { opacity: 0.7; }
        .area-pill:hover { opacity: 0.85; }
        .dish-link { text-decoration: none; color: inherit; display: block; width: 100%; text-align: left; background: none; border: none; padding: 0; font: inherit; cursor: pointer; transition: opacity 0.15s; }
        .dish-link:hover { opacity: 0.75; }
        .spice-chip { display: inline-block; font-size: 12px; padding: 5px 11px; border-radius: 999px; margin: 0 6px 6px 0; }
        .nav-label { overflow: hidden; white-space: nowrap; min-width: 0; }
        .fade-right { mask-image: linear-gradient(to right, black 75%, transparent 100%); -webkit-mask-image: linear-gradient(to right, black 75%, transparent 100%); }
        .fade-left { mask-image: linear-gradient(to left, black 75%, transparent 100%); -webkit-mask-image: linear-gradient(to left, black 75%, transparent 100%); }
      `}</style>

      <header className={styles.titleHeader}>
        <div className={styles.titleLogoRow}>
          <Image src={sageIcon} alt="World Culinary" width={120} height={40} className={styles.logo} />
          <div className={styles.titleHeaderText}>
            <h1 className={styles.titleLogoH1}>World Culinary</h1>
            <h2 className={styles.titleLogoH2}>Field Notes on Global Eating</h2>
          </div>
        </div>
        <nav className={styles.nav}>
          <button className={styles.navLink} onClick={() => setSection("region")}>Region</button>
          <button className={styles.navLink} onClick={() => setSection("herb")}>Herbs</button>
          <button className={styles.navLink} onClick={() => setSection("spice")}>Spices</button>
        </nav>
      </header>

      {!section && (
        <div className={styles.sectionGrid}>
          <div className={styles.titleHeaderText}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowRule} />
              <div className={`${styles.eyebrow} stamp`}>Explore</div>
              <span className={styles.eyebrowRule} />
            </div>
          </div>

          <div className={styles.sectionCardRow}>
            {SECTIONS.map((s, index) => (
              <button
                key={s.key}
                onClick={() => setSection(s.key)}
                className={styles.sectionCard}
              >
                {/* <div className="stamp" style={{ ...styles.sectionTag, color: s.accent }}>{s.tag}</div> */}
                <div className={styles.sectionNum}>0{index + 1}</div>
                <div className={styles.sectionName}>{s.label}</div>
                <Image src={s.img} alt="" width={150} height={150} style={{ width: "auto", height: 100, margin: "6px auto" }} />
                <div className={styles.sectionDesc}>{s.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {section === "herb" && (
        <ComingSoonSection section={section} onBack={goToSections} />
      )}

      {section === "spice" && (
        <BySpiceSection onBack={goToSections} onNavigateToPlace={navigateToPlace} />
      )}

      {section === "region" && (
        <>
          <div className={`${styles.crumbTrail} wc-bleed`}>
            <div className={styles.crumbRow}>
              {ancestors.map((a, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className={styles.crumbSep}>›</span>}
                  <span className={`back-link stamp ${styles.crumbLink}`} onClick={a.onClick}>{a.label}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.titleBlock}>
            <div className={styles.titleBlockRow}>
              <span className={styles.crumbCountry}>{title}</span>

              {country && dish && (
                <div className={styles.navRow} style={{ marginBottom: 0 }}>
                  <button onClick={() => goTo(-1)} className={styles.navBtn} aria-label="Previous country">
                    <span className={`${styles.navArrow}`}>‹</span>
                  </button>
                  <button onClick={() => goTo(1)} className={styles.navBtn} aria-label="Next country">
                    <span className={`${styles.navArrow}`}>›</span>
                  </button>
                </div>
              )}
            </div>
            {isAtRegionRoot && <p className={styles.crumbPlain}>Pick a region to begin browsing</p>}
            {!country && node && node.overview && <p className={styles.overviewText}>{node.overview}</p>}
            {country && dish && dish.cuisineNote && <p className={styles.overviewText}>{renderNote(dish.cuisineNote)}</p>}
          </div>

          {!region && (
            <div className={styles.regionGrid}>
              {REGION_ORDER.map((r) => (
                // <button key={r} onClick={() => setRegion(r)} style={{ ...styles.regionCard, borderColor: SEED[r].accent }} className="country-btn">
                <button key={r} onClick={() => setRegion(r)} className={{ ...styles.regionCard, borderColor: SEED[r].accent }}>
                  {/* <div className="stamp" style={{ ...styles.regionTag, color: SEED[r].accent }}>Region</div> */}
                  <div className={styles.regionName}>{r}</div>
                  <div className={styles.regionCount}>{countCountries(SEED[r])} catalogued</div>
                </button>
              ))}
            </div>
          )}

          {region && node && node.groups && !country && (
            <div className={styles.countryGrid}>
              {Object.keys(node.groups).map((g) => (
                <button key={g} onClick={() => setPath([...path, g])} className={{ ...styles.countryCard, borderColor: accent }}>
                  {g}
                  <div className={styles.groupCount}>{countCountries(node.groups[g])} places</div>
                </button>
              ))}
            </div>
          )}

          {region && node && node.countries && !country && (
            <div className={styles.countryGrid}>
              {Object.keys(node.countries).sort().map((c) => (
                <button key={c} onClick={() => setCountry(c)} className={{ ...styles.countryCard, borderColor: accent }}>
                  {c}
                </button>
              ))}
            </div>
          )}

          {region && country && dish && (
            <div className={styles.detail}>

              {dish.areas && (
                <div className={styles.areaBox}>
                  <p className={styles.areaNote}>No single national dish — explore by region:</p>
                  <div className={styles.areaRow}>
                    {dish.areas.map((a, i) => (
                      <button
                        key={a.name}
                        onClick={() => setAreaIndex(i)}
                        className="area-pill"
                        style={{
                          ...styles.areaPill,
                          borderColor: accent,
                          background: i === areaIndex ? accent : "transparent",
                          color: i === areaIndex ? "#FFFFFF" : accent,
                        }}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={`${styles.officialBadge} stamp`} style={{ background: accent }}>
                {dish.areas ? "Regional dish" : "Official"}
              </div>
              <ul className={styles.dishListOfficial}>
                {activeData.official.map((d) => (
                  <li key={d} className={styles.officialDish} style={{ borderColor: accent }}>
                    <button className="dish-link" onClick={() => setSelectedDish({ name: d, country: dish.areas ? activeData.name : country })}>{d}</button>
                  </li>
                ))}
              </ul>

              <div className={`${styles.recHeader} stamp`}>Also worth trying</div>
              <ul className={styles.dishList}>
                {activeData.recommended.map((d) => (
                  <li key={d} className={styles.recDish}>
                    <button className="dish-link" onClick={() => setSelectedDish({ name: d, country: dish.areas ? activeData.name : country })}>{d}</button>
                  </li>
                ))}
              </ul>

              <div className={`${styles.recHeader} stamp`} style={{ marginTop: 22 }}>Signature spices &amp; herbs</div>
              <div>
                {(activeData.spices && activeData.spices.length ? activeData.spices : ["Not catalogued yet"]).map((s) => (
                  <span key={s} className="spice-chip" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}>
                    {s}
                  </span>
                ))}
              </div>

            </div>
          )}

          <footer className={styles.footer}>
            <span className="stamp">
              {REGION_ORDER.reduce((n, r) => n + countCountries(SEED[r]), 0)} places catalogued
            </span>
          </footer>

          <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
        </>
      )}
    </div>
  );
}
