import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import { VStack } from "@/components/vstack/vstack";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Layout/VStack",
  component: VStack,
} satisfies Meta<typeof VStack>;

export const Default: StoryFn<typeof VStack> = (args) => (
  <VStack {...args}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>Card {index + 1}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </CardContent>
      </Card>
    ))}
  </VStack>
);
