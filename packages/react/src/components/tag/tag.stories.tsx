import type { StoryObj, Meta } from "@storybook/react-vite";

import { Tag } from "./tag";

export default {
  title: "Components/Data Display/Tag",
  component: Tag,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
  },
  args: {
    variant: "primary",
  },
} satisfies Meta<typeof Tag>;

export const Default: StoryObj<typeof Tag> = {
  render: (args) => <Tag {...args}>New</Tag>,
};

export const Variants: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="destructive">Destructive</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
};

export const Sizes: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Tag size="xs">Extra Small</Tag>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Shapes: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Tag shape="pill">Pill Shape</Tag>
      <Tag shape="plate">Plate Shape</Tag>
    </div>
  ),
};

export const Combinations: StoryObj<typeof Tag> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        <Tag variant="primary" shape="pill" size="sm">
          Primary Pill
        </Tag>
        <Tag variant="secondary" shape="pill" size="md">
          Secondary Pill
        </Tag>
        <Tag variant="destructive" shape="pill" size="lg">
          Destructive Pill
        </Tag>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        <Tag variant="primary" shape="plate" size="xs">
          Primary Plate
        </Tag>
        <Tag variant="secondary" shape="plate" size="sm">
          Secondary Plate
        </Tag>
        <Tag variant="outline" shape="plate" size="md">
          Outline Plate
        </Tag>
      </div>
    </div>
  ),
};

export const Composition: StoryObj<typeof Tag> = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "320px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600 }}>Q3 Roadmap</span>
        <Tag variant="secondary" shape="pill">
          In Progress
        </Tag>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Tag variant="outline" size="sm">
          design
        </Tag>
        <Tag variant="outline" size="sm">
          backend
        </Tag>
        <Tag variant="outline" size="sm">
          q3
        </Tag>
      </div>
    </div>
  ),
};
