import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from "storybook/test";

import Index from './index';

const meta = {
  title: "Buttons/Icon Button",
  component: Index,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: fn(),
    src: { control: "text" },
    ariaLabel: { control: "text" }
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    src: "/assets/images/icons/icon-go.svg",
    ariaLabel: "Go"
  },
};
