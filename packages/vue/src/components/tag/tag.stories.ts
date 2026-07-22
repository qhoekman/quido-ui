import TagComponent from "@/components/tag/tag.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Data Display/Tag",
  component: TagComponent,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["pill", "plate"],
    },
    asChild: {
      control: "boolean",
    },
    as: {
      control: "select",
      options: ["span", "div"],
    },
  },
  args: {
    variant: "primary",
    size: "md",
    shape: "plate",
    asChild: false,
    as: "div",
  },
  render: (args) => ({
    components: { TagComponent },
    setup() {
      return { args };
    },
    template: '<TagComponent v-bind="args">New</TagComponent>',
  }),
} satisfies Meta<typeof TagComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => ({
    components: { TagComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
        <TagComponent variant="primary">Primary</TagComponent>
        <TagComponent variant="secondary">Secondary</TagComponent>
        <TagComponent variant="destructive">Destructive</TagComponent>
        <TagComponent variant="outline">Outline</TagComponent>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { TagComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
        <TagComponent size="xs">Extra Small</TagComponent>
        <TagComponent size="sm">Small</TagComponent>
        <TagComponent size="md">Medium</TagComponent>
        <TagComponent size="lg">Large</TagComponent>
      </div>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    components: { TagComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
        <TagComponent shape="pill">Pill Shape</TagComponent>
        <TagComponent shape="plate">Plate Shape</TagComponent>
      </div>
    `,
  }),
};

export const Combinations: Story = {
  render: () => ({
    components: { TagComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
        <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
          <TagComponent variant="primary" shape="pill" size="sm">Primary Pill</TagComponent>
          <TagComponent variant="secondary" shape="pill" size="md">Secondary Pill</TagComponent>
          <TagComponent variant="destructive" shape="pill" size="lg">Destructive Pill</TagComponent>
        </div>
        <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
          <TagComponent variant="primary" shape="plate" size="xs">Primary Plate</TagComponent>
          <TagComponent variant="secondary" shape="plate" size="sm">Secondary Plate</TagComponent>
          <TagComponent variant="outline" shape="plate" size="md">Outline Plate</TagComponent>
        </div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    components: { TagComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-2); max-width: 320px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: var(--font-weight-semibold);">Q3 Roadmap</span>
          <TagComponent variant="secondary" shape="pill">In Progress</TagComponent>
        </div>
        <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
          <TagComponent variant="outline" size="sm">design</TagComponent>
          <TagComponent variant="outline" size="sm">backend</TagComponent>
          <TagComponent variant="outline" size="sm">q3</TagComponent>
        </div>
      </div>
    `,
  }),
};
