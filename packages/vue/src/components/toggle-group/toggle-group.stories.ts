import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import ToggleGroup from "./toggle-group.vue";
import ToggleGroupItem from "./toggle-group-item.vue";
import { Bold, Italic, Strikethrough } from "lucide-vue-next";

const meta = {
  title: "Components/Data Entry/Toggle Group",
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "default"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
  args: {
    variant: "primary",
    size: "md",
    type: "single",
  },
  render: (args) => ({
    components: { ToggleGroup, ToggleGroupItem, Bold, Italic, Strikethrough },
    setup() {
      const value = ref<string | string[]>(
        args.type === "single" ? "" : []
      );

      return { args, value };
    },
    template: `
      <ToggleGroup
        v-model:value="value"
        :variant="args.variant"
        :size="args.size"
        :type="args.type"
      >
        <ToggleGroupItem value="bold"><Bold :size="16" /></ToggleGroupItem>
        <ToggleGroupItem value="italic"><Italic :size="16" /></ToggleGroupItem>
        <ToggleGroupItem value="strikethrough"><Strikethrough :size="16" /></ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    setup() {
      const value = ref("list");
      return { value };
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem;">
        <h3 style="margin: 0;">Sprint Backlog</h3>
        <ToggleGroup v-model:value="value" type="single" variant="outline" size="sm">
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="board">Board</ToggleGroupItem>
          <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
        </ToggleGroup>
      </div>
    `,
  }),
};
