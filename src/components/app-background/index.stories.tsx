import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Index from './index';

const meta = {
  title: "Components/App Background",
  component: Index,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};