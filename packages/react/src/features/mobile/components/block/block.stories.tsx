import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/Block",
  component: Block,
  argTypes: {
    inset: {
      control: "boolean",
    },
    outline: {
      control: "boolean",
    },
  },
  args: {
    inset: false,
    outline: false,
  },
} satisfies Meta<typeof Block>;

export const Default: StoryObj<typeof Block> = {
  render: (args) => (
    <ViewportLayout>
      <BlockTitle>Block Title</BlockTitle>
      <Block {...args}>
        Enable push notifications to stay up to date with new messages,
        mentions, and account activity. You can change this anytime from
        Settings.
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

export const WithInset: StoryObj<typeof Block> = {
  render: (args) => (
    <ViewportLayout>
      <BlockTitle>Block Title</BlockTitle>
      <Block inset {...args}>
        Enable push notifications to stay up to date with new messages,
        mentions, and account activity. You can change this anytime from
        Settings.
      </Block>
    </ViewportLayout>
  ),

  args: {
    inset: true,
  },

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const WithOutline: StoryObj<typeof Block> = {
  render: (args) => (
    <ViewportLayout>
      <BlockTitle>Block Title</BlockTitle>
      <Block inset outline {...args}>
        Enable push notifications to stay up to date with new messages,
        mentions, and account activity. You can change this anytime from
        Settings.
      </Block>
    </ViewportLayout>
  ),

  args: {
    outline: true,
  },

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const Composition: StoryObj<typeof Block> = {
  render: () => (
    <ViewportLayout>
      <BlockTitle>Account</BlockTitle>
      <Block inset>
        Signed in as jordan@platform.squid-ware.nl. Manage your profile,
        password, and connected devices from Settings.
      </Block>
      <BlockTitle>Notifications</BlockTitle>
      <Block inset outline>
        Get notified about new messages, mentions, and weekly summaries. You
        can turn these off anytime.
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
