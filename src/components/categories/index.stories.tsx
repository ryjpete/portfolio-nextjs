import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectProvider } from '@/context/ProjectContext';

import Categories from './index';

const meta = {
  title: "Components/Categories",
  component: Categories,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ProjectProvider>
        <Story />
      </ProjectProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Categories>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseProject = {
  title: "Example Project",
  slug: "example-project",
  client: "Client",
  description: "A project description.",
  stack: "Web",
};

export const IconsOnly: Story = {
  args: {
    project: { ...baseProject, cats: ["React", "Next.js", "TypeScript", "CSS3", "Git"] },
  },
};

export const WithItemTitles: Story = {
  args: {
    project: { ...baseProject, cats: ["React", "Next.js", "TypeScript", "CSS3", "Git"] },
    showCatItemTitle: true,
  },
};

export const WithSectionTitle: Story = {
  args: {
    project: { ...baseProject, cats: ["Branding", "Design", "Copywriting", "Development", "Deployment"] },
    showCatTitle: true,
    catTitle: "Services",
    showCatItemTitle: true,
  },
};

export const NoIcons: Story = {
  args: {
    project: { ...baseProject, cats: ["Custom Category", "Another One"] },
    showCatItemTitle: true,
  },
};