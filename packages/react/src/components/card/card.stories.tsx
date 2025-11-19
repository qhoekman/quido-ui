import { Button } from "@/components/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import { Input } from "@/components/input/input";
import { Label } from "@radix-ui/react-label";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Data Display/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export const Default: StoryFn<typeof Card> = (args) => (
  <Card style={{ width: "350px" }} {...args}>
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div
          style={{
            display: "grid",
            width: "100%",
            alignItems: "center",
            gap: "var(--spacing-4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-1-5)",
            }}
          >
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-1-5)",
            }}
          >
            <Label htmlFor="framework">Framework</Label>
            <Input id="framework" placeholder="..." />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);
