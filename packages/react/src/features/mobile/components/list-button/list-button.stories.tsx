import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import { ListButton } from "@/features/mobile/components/list-button/list-button";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/List Button",
  component: ListButton,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
  },
  args: {
    disabled: false,
    type: "button",
  },
} satisfies Meta<typeof ListButton>;

export const Default: StoryObj<typeof ListButton> = {
  render: (args) => (
    <ViewportLayout>
      <BlockTitle>List Button</BlockTitle>
      <Block style={{ padding: "0" }} inset>
        <ul>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              <ListButton {...args}>
                <span>Button {index + 1}</span>
              </ListButton>
            </li>
          ))}
        </ul>
      </Block>
    </ViewportLayout>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

const ACCOUNT_ACTIONS = [
  "Edit Profile",
  "Change Password",
  "Notification Preferences",
  "Privacy & Security",
  "Sign Out",
];

export const Composition: StoryObj<typeof ListButton> = {
  render: () => (
    <ViewportLayout>
      <BlockTitle>Account</BlockTitle>
      <Block style={{ padding: "0" }} inset>
        <ul>
          {ACCOUNT_ACTIONS.map((action) => (
            <li key={action} style={{ listStyle: "none" }}>
              <ListButton>
                <span>{action}</span>
              </ListButton>
            </li>
          ))}
        </ul>
      </Block>
    </ViewportLayout>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
