export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);
  return `${month} '${year}`;
}

const categoryIcons: Record<string, string> = {
  Design: "/assets/images/icons/icon-brush.svg",
  Development: "/assets/images/icons/icon-code.svg",
  Deployment: "/assets/images/icons/icon-rocket.svg",
};

export function mapProjectCategories(cats?: string[]) {
  if (!cats || cats.length === 0) return [];

  return cats.map((cat) => ({
    label: cat,
    icon: categoryIcons[cat] ?? null,
  }));
}
