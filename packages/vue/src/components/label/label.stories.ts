import type { Meta, StoryFn } from "@storybook/vue3";
import Label from "./label.vue";
import Input from "../input/input.vue";

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
      <Label v-bind="args">Full name</Label>
    </div>
  `,
});

Default.args = {
  size: "md",
};

export const Composition: StoryFn<typeof Label> = () => ({
  components: { Label, Input },
  template: `
    <div style="display: flex; flex-direction: column; gap: var(--spacing-1-5); max-width: 16rem;">
      <Label for="full-name">Full name</Label>
      <Input id="full-name" placeholder="Jane Doe" />
    </div>
  `,
});
