import InputComponent from "@/components/input/input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Input",
  component: InputComponent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "file",
      ],
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
    minLength: {
      control: "number",
    },
    asChild: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    type: "text",
    placeholder: "Enter your name",
    disabled: false,
    required: false,
    readOnly: false,
    asChild: false,
  },
  render: (args) => ({
    components: { InputComponent },
    setup() {
      const value = ref(args.value || "");
      return { args, value };
    },
    template:
      '<InputComponent v-bind="args" v-model="value" style="max-width: var(--spacing-48)" />',
  }),
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

