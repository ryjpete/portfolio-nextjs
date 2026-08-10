"use client";
// @ts-nocheck

import React from "react";
import { DISH_ORIGINS, DISH_INGREDIENTS } from "../data/dish-data";
import { recipeSearchUrl } from "../lib";
import { styles } from "../styles";

export function DishModal({ dish, onClose }) {
  if (!dish) return null;
  const origin = DISH_ORIGINS[dish.name];
  const ingredients = DISH_INGREDIENTS[dish.name];
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={onClose} aria-label="Close">×</button>
        <h3 style={styles.modalTitle}>{dish.name}</h3>
        <div style={styles.modalSectionLabel} className="stamp">Origin &amp; history</div>
        {origin ? (
          <p style={styles.modalBody}>{origin}</p>
        ) : (
          <p style={styles.modalBodyMuted}>Origin notes aren't catalogued for this dish yet — check back later.</p>
        )}
        <div style={styles.modalSectionLabel} className="stamp">Main ingredients</div>
        {ingredients && ingredients.length > 0 ? (
          <div style={{ marginBottom: 4 }}>
            {ingredients.map((s) => (
              <span key={s} className="spice-chip" style={styles.modalChip}>{s}</span>
            ))}
          </div>
        ) : (
          <p style={styles.modalBodyMuted}>Ingredients aren't catalogued for this dish yet.</p>
        )}
        <a
          href={recipeSearchUrl(dish.name, dish.country)}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.modalRecipeLink}
        >
          Search recipes for {dish.country ? `${dish.country}-style ${dish.name}` : dish.name} →
        </a>
      </div>
    </div>
  );
}
