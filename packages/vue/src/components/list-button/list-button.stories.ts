import ListButtonComponent from "@/components/list-button/list-button.vue";
import BlockComponent from "@/components/block/block.vue";
import BlockTitleComponent from "@/components/block/block-title.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Mobile/Components/List Button",
  component: ListButtonComponent,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    as: {
      control: "select",
      options: ["button", "a"],
    },
    asChild: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    type: "button",
    as: "button",
    asChild: false,
  },
  render: (args) => ({
    components: { ListButtonComponent, BlockComponent, BlockTitleComponent },
    setup() {
      return { args };
    },
    template: `
      <div>
        <BlockTitleComponent>List Button</BlockTitleComponent>
        <BlockComponent style="padding: 0;" inset>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li v-for="i in 5" :key="i" style="list-style: none;">
              <ListButtonComponent v-bind="args">
                <span>Button {{ i }}</span>
              </ListButtonComponent>
            </li>
          </ul>
        </BlockComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof ListButtonComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { ListButtonComponent, BlockComponent, BlockTitleComponent },
    template: `
      <div>
        <BlockTitleComponent>Account</BlockTitleComponent>
        <BlockComponent style="padding: 0;" inset>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li v-for="action in ['Edit Profile', 'Change Password', 'Notification Preferences', 'Privacy & Security', 'Sign Out']" :key="action" style="list-style: none;">
              <ListButtonComponent>
                <span>{{ action }}</span>
              </ListButtonComponent>
            </li>
          </ul>
        </BlockComponent>
      </div>
    `,
  }),
};
