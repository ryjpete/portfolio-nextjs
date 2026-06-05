import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import LinkList from './index';

const links = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Skills", href: "/skills" },
];

const meta = {
  title: "Components/Link List",
  component: LinkList,
  parameters: {
    layout: "centered",
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    links,
  },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActiveResume: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/resume",
      },
    },
  },
};

export const ActiveSkills: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/skills",
      },
    },
  },
};
