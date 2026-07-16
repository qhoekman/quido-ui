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
    modelValue: ["example", "tags"],
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
    modelValue: ["example", "tags"],
    disabled: true,
  },
};
