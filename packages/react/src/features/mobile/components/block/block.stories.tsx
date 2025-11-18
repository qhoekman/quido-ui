import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react-vite";

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

export const Default: StoryFn<typeof Block> = (args) => (
  <ViewportLayout>
    <BlockTitle>Block Title</BlockTitle>
    <Block {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
      rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
      atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
    </Block>
  </ViewportLayout>
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const WithInset: StoryFn<typeof Block> = (args) => (
  <ViewportLayout>
    <BlockTitle>Block Title</BlockTitle>
    <Block inset {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
      rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
      atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
    </Block>
  </ViewportLayout>
);

WithInset.args = {
  inset: true,
};

WithInset.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const WithOutline: StoryFn<typeof Block> = (args) => (
  <ViewportLayout>
    <BlockTitle>Block Title</BlockTitle>
    <Block inset outline {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
      rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
      atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
    </Block>
  </ViewportLayout>
);

WithOutline.args = {
  outline: true,
};

WithOutline.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
