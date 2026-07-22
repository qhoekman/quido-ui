import { Button } from "@/components/button/button";
import type { StoryObj, Meta } from "@storybook/react-vite";

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

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Continue</Button>,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CGNRrXlC5k58xCRDrtUY8X/Company-Fit?type=design&node-id=13%3A1070&mode=design&t=Arpslje2USvZF9R2-1",
    },
  },
};

export const Composition: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save changes</Button>
    </div>
  ),
};
