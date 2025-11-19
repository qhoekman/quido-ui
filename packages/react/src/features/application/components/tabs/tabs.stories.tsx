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
import { Label } from "@/components/label/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/features/application/components/tabs/tabs";

import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Application/Components/Tabs",
  component: Tabs,
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "The value of the tab that should be active when initially rendered",
    },
    value: {
      control: "text",
      description: "The controlled value of the tab to activate",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description:
        "When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",
    },
  },
  args: {
    defaultValue: "account",
    orientation: "horizontal",
    activationMode: "automatic",
  },
} satisfies Meta<typeof Tabs>;

export const Default: StoryFn<typeof Tabs> = (args) => (
  <Tabs style={{ width: "var(--spacing-sm)" }} {...args}>
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div>
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);
