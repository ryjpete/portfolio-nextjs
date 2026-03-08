import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectProvider } from '@/context/ProjectContext';

import Index from './index';

const meta = {
  title: "Components/Categories",
  component: Index,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <ProjectProvider>
        <Story />
      </ProjectProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    project: {
      control: "object",
      description: "Project object with a 'cats' array of category strings.",
    },
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      cats: ["react", "nextjs", "typescript"]
    }
  },
};