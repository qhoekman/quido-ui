import { Card, CardContent } from "@/components/card/card";
import { HStack } from "@/components/hstack/hstack";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Layout/HStack",
  component: HStack,
} as Meta<typeof HStack>;

export const Default: StoryFn = (args) => (
  <HStack {...args}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Card key={index} className="w-32 bg-primary text-primary-fg">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">{index + 1}</span>
        </CardContent>
      </Card>
    ))}
  </HStack>
);
