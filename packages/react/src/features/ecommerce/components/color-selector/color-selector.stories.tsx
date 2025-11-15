import { Label } from "@/components/label/label";
import {
  ColorSelector,
  ColorSelectorItem,
  ColorSelectorItems,
} from "@/features/ecommerce/components/color-selector/color-selector";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Color Selector",
  component: ColorSelector,
} satisfies Meta<typeof ColorSelector>;

export const Default: StoryFn<typeof ColorSelector> = (args) => (
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
);
