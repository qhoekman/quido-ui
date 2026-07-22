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

export const Composition: Story = {
  render: () => ({
    components: { PinInputComponent },
    setup() {
      const value = ref("");
      return { value };
    },
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); text-align: center;">
        <h3 style="margin: 0 0 var(--spacing-1);">Verify your email</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Enter the 4-digit code we sent to jane@company.com.</p>
        <PinInputComponent :length="4" v-model="value" />
      </div>
    `
  })
}
