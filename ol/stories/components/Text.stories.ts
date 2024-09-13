import { Text } from "@/components/text";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    token: {
      type: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BodyLargeRegular: Story = {
  args: {
    token: "body-large-regular",
    children: "Some example text"
  },
};
