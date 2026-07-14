import NumberInputComponent from "@/components/number-input/number-input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Number Input",
  component: NumberInputComponent,
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
    value: {
      control: "number",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
  },
  args: {
    size: "md",
    placeholder: "0",
    disabled: false,
    required: false,
  },
  render: (args) => ({
    components: { NumberInputComponent },
    setup() {
      const value = ref(args.value || 1);
      return { args, value };
    },
    template:
      '<NumberInputComponent v-bind="args" v-model="value" style="max-width: var(--spacing-48)" />',
  }),
} satisfies Meta<typeof NumberInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
  },
};
