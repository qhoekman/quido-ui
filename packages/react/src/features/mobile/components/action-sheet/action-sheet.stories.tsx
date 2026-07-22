import { Button } from "@/components/button/button";
import {
  ActionSheet,
  ActionSheetClose,
  ActionSheetContent,
  ActionSheetDescription,
  ActionSheetFooter,
  ActionSheetHeader,
  ActionSheetTitle,
  ActionSheetTrigger,
} from "@/features/mobile/components/action-sheet/action-sheet";
import { ListButton } from "@/features/mobile/components/list-button/list-button";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/Action Sheet",
  component: ActionSheet,
  argTypes: {
    shouldScaleBackground: {
      control: "boolean",
      description: "Whether the background should scale when the drawer opens",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the action sheet when it is initially rendered",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the action sheet",
    },
    modal: {
      control: "boolean",
      description: "Whether the action sheet is modal",
    },
    dismissible: {
      control: "boolean",
      description:
        "Whether the action sheet can be dismissed by clicking outside or pressing escape",
    },
  },
  args: {
    shouldScaleBackground: true,
    modal: true,
    dismissible: true,
  },
} satisfies Meta<typeof ActionSheet>;

const DEFAULT_ACTIONS = ["Share", "Edit", "Duplicate", "Archive", "Delete"];

export const Default: StoryObj<typeof ActionSheet> = {
  render: (args) => (
    <ActionSheet {...args}>
      <ActionSheetTrigger asChild>
        <Button variant="outline">Open ActionSheet</Button>
      </ActionSheetTrigger>
      <ActionSheetContent>
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: "var(--spacing-sm)",
          }}
        >
          <ActionSheetHeader>
            <ActionSheetTitle>Choose action</ActionSheetTitle>
            <ActionSheetDescription>
              Pick one of the following actions.
            </ActionSheetDescription>
          </ActionSheetHeader>
          <ul>
            {DEFAULT_ACTIONS.map((action) => (
              <li key={action}>
                <ListButton>
                  <span>{action}</span>
                </ListButton>
              </li>
            ))}
          </ul>
          <ActionSheetFooter>
            <ActionSheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </ActionSheetClose>
          </ActionSheetFooter>
        </div>
      </ActionSheetContent>
    </ActionSheet>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

const POST_ACTIONS = [
  "Save to Collection",
  "Share",
  "Copy Link",
  "Report",
  "Delete Post",
];

export const Composition: StoryObj<typeof ActionSheet> = {
  render: () => (
    <ActionSheet modal dismissible>
      <div
        style={{
          margin: "var(--spacing-6) auto 0",
          width: "100%",
          maxWidth: "var(--spacing-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--spacing-3)",
          padding: "var(--spacing-4)",
          border: "var(--border-width-default) solid var(--color-border)",
          borderRadius: "var(--border-radius-lg)",
        }}
      >
        <div>
          <p style={{ margin: 0, fontWeight: "var(--font-weight-medium)" }}>
            Sunset over the bay
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "var(--font-size-sm)",
              color: "var(--color-muted-fg)",
            }}
          >
            Posted 2 hours ago
          </p>
        </div>
        <ActionSheetTrigger asChild>
          <Button variant="ghost" size="sm">
            ⋯
          </Button>
        </ActionSheetTrigger>
      </div>
      <ActionSheetContent>
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: "var(--spacing-sm)",
          }}
        >
          <ActionSheetHeader>
            <ActionSheetTitle>Manage post</ActionSheetTitle>
            <ActionSheetDescription>
              Choose what to do with this post.
            </ActionSheetDescription>
          </ActionSheetHeader>
          <ul>
            {POST_ACTIONS.map((action) => (
              <li key={action}>
                <ListButton>
                  <span>{action}</span>
                </ListButton>
              </li>
            ))}
          </ul>
          <ActionSheetFooter>
            <ActionSheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </ActionSheetClose>
          </ActionSheetFooter>
        </div>
      </ActionSheetContent>
    </ActionSheet>
  ),
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
