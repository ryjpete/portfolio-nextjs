import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectProvider } from '@/context/ProjectContext';

import Index from './index';

const meta = {
  title: "Components/Header",
  component: Index,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
  decorators: [
    (Story) => (
      <ProjectProvider>
        <Story />
      </ProjectProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
};

export const InnerPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/projects',
      },
    },
  },
};