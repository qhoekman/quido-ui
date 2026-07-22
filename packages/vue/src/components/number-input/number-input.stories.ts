import NumberInputComponent from "@/components/number-input/number-input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Features/Ecommerce/Components/Number Input",
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

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { NumberInputComponent },
    setup() {
      const value = ref(2);
      return { value };
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <div>
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Classic Tee</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">$28.00</p>
        </div>
        <NumberInputComponent v-model="value" :min="1" :max="10" style="max-width: var(--spacing-48);" />
      </div>
    `
  })
}
