import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ProjectItem from "./index";

const meta = {
  title: "Components/Project Item",
  component: ProjectItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectItem>;

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
    "Built with Next.js App Router, React 19, TypeScript, and CSS Modules, with a component library documented in Storybook.",
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
  },
};

export const Clickable: Story = {
  args: {
    project: BASE_PROJECT,
    onClick: () => alert("Clicked!"),
  },
};

export const NoLogo: Story = {
  args: {
    project: { ...BASE_PROJECT, logo: undefined },
  },
};

export const NoRoute: Story = {
  args: {
    project: { ...BASE_PROJECT, route: "" },
  },
};

export const NoDescription: Story = {
  args: {
    project: { ...BASE_PROJECT, desc: undefined },
  },
};

export const NoTech: Story = {
  args: {
    project: { ...BASE_PROJECT, tech: [] },
  },
};
