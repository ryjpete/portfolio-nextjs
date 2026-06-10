import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnimatePresence } from "framer-motion";

import ProjectDetail from "./index";

const meta = {
  title: "Components/Project Detail",
  component: ProjectDetail,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <AnimatePresence>
        <Story />
      </AnimatePresence>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const BASE_PROJECT = {
  id: 1,
  company: "Grateful Dev",
  route: "./projects/grateful-dev",
  logo: "/assets/images/logos/bolt/logo.svg",
  name: "Grateful-Dev.com",
  slug: "grateful-dev",
  desc: "My personal portfolio site, currently and always under active development.",
  detailedDesc:
    "Built with Next.js App Router, React 19, TypeScript, and CSS Modules, with a component library documented in Storybook. Data served through internal API routes and deployed on Vercel with continuous deployment from GitHub.",
  roleDesc:
    "Designed and built from scratch — custom branding, logo, and full design system including color tokens, typography, and component architecture.",
  highlights: [
    { label: "Branding", entry: "Custom logo and branding with a clean, modern aesthetic." },
    { label: "Design System", entry: "Color tokens, typography scale, and reusable component library." },
    { label: "Development", entry: "Built with Next.js, React 19, TypeScript, and CSS Modules." },
  ],
  cats: ["web", "design"],
  tech: [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ],
};

export const Default: Story = {
  args: {
    project: BASE_PROJECT,
    onClose: () => {},
  },
};

export const NoLogo: Story = {
  args: {
    project: { ...BASE_PROJECT, logo: undefined },
    onClose: () => {},
  },
};

export const NoHighlights: Story = {
  args: {
    project: { ...BASE_PROJECT, highlights: undefined },
    onClose: () => {},
  },
};

export const MinimalData: Story = {
  args: {
    project: {
      id: 2,
      company: "Acme Corp",
      route: "",
      name: "Internal Dashboard",
      tech: [],
    },
    onClose: () => {},
  },
};
