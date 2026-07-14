import PasswordInputComponent from "@/components/password-input/password-input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Password Input",
  component: PasswordInputComponent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    placeholder: {
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
  },
  args: {
    size: "md",
    placeholder: "Enter password",
    disabled: false,
    required: false,
    readOnly: false,
  },
  render: (args) => ({
    components: { PasswordInputComponent },
    setup() {
      const value = ref(args.value || "");
      return { args, value };
    },
    template:
      '<PasswordInputComponent v-bind="args" v-model="value" style="max-width: var(--spacing-48)" />',
  }),
} satisfies Meta<typeof PasswordInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
  },
};
