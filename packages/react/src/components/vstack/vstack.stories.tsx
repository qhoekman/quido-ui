import { Card, CardContent } from "@/components/card/card";
import { VStack } from "@/components/vstack/vstack";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Layout/VStack",
  component: VStack,
} as Meta<typeof VStack>;

export const Default: StoryFn = (args) => (
  <VStack {...args}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Card key={index} className="w-32 bg-primary text-primary-fg">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">{index + 1}</span>
        </CardContent>
      </Card>
    ))}
  </VStack>
);
