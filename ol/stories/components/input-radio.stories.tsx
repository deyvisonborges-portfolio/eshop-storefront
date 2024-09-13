import { InputRadio } from "@/components/input-radio";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Components/Input Checkbox",
  component: InputRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtomSmall: Story = {
  name: "InputCheckbox Toggle Enable/Disable",
  args: {
    toggleChecked: () => null,
  },
  render: (args) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleDisabled = () => {
      setIsDisabled((prev) => !prev);
    };

    return (
      <InputRadio
        label={isDisabled ? "Enable Checkbox" : "Disable Checkbox"}
        isChecked={isDisabled}
        toggleChecked={toggleDisabled}
      />
    );
  },
};
