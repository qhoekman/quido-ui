import PinInputComponent from "@/components/pin-input/pin-input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Pin Input",
  component: PinInputComponent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    length: {
      control: "number",
    },
    name: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    length: 4,
    name: "",
    disabled: false,
  },
  render: (args) => ({
    components: { PinInputComponent },
    setup() {
      const value = ref(args.modelValue || "");
      return { args, value };
    },
    template: '<PinInputComponent v-bind="args" v-model="value" />',
  }),
} satisfies Meta<typeof PinInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
