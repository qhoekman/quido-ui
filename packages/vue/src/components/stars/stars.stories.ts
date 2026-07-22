import StarsComponent from "@/components/stars/stars.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Ecommerce/Components/Stars",
  component: StarsComponent,
  argTypes: {
    total: {
      control: "number",
      description: "Total number of stars to display",
    },
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 0.5,
      },
      description: "Current rating value (number of filled stars)",
    },
    asChild: {
      control: "boolean",
    },
  },
  args: {
    rating: 4,
    total: 5,
    asChild: false,
  },
  render: (args) => ({
    components: { StarsComponent },
    setup() {
      return { args };
    },
    template: '<StarsComponent v-bind="args" />',
  }),
} satisfies Meta<typeof StarsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DifferentRatings: Story = {
  render: () => ({
    components: { StarsComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <StarsComponent :rating="0" :total="5" />
        <StarsComponent :rating="1" :total="5" />
        <StarsComponent :rating="2" :total="5" />
        <StarsComponent :rating="3" :total="5" />
        <StarsComponent :rating="4" :total="5" />
        <StarsComponent :rating="5" :total="5" />
      </div>
    `,
  }),
};

export const DifferentStarCounts: Story = {
  render: () => ({
    components: { StarsComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <StarsComponent :rating="3" :total="3" />
        <StarsComponent :rating="3" :total="5" />
        <StarsComponent :rating="3" :total="10" />
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    components: { StarsComponent },
    template: `
      <div style="max-width: 16rem; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h4 style="margin: 0 0 var(--spacing-1);">Classic Tee</h4>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <StarsComponent :rating="4.5" :total="5" />
          <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">128 reviews</span>
        </div>
      </div>
    `,
  }),
};
