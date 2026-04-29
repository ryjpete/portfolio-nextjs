export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);
  return `${month} '${year}`;
}

const categoryIcons: Record<string, string> = {
  Branding: "/assets/images/icons/icon-award.svg",
  Design: "/assets/images/icons/icon-brush.svg",
  Copywriting: "/assets/images/icons/icon-fonts.svg",
  Development: "/assets/images/icons/icon-code.svg",
  Deployment: "/assets/images/icons/icon-rocket.svg",
  Languages: "/assets/images/icons/icon-code.svg",
  Frameworks: "/assets/images/icons/icon-rocket.svg",
  "Data Sources": "/assets/images/icons/icon-database.svg",
    
  CSS3: "/assets/images/icons/icon-css3.svg",
  CSSModules: "/assets/images/icons/icon-cssmodules.svg",
  Figma: "/assets/images/icons/icon-figma.svg",
  Git: "/assets/images/icons/icon-git.svg",
  HTML5: "/assets/images/icons/icon-html5.svg",
  JavaScript: "/assets/images/icons/icon-javascript.svg",
  JSON: "/assets/images/icons/icon-json.svg",
  'Next.js': "/assets/images/icons/icon-nextjs.svg",
  React: "/assets/images/icons/icon-react.svg",
  'React Native': "/assets/images/icons/icon-reactnative.svg",
  Storybook: "/assets/images/icons/icon-storybook.svg",
  Tailwind: "/assets/images/icons/icon-tailwind.svg",
  TypeScript: "/assets/images/icons/icon-typescript.svg",
  Vercel: "/assets/images/icons/icon-vercel.svg",
};

export function mapProjectCategories(cats?: string[]) {
  if (!cats || cats.length === 0) return [];

  return cats.map((cat) => ({
    label: cat,
    icon: categoryIcons[cat] ?? null,
  }));
}


