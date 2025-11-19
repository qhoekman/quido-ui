import { Button } from "@/components/button/button";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Actions/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "md",
        "sm",
        "lg",
        "icon",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Click me</Button>
);
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/CGNRrXlC5k58xCRDrtUY8X/Company-Fit?type=design&node-id=13%3A1070&mode=design&t=Arpslje2USvZF9R2-1",
  },
};
