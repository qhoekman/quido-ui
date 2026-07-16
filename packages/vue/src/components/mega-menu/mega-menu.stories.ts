import MegaMenuComponent from "./mega-menu.vue";
import MegaMenuDemo from "./mega-menu-demo.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Website/Components/Mega Menu",
  component: MegaMenuComponent,
  argTypes: {
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "The reading direction of the navigation menu",
    },
    delayDuration: {
      control: "number",
      description:
        "The duration in milliseconds to wait before showing the content",
    },
    skipDelayDuration: {
      control: "number",
      description:
        "The duration in milliseconds to wait before hiding the content when moving to the next item",
    },
  },
  args: {
    delayDuration: 200,
    skipDelayDuration: 300,
    dir: "ltr",
  },
  render: (args) => ({
    components: {
      MegaMenuDemo,
    },
    setup() {
      return { args };
    },
    template: `
      <MegaMenuDemo
        :dir="args.dir"
        :delay-duration="args.delayDuration"
        :skip-delay-duration="args.skipDelayDuration"
      />
    `,
  }),
} satisfies Meta<typeof MegaMenuComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
