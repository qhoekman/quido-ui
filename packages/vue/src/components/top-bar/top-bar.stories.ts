import TopBarComponent from "./top-bar.vue";
import TopBarSectionComponent from "./top-bar-section.vue";
import ButtonComponent from "../button/button.vue";
import { Menu, ChevronsUpDown } from "lucide-vue-next";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Layout/Top Bar",
  component: TopBarComponent,
  argTypes: {
    as: {
      control: "select",
      options: ["header", "div"],
    },
    asChild: {
      control: "boolean",
    },
  },
  args: {
    as: "header",
    asChild: false,
  },
  render: (args) => ({
    components: {
      TopBarComponent,
      TopBarSectionComponent,
      ButtonComponent,
      Menu,
      ChevronsUpDown,
    },
    setup() {
      return { args };
    },
    template: `
      <TopBarComponent v-bind="args">
        <TopBarSectionComponent>
          <ButtonComponent variant="ghost" size="icon">
            <Menu :size="16" />
          </ButtonComponent>
        </TopBarSectionComponent>
        <TopBarSectionComponent>
          <!-- Empty section -->
        </TopBarSectionComponent>
        <TopBarSectionComponent items="end">
          <ButtonComponent variant="ghost">
            My profile
            <ChevronsUpDown :size="16" />
          </ButtonComponent>
        </TopBarSectionComponent>
      </TopBarComponent>
    `,
  }),
} satisfies Meta<typeof TopBarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
