// @ts-nocheck

import { SEED, REGION_ORDER } from "./data/seed";

export function recipeSearchUrl(dishName, countryName) {
  const query = countryName ? `${countryName} ${dishName} recipes` : `${dishName} recipes`;
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

export function resolveNode(region, path) {
  let node = SEED[region];
  for (const key of path) {
    node = node.groups[key];
  }
  return node;
}

export function countCountries(node) {
  if (node.countries) return Object.keys(node.countries).length;
  return Object.values(node.groups).reduce((sum, child) => sum + countCountries(child), 0);
}

export function flattenNode(region, node, path) {
  if (node.countries) {
    return Object.keys(node.countries).sort().map((c) => ({ region, path, country: c }));
  }
  return Object.entries(node.groups).flatMap(([key, child]) => flattenNode(region, child, [...path, key]));
}

export const ALL_PLACES = REGION_ORDER.flatMap((r) => flattenNode(r, SEED[r], []));

export function samePath(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

const SPICE_ALIASES = {
  "allspice (pimento)": "Allspice",
  "berbere blend": "Berbere",
  "timur (sichuan pepper)": "Timur",
  "piri-piri chili": "Piri-piri",
  "habanero chili": "Habanero",
  "clove": "Cloves",
  "coriander seed": "Coriander",
  "cayenne": "Cayenne pepper",
  "xawaash blend": "Xawaash",
  "tabil blend": "Tabil",
  "hawaij blend": "Hawaij",
};

function canonicalSpiceName(raw) {
  const key = raw.trim().toLowerCase();
  return SPICE_ALIASES[key] || raw.trim();
}

export function buildSpiceIndex() {
  const index = {};
  const add = (rawTerm, region, path, country) => {
    const name = canonicalSpiceName(rawTerm);
    if (!index[name]) index[name] = [];
    const exists = index[name].some((e) => e.region === region && e.country === country && samePath(e.path, path));
    if (!exists) index[name].push({ region, path, country });
  };
  const walk = (region, node, path) => {
    if (node.countries) {
      Object.entries(node.countries).forEach(([countryName, data]) => {
        if (data.areas) {
          data.areas.forEach((area) => (area.spices || []).forEach((s) => add(s, region, path, countryName)));
        } else {
          (data.spices || []).forEach((s) => add(s, region, path, countryName));
        }
      });
    } else if (node.groups) {
      Object.entries(node.groups).forEach(([key, child]) => walk(region, child, [...path, key]));
    }
  };
  REGION_ORDER.forEach((r) => walk(r, SEED[r], []));
  return index;
}

export const SPICE_INDEX = buildSpiceIndex();
export const SPICE_NAMES = Object.keys(SPICE_INDEX).sort((a, b) => a.localeCompare(b));

export const SPICE_BY_LETTER = {};
SPICE_NAMES.forEach((name) => {
  const letter = name[0].toUpperCase();
  if (!SPICE_BY_LETTER[letter]) SPICE_BY_LETTER[letter] = [];
  SPICE_BY_LETTER[letter].push(name);
});
export const SPICE_LETTERS = Object.keys(SPICE_BY_LETTER).sort();
