import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PageHeader from './index';

const meta = {
  title: "Components/Page Header",
  component: PageHeader,
  parameters: {
    layout: "centered",
    nextjs: {
      navigation: {
        pathname: "/resume",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
