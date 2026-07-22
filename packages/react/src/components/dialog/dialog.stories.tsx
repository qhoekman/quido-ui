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
import type { StoryObj, Meta } from "@storybook/react-vite";

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

export const Default: StoryObj<typeof Dialog> = {
  render: (args) => (
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
  ),
};

export const Uncontrolled: StoryObj<typeof Dialog> = {
  render: () => (
    <Dialog>
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Confirm: StoryObj<typeof Dialog> = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <div style={{ padding: "var(--spacing-4)" }}>
          <p
            style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-muted-fg)",
            }}
          >
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Composition: StoryObj<typeof Dialog> = {
  render: () => (
    <div
      style={{
        width: 360,
        padding: "var(--spacing-4)",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h4 style={{ margin: "0 0 var(--spacing-1)", fontSize: "var(--font-size-sm)" }}>
          Pedro Duarte
        </h4>
        <p style={{ margin: 0, color: "var(--color-muted-fg)", fontSize: "var(--font-size-sm)" }}>
          @peduarte
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
