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

export const Resume: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume' } } },
};

export const ResumeExperience: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume/experience' } } },
};

export const ResumeSkills: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume/skills' } } },
};

export const ResumeEducation: Story = {
  parameters: { nextjs: { navigation: { pathname: '/resume/education' } } },
};

export const Projects: Story = {
  parameters: { nextjs: { navigation: { pathname: '/projects' } } },
};

export const ProjectsWebApps: Story = {
  parameters: { nextjs: { navigation: { pathname: '/projects/web-apps' } } },
};

export const ProjectsMobileApps: Story = {
  parameters: { nextjs: { navigation: { pathname: '/projects/mobile-apps' } } },
};

export const ProjectsDesign: Story = {
  parameters: { nextjs: { navigation: { pathname: '/projects/design' } } },
};