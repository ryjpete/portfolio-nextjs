import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Index from './index';

const meta = {
  title: "Components/ProjectCard",
  component: Index,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    project: {
      control: "object",
      description: "Project data object.",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the card is clicked.",
    },
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      title: "Grateful Dev",
      slug: "grateful-dev",
      description: "A complete overhaul of my portfolio.",
      blurb: "Next.js - React - TypeScript",
      images: {
        thumb: "/assets/images/projects/grateful-dev/thumb01.png",
      },
    },
  },
};

export const Placeholder: Story = {
  args: {
    project: {
      title: "Grateful Dev",
      slug: "grateful-dev",
      description: "A complete overhaul of my portfolio.",
      blurb: "Next.js - React - TypeScript",
      images: {
        thumb: "",
      },
    },
  },
};
