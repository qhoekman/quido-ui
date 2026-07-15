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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
        rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
        atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
        rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
        atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
        rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
        atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
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
