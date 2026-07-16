import TextComponent from "@/components/text/text.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Typography/Text",
  component: TextComponent,
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "caption", "label", "title", "subtitle", "unset"],
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
        "unset",
      ],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "bold", "unset"],
    },
    color: {
      control: "select",
      options: [
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "muted",
        "unset",
      ],
    },
    asChild: {
      control: "boolean",
    },
    as: {
      control: "text",
    },
  },
  args: {
    variant: "unset",
    size: "unset",
    weight: "unset",
    color: "unset",
    asChild: false,
    as: "span",
  },
  render: (args) => ({
    components: { TextComponent },
    setup() {
      return { args };
    },
    template: '<TextComponent v-bind="args">Sample Text</TextComponent>',
  }),
} satisfies Meta<typeof TextComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
