import RangeComponent from "./range.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Range",
  component: RangeComponent,
  argTypes: {
    min: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
    step: {
      control: {
        type: "number",
      },
    },
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    value: [0, 100],
  },
  render: (args) => ({
    components: { RangeComponent },
    setup() {
      const value = ref(args.value ?? [0, 100]);
      return { args, value };
    },
    template:
      '<RangeComponent v-bind="args" v-model:value="value" @update:value="(newValue) => { value = newValue; args.onValueChange?.(newValue); }" />',
  }),
} satisfies Meta<typeof RangeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onValueChange: (value: number[]) => console.log(value),
  },
};

export const Composition: Story = {
  render: () => ({
    components: { RangeComponent },
    setup() {
      const value = ref([25, 150]);
      return { value };
    },
    template: `
      <div style="max-width: 18rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span style="font-weight: var(--font-weight-semibold);">Price range</span>
          <span style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">\${{ value[0] }} – \${{ value[1] }}</span>
        </div>
        <RangeComponent :min="0" :max="200" :step="5" v-model:value="value" />
      </div>
    `
  })
}
