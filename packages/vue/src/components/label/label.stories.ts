import type { Meta, StoryFn } from "@storybook/vue3";
import Label from "./label.vue";

export default {
  title: "Components/Data Entry/Label",
  component: Label,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Label>;

export const Default: StoryFn<typeof Label> = (args) => ({
  components: { Label },
  setup() {
    return { args };
  },
  template: `
    <div style="max-width: var(--spacing-sm)">
      <Label v-bind="args">Label</Label>
    </div>
  `,
});

Default.args = {
  size: "md",
};
