import SliderComponent from "./slider.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Slider",
  component: SliderComponent,
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
    value: 50,
  },
  render: (args) => ({
    components: { SliderComponent },
    setup() {
      const value = ref(args.value ?? 50);
      return { args, value };
    },
    template:
      '<SliderComponent v-bind="args" v-model:value="value" @update:value="(newValue) => { value = newValue; args.onValueChange?.(newValue); }" />',
  }),
} satisfies Meta<typeof SliderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onValueChange: (value: number) => console.log(value),
  },
};

export const Composition: Story = {
  render: () => ({
    components: { SliderComponent },
    setup() {
      const value = ref(70);
      return { value };
    },
    template: `
      <div style="max-width: 18rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span style="font-weight: var(--font-weight-semibold);">Volume</span>
          <span style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">{{ value }}%</span>
        </div>
        <SliderComponent :min="0" :max="100" :step="5" v-model:value="value" />
      </div>
    `,
  }),
};
