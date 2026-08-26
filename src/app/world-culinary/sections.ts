// import globe from "@/app/world-culinary/images/globe.png";
import globe from "@/app/world-culinary/images/regions/regions.svg";
// import herbs from "@/app/world-culinary/images/herbs.png";
// import spices from "@/app/world-culinary/images/spices.png";

export const SECTIONS = [
  { key: "region", tag: "Browse", label: "By Region", desc: "Explore cuisines, ingredients, and culinary traditions from around the world.", img: globe, accent: "#C97A3D" },
  // { key: "herb", tag: "Browse", label: "By Herb", desc: "Discover herbs, their origins, flavor profiles, and culinary uses.", img: herbs, accent: "#6B7A4F" },
  // { key: "spice", tag: "Browse", label: "By Spice", desc: "Explore the world's spices, their stories, uses, and pairings.", img: spices, accent: "#9C4B3F" },
];

export const SPICE_CATEGORIES = [
  { key: "alphabetical", label: "Alphabetical", desc: "Every spice and seasoning in the catalogue, A to Z.", ready: true },
  // { key: "flavor", label: "Flavor Profile", desc: "Group by taste character — warm, floral, citrusy, smoky, and so on, and how each spice is used in cooking.", ready: false },
  // { key: "texture", label: "Plant Source", desc: "Group by the part of the plant from which the spice is derived.", ready: false },
  // { key: "botanical", label: "Botanical Family", desc: "Group by the botanical family to which the spice belongs.", ready: false },
];
