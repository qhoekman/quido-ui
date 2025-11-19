import { Button } from "@/components/button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog/dialog";
import { Input } from "@/components/input/input";
import { Label } from "@radix-ui/react-label";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Overlay/Dialog",
  component: Dialog,
  argTypes: {
    defaultOpen: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
    modal: {
      control: "boolean",
    },
  },
  args: {
    defaultOpen: false,
    modal: true,
  },
} satisfies Meta<typeof Dialog>;

export const Default: StoryFn<typeof Dialog> = (args) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div
        style={{
          display: "grid",
          gap: "var(--spacing-4)",
          padding: "var(--spacing-4)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 1fr",
            gap: "var(--spacing-4)",
          }}
        >
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            defaultValue="Pedro Duarte"
            style={{ gridColumn: "span 3" }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 1fr",
            gap: "var(--spacing-4)",
          }}
        >
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            style={{ gridColumn: "span 3" }}
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
