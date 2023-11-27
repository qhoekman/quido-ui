import { Button } from "@/components/button/button";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryFn = (args) => <Button {...args}>Click me</Button>;
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/CGNRrXlC5k58xCRDrtUY8X/Company-Fit?type=design&node-id=13%3A1070&mode=design&t=Arpslje2USvZF9R2-1",
  },
};
