import TagInputComponent from "@/components/tag-input/tag-input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Tag Input",
  component: TagInputComponent,
  argTypes: {
    modelValue: {
      control: "object",
    },
    placeholder: {
      control: "text",
    },
    name: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    modelValue: ["design", "frontend"],
    placeholder: "Enter tags (comma-separated)...",
    disabled: false,
  },
  render: (args) => ({
    components: { TagInputComponent },
    setup() {
      const tags = ref(args.modelValue || []);
      return { args, tags };
    },
    template: `
      <div style="width: 300px;">
        <TagInputComponent
          v-model="tags"
          :placeholder="args.placeholder"
          :name="args.name"
          :disabled="args.disabled"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof TagInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    modelValue: [],
  },
};

export const WithManyTags: Story = {
  args: {
    modelValue: [
      "react",
      "vue",
      "angular",
      "typescript",
      "javascript",
      "css",
      "html",
    ],
  },
};

export const Disabled: Story = {
  args: {
    modelValue: ["design", "frontend"],
    disabled: true,
  },
};

export const Composition: Story = {
  render: () => ({
    components: { TagInputComponent },
    setup() {
      const tags = ref(["bug", "urgent"]);
      return { tags };
    },
    template: `
      <div style="max-width: 320px;">
        <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Labels</label>
        <TagInputComponent v-model="tags" placeholder="Add a label..." />
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Press Enter or comma to add a label.</p>
      </div>
    `,
  }),
};
