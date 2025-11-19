import { Button } from "@/components/button/button";
import {
  ActionSheet,
  ActionSheetContent,
  ActionSheetDescription,
  ActionSheetFooter,
  ActionSheetHeader,
  ActionSheetTitle,
  ActionSheetTrigger,
} from "@/features/mobile/components/action-sheet/action-sheet";
import { ListButton } from "@/features/mobile/components/list-button/list-button";
import type { Meta, StoryFn } from "@storybook/react-vite";

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

export const Default: StoryFn<typeof ActionSheet> = (args) => (
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
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <ListButton>
                <span>Item {index + 1}</span>
              </ListButton>
            </li>
          ))}
        </ul>
        <ActionSheetFooter>
          <Button variant="outline">Cancel</Button>
        </ActionSheetFooter>
      </div>
    </ActionSheetContent>
  </ActionSheet>
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
