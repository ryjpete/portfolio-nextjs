import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectProvider } from '@/context/ProjectContext';
import { ScrollProvider } from '@/context/ScrollContext';

import Header from './index';

const meta = {
  title: "Components/Header",
  component: Header,
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
      <ScrollProvider>
        <ProjectProvider>
          <Story />
        </ProjectProvider>
      </ScrollProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};

export const InnerPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/projects',
      },
    },
  },
};

export const Resume: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/resume',
      },
    },
  },
};
