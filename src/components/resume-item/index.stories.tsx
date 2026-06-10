import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ResumeItem from "./index";

const meta = {
  title: "Components/Resume Item",
  component: ResumeItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResumeItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const BASE_EXP = {
  id: 1,
  company: "The Main Branch",
  route: "./experience/the-main-branch",
  logo: "",
  role: "Software Developer, Frontend",
  roleDesc:
    "Frontend engineer at a tech consulting firm, building responsive React and Next.js web apps with a heavy emphasis on CSS craftsmanship — design systems, fluid typography, CSS Modules, the works. Also shipped cross-platform mobile apps in React Native, consumed APIs, and sweated the details on animations and micro-interactions. Wrote clean TypeScript, set code quality standards, mentored devs, and delivered pixel-perfect UIs straight from Figma to production.",
  description: "",
  contact: { url: "https://themainbranch.com" },
  position: ["Software Developer, Frontend"],
  tenure: { start: "2021-04", end: "2026-01" },
  responsibilities: [],
  tech: [
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ],
};

export const Default: Story = {
  args: {
    exp: BASE_EXP,
  },
};

export const Clickable: Story = {
  args: {
    exp: BASE_EXP,
    onClick: () => alert("Clicked!"),
  },
};

export const NoLogo: Story = {
  args: {
    exp: { ...BASE_EXP, logo: "" },
  },
};

export const NoRoute: Story = {
  args: {
    exp: { ...BASE_EXP, route: undefined },
  },
};

export const NoTenure: Story = {
  args: {
    exp: { ...BASE_EXP, tenure: {} },
  },
};
