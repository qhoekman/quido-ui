import { Stars } from "@/features/ecommerce/components/stars/stars";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Stars",
  component: Stars,
  argTypes: {
    total: {
      control: "number",
    },
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
  },
  args: {
    total: 5,
    rating: 4,
  },
} satisfies Meta<typeof Stars>;

export const Default: StoryObj<typeof Stars> = {};

export const DifferentRatings: StoryObj<typeof Stars> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
      <Stars rating={0} total={5} />
      <Stars rating={1} total={5} />
      <Stars rating={2} total={5} />
      <Stars rating={3} total={5} />
      <Stars rating={4} total={5} />
      <Stars rating={5} total={5} />
    </div>
  ),
};

export const DifferentStarCounts: StoryObj<typeof Stars> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
      <Stars rating={3} total={3} />
      <Stars rating={3} total={5} />
      <Stars rating={3} total={10} />
    </div>
  ),
};

export const Composition: StoryObj<typeof Stars> = {
  render: () => (
    <div
      style={{
        maxWidth: "16rem",
        padding: "var(--spacing-4)",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <h4 style={{ margin: "0 0 var(--spacing-1)" }}>Classic Tee</h4>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
        <Stars rating={4.5} total={5} />
        <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
          128 reviews
        </span>
      </div>
    </div>
  ),
};
