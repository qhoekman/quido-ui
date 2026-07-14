import TextareaComponent from "@/components/textarea/textarea.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Manipulation/Textarea",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam lacinia, nunc nisl aliquet nunc, quis aliquam nis"
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
