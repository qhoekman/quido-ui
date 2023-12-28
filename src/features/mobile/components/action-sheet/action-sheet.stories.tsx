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
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Mobile/Components/Action Sheet",
  component: ActionSheet,
} as Meta<typeof ActionSheet>;

export const Default: StoryFn = (args) => (
  <ActionSheet {...args}>
    <ActionSheetTrigger asChild>
      <Button variant="outline">Open ActionSheet</Button>
    </ActionSheetTrigger>
    <ActionSheetContent>
      <div className="mx-auto w-full max-w-sm">
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
