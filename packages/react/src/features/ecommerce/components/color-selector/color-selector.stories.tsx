import { Label } from "@/components/label/label";
import {
  ColorSelector,
  ColorSelectorItem,
  ColorSelectorItems,
} from "@/features/ecommerce/components/color-selector/color-selector";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Color Selector",
  component: ColorSelector,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    name: {
      control: "text",
    },
    defaultValue: {
      control: "text",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof ColorSelector>;

export const Default: StoryObj<typeof ColorSelector> = {
  render: (args) => (
    <form>
      <ColorSelector {...args}>
        <Label className="sr-only">Choose your color</Label>
        <ColorSelectorItems>
          <ColorSelectorItem color="red" value="red" />
          <ColorSelectorItem color="yellow" value="yellow" />
          <ColorSelectorItem color="green" value="green" />
          <ColorSelectorItem color="blue" value="blue" />
          <ColorSelectorItem color="indigo" value="indigo" />
        </ColorSelectorItems>
      </ColorSelector>
    </form>
  ),
};

export const Composition: StoryObj<typeof ColorSelector> = {
  render: () => (
    <form style={{ maxWidth: "16rem" }}>
      <h4 style={{ margin: "0 0 var(--spacing-1)" }}>Classic Tee</h4>
      <p
        style={{
          margin: "0 0 var(--spacing-4)",
          color: "var(--color-muted-fg)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        $28.00
      </p>
      <Label style={{ display: "block", marginBottom: "var(--spacing-2)" }}>
        Color
      </Label>
      <ColorSelector defaultValue="blue">
        <ColorSelectorItems>
          <ColorSelectorItem color="red" value="red" />
          <ColorSelectorItem color="yellow" value="yellow" />
          <ColorSelectorItem color="green" value="green" />
          <ColorSelectorItem color="blue" value="blue" />
          <ColorSelectorItem color="indigo" value="indigo" />
        </ColorSelectorItems>
      </ColorSelector>
    </form>
  ),
};
