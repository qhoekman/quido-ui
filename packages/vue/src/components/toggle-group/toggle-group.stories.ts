import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import ToggleGroup from "./toggle-group.vue";
import ToggleGroupItem from "./toggle-group-item.vue";

const meta = {
  title: "Components/Data Manipulation/Toggle Group",
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
    components: { ToggleGroup, ToggleGroupItem },
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
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
