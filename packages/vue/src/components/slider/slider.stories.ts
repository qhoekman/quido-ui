import SliderComponent from "./slider.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Manipulation/Slider",
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
