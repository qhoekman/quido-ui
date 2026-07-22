import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import { HStack } from "@/components/hstack/hstack";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Layout/HStack",
  component: HStack,
} satisfies Meta<typeof HStack>;

export const Default: StoryObj<typeof HStack> = {
  render: (args) => (
    <HStack {...args}>
      {[
        { name: "Starter", price: "$9/mo" },
        { name: "Team", price: "$29/mo" },
        { name: "Business", price: "$79/mo" },
        { name: "Enterprise", price: "Custom" },
        { name: "Nonprofit", price: "$5/mo" },
      ].map((plan) => (
        <Card key={plan.name} style={{ width: 200 }}>
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{plan.price}</p>
          </CardContent>
        </Card>
      ))}
    </HStack>
  ),
};

export const Composition: StoryObj<typeof HStack> = {
  render: () => (
    <HStack
      gap="sm"
      style={{ alignItems: "center" }}
    >
      <span
        style={{
          fontSize: "var(--font-size-sm)",
          color: "var(--color-muted-fg)",
        }}
      >
        Sort by:
      </span>
      <button
        style={{
          padding: "var(--spacing-1) var(--spacing-3)",
          borderRadius: "var(--border-radius-md)",
          border: "var(--border-width-default) solid var(--color-border)",
          background: "var(--color-primary)",
          color: "var(--color-primary-fg)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Newest
      </button>
      <button
        style={{
          padding: "var(--spacing-1) var(--spacing-3)",
          borderRadius: "var(--border-radius-md)",
          border: "var(--border-width-default) solid var(--color-border)",
          background: "transparent",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Price
      </button>
      <button
        style={{
          padding: "var(--spacing-1) var(--spacing-3)",
          borderRadius: "var(--border-radius-md)",
          border: "var(--border-width-default) solid var(--color-border)",
          background: "transparent",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Rating
      </button>
    </HStack>
  ),
};
