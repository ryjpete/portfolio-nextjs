import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import BreatheEffect from './index';

const meta = {
  title: "Components/Breathe Effect",
  component: BreatheEffect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreatheEffect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#F50482" }} />,
  },
};

export const WithText: Story = {
  args: {
    children: <span style={{ fontSize: "2rem", fontWeight: "bold" }}>GD</span>,
  },
};
