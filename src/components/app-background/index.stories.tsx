import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import AppBackground from './index';

const meta = {
  title: "Components/App Background",
  component: AppBackground,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  parameters: { nextjs: { navigation: { pathname: '/' } } },
};

export const About: Story = {
  parameters: { nextjs: { navigation: { pathname: '/about' } } },
};

export const Resume: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume' } } },
};

export const ResumeExperience: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume/experience' } } },
};

export const Projects: Story = {
  parameters: { nextjs: { navigation: { pathname: '/projects' } } },
};