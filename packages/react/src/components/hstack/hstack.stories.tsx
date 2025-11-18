import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import { HStack } from "@/components/hstack/hstack";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Layout/HStack",
  component: HStack,
} satisfies Meta<typeof HStack>;

export const Default: StoryFn<typeof HStack> = (args) => (
  <HStack {...args}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>Card {index + 1}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>...</p>
        </CardContent>
      </Card>
    ))}
  </HStack>
);
