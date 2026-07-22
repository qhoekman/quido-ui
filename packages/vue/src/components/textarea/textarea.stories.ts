import TextareaComponent from "@/components/textarea/textarea.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Textarea",
  component: TextareaComponent,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
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
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
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
    placeholder: "Enter your message",
    disabled: false,
    required: false,
    readOnly: false,
    asChild: false,
  },
  render: (args) => ({
    components: { TextareaComponent },
    setup() {
      const value = ref(
        args.value ||
          "The new dashboard is much easier to navigate, but I'd love to see dark mode support added soon."
      );
      return { args, value };
    },
    template:
      '<TextareaComponent v-bind="args" v-model="value" style="max-width: var(--spacing-48)" />',
  }),
} satisfies Meta<typeof TextareaComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { TextareaComponent },
    setup() {
      const value = ref("");
      return { value };
    },
    template: `
      <div style="max-width: var(--spacing-64);">
        <label for="bio" style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin-bottom: var(--spacing-1-5);">Bio</label>
        <TextareaComponent id="bio" placeholder="Tell us a little about yourself..." v-model="value" :rows="4" />
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">This appears on your public profile. Max 200 characters.</p>
      </div>
    `,
  }),
};
