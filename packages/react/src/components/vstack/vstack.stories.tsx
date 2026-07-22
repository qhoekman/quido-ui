import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import { VStack } from "@/components/vstack/vstack";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Layout/VStack",
  component: VStack,
} satisfies Meta<typeof VStack>;

export const Default: StoryObj<typeof VStack> = {
  render: (args) => (
    <VStack {...args} style={{ width: "320px" }}>
      {[
        { title: "New comment", body: "Ava Chen commented on your pull request." },
        { title: "Build passed", body: "The main branch build completed successfully." },
        { title: "Deploy complete", body: "Version 2.4.0 was deployed to production." },
        { title: "New follower", body: "Marcus Reyes started following your project." },
        { title: "Reminder", body: "Sprint review is scheduled for tomorrow at 10am." },
      ].map((notification) => (
        <Card key={notification.title}>
          <CardHeader>
            <CardTitle>{notification.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{notification.body}</p>
          </CardContent>
        </Card>
      ))}
    </VStack>
  ),
};

export const Composition: StoryObj<typeof VStack> = {
  render: () => (
    <VStack
      gap="sm"
      style={{ width: "260px" }}
    >
      <span
        style={{
          fontSize: "var(--font-size-sm)",
          fontWeight: "var(--font-weight-medium)",
        }}
      >
        Email notifications
      </span>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        <input type="checkbox" defaultChecked /> Comments
      </label>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        <input type="checkbox" defaultChecked /> Deploys
      </label>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        <input type="checkbox" /> Marketing updates
      </label>
    </VStack>
  ),
};
