import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AnimatePresence } from 'framer-motion';

import { ScrollProvider } from '@/context/ScrollContext';

import ExperienceDetail from './index';

const meta = {
  title: "Components/Experience Detail",
  component: ExperienceDetail,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ScrollProvider>
        <AnimatePresence>
          <Story />
        </AnimatePresence>
      </ScrollProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseExp = {
  id: 1,
  company: "The Main Branch",
  logo: "",
  role: "Software Developer, Frontend",
  roleDesc:
    "Frontend engineer at a tech consulting firm, building responsive React and Next.js web apps with a heavy emphasis on CSS craftsmanship — design systems, fluid typography, CSS Modules, the works.",
  description: "A tech consulting firm focused on modern web solutions.",
  contact: { url: "https://example.com" },
  position: ["Frontend"],
  tenure: { start: "2021-04-01", end: "2026-01-01" },
  responsibilities: [
    "Built responsive React and Next.js web apps",
    "Led design system architecture and CSS standards",
    "Shipped cross-platform mobile apps in React Native",
    "Mentored junior developers and set code quality standards",
  ],
  tech: [
    { name: "React", icon: "/assets/images/tech/react.svg" },
    { name: "Next.js", icon: "/assets/images/tech/nextjs.svg" },
    { name: "TypeScript", icon: "/assets/images/tech/typescript.svg" },
  ],
};

export const Default: Story = {
  args: {
    exp: baseExp,
    onClose: () => {},
  },
};

export const WithLogo: Story = {
  args: {
    exp: {
      ...baseExp,
      logo: "/assets/images/logos/bolt/logo.svg",
    },
    onClose: () => {},
  },
};

export const NoTech: Story = {
  args: {
    exp: {
      ...baseExp,
      tech: [],
    },
    onClose: () => {},
  },
};
