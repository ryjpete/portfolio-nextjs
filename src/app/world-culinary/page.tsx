// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { SEED, REGION_ORDER } from "./data/seed";
import { resolveNode, countCountries, ALL_PLACES, samePath } from "./lib";
import { SECTIONS } from "./sections";
import { styles } from "./styles";
import { DishModal } from "./components/DishModal";
import { ComingSoonSection } from "./components/ComingSoonSection";
import { BySpiceSection } from "./components/BySpiceSection";

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
  const prevPlace = currentIndex === -1 ? null : ALL_PLACES[(currentIndex - 1 + ALL_PLACES.length) % ALL_PLACES.length];
  const nextPlace = currentIndex === -1 ? null : ALL_PLACES[(currentIndex + 1) % ALL_PLACES.length];

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
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .stamp { font-family: 'Space Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase; }
        .country-btn:hover { transform: translateY(-2px); }
        .back-link:hover { opacity: 0.7; }
        .area-pill:hover { opacity: 0.85; }
        .dish-link { text-decoration: none; color: inherit; display: block; width: 100%; text-align: left; background: none; border: none; padding: 0; font: inherit; cursor: pointer; transition: opacity 0.15s; }
        .dish-link:hover { opacity: 0.75; }
        .spice-chip { display: inline-block; font-size: 12px; padding: 5px 11px; border-radius: 999px; margin: 0 6px 6px 0; }
        .nav-label { overflow: hidden; white-space: nowrap; min-width: 0; }
        .fade-right { mask-image: linear-gradient(to right, black 75%, transparent 100%); -webkit-mask-image: linear-gradient(to right, black 75%, transparent 100%); }
        .fade-left { mask-image: linear-gradient(to left, black 75%, transparent 100%); -webkit-mask-image: linear-gradient(to left, black 75%, transparent 100%); }
      `}</style>

      <header style={styles.titleHeader}>
        <div style={styles.eyebrowRow}>
          <span style={styles.eyebrowRule} />
          <div style={styles.eyebrow} className="stamp">Field Notes on Global Eating</div>
          <span style={styles.eyebrowRule} />
        </div>
        <h1 style={styles.h1}>World Culinary</h1>
      </header>

      {!section && (
        <div style={styles.sectionGrid}>
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSection(s.key)}
              style={{ ...styles.sectionCard, borderColor: s.accent }}
              className="country-btn"
            >
              <div className="stamp" style={{ ...styles.sectionTag, color: s.accent }}>{s.tag}</div>
              <div style={styles.sectionName}>{s.label}</div>
              <div style={styles.sectionDesc}>{s.desc}</div>
            </button>
          ))}
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
          <div style={styles.crumbTrail}>
            <div style={styles.crumbRow}>
              {ancestors.map((a, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span style={styles.crumbSep}>›</span>}
                  <span className="back-link stamp" style={styles.crumbLink} onClick={a.onClick}>{a.label}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={styles.titleBlock}>
            <span style={styles.crumbCountry}>{title}</span>
            {isAtRegionRoot && <p style={styles.crumbPlain}>Pick a region to begin browsing</p>}
            {!country && node && node.overview && <p style={styles.overviewText}>{node.overview}</p>}
            {country && dish && dish.cuisineNote && <p style={styles.overviewText}>{dish.cuisineNote}</p>}
          </div>

          {!region && (
            <div style={styles.regionGrid}>
              {REGION_ORDER.map((r) => (
                <button key={r} onClick={() => setRegion(r)} style={{ ...styles.regionCard, borderColor: SEED[r].accent }} className="country-btn">
                  <div className="stamp" style={{ ...styles.regionTag, color: SEED[r].accent }}>Region</div>
                  <div style={styles.regionName}>{r}</div>
                  <div style={styles.regionCount}>{countCountries(SEED[r])} catalogued</div>
                </button>
              ))}
            </div>
          )}

          {region && node && node.groups && !country && (
            <div style={styles.countryGrid}>
              {Object.keys(node.groups).map((g) => (
                <button key={g} onClick={() => setPath([...path, g])} style={{ ...styles.countryCard, borderColor: accent }} className="country-btn">
                  {g}
                  <div style={styles.groupCount}>{countCountries(node.groups[g])} places</div>
                </button>
              ))}
            </div>
          )}

          {region && node && node.countries && !country && (
            <div style={styles.countryGrid}>
              {Object.keys(node.countries).sort().map((c) => (
                <button key={c} onClick={() => setCountry(c)} style={{ ...styles.countryCard, borderColor: accent }} className="country-btn">
                  {c}
                </button>
              ))}
            </div>
          )}

          {region && country && dish && (dish.founded || dish.belongsTo) && (
            <div style={styles.badgeRow}>
              {dish.belongsTo && (
                <div style={{ ...styles.foundedBadge, borderColor: accent, color: accent }} className="stamp">
                  Part of {dish.belongsTo}
                </div>
              )}
              {dish.founded && (
                <div style={{ ...styles.foundedBadge, borderColor: accent, color: accent }} className="stamp">
                  Founded {dish.founded}
                </div>
              )}
            </div>
          )}

          {region && country && dish && (
            <div style={styles.detail}>
              {dish.areas && (
                <div style={styles.areaBox}>
                  <p style={styles.areaNote}>No single national dish — explore by region:</p>
                  <div style={styles.areaRow}>
                    {dish.areas.map((a, i) => (
                      <button
                        key={a.name}
                        onClick={() => setAreaIndex(i)}
                        className="area-pill"
                        style={{
                          ...styles.areaPill,
                          borderColor: accent,
                          background: i === areaIndex ? accent : "transparent",
                          color: i === areaIndex ? "#1C2622" : accent,
                        }}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ ...styles.officialBadge, background: accent }} className="stamp">
                {dish.areas ? "Regional dish" : "Official"}
              </div>
              <ul style={styles.dishListOfficial}>
                {activeData.official.map((d) => (
                  <li key={d} style={{ ...styles.officialDish, borderColor: accent }}>
                    <button className="dish-link" onClick={() => setSelectedDish({ name: d, country: dish.areas ? activeData.name : country })}>{d}</button>
                  </li>
                ))}
              </ul>

              <div style={styles.recHeader} className="stamp">Also worth trying</div>
              <ul style={styles.dishList}>
                {activeData.recommended.map((d) => (
                  <li key={d} style={styles.recDish}>
                    <button className="dish-link" onClick={() => setSelectedDish({ name: d, country: dish.areas ? activeData.name : country })}>{d}</button>
                  </li>
                ))}
              </ul>

              <div style={{ ...styles.recHeader, marginTop: 22 }} className="stamp">Signature spices &amp; herbs</div>
              <div>
                {(activeData.spices && activeData.spices.length ? activeData.spices : ["Not catalogued yet"]).map((s) => (
                  <span key={s} className="spice-chip" style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}55` }}>
                    {s}
                  </span>
                ))}
              </div>

              <div style={styles.navRow}>
                <button onClick={() => goTo(-1)} style={{ ...styles.navBtn, borderColor: accent }} aria-label={`Previous: ${prevPlace?.country}`}>
                  <span style={{ ...styles.navArrow, color: accent }}>‹</span>
                  <span className="nav-label fade-right" style={styles.navLabel}>{prevPlace?.country}</span>
                </button>
                <button onClick={() => goTo(1)} style={{ ...styles.navBtn, borderColor: accent, justifyContent: "flex-end" }} aria-label={`Next: ${nextPlace?.country}`}>
                  <span className="nav-label fade-left" style={{ ...styles.navLabel, textAlign: "right" }}>{nextPlace?.country}</span>
                  <span style={{ ...styles.navArrow, color: accent }}>›</span>
                </button>
              </div>
              <p style={{ ...styles.navHint, margin: "12px 0 0" }}>Tap ‹ › to browse — tap any dish to search recipes.</p>
            </div>
          )}

          <footer style={styles.footer}>
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
