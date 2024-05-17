import { Button } from "@/components/core/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Variation",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtomSmall: Story = {
  args: {
    variant: "default",
    color: "primary",
    size: "small",
    children: "Button small"
  },
  name: "Button Small",
  argTypes: {
    children: {
      name: "Button small"
    }
  }
};

export const ButtonRegular: Story = {
  args: {
    variant: "default",
    color: "primary",
    size: "regular",
    children: "Button Regular"
  }
}