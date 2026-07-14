import HeaderComponent from "@/components/header/header.vue";
import HeaderContentComponent from "@/components/header/header-content.vue";
import HeaderTaglineComponent from "@/components/header/header-tagline.vue";
import HeaderTitleComponent from "@/components/header/header-title.vue";
import HeaderBodyComponent from "@/components/header/header-body.vue";
import HeaderActionsComponent from "@/components/header/header-actions.vue";
import HeaderBackdropComponent from "@/components/header/header-backdrop.vue";
import HeaderBackdropImageComponent from "@/components/header/header-backdrop-image.vue";
import ButtonComponent from "@/components/button/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Layout/Header",
  component: HeaderComponent,
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      HeaderBackdropComponent,
      HeaderBackdropImageComponent,
      ButtonComponent,
    },
    setup() {
      return {};
    },
    template: `
      <HeaderComponent>
        <HeaderContentComponent>
          <HeaderTaglineComponent>Tagline</HeaderTaglineComponent>
          <HeaderTitleComponent>Short heading goes here</HeaderTitleComponent>
          <HeaderBodyComponent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum tempora delectus et. Iusto tempora accusantium suscipit labore, iure exercitationem autem quasi odit aut temporibus rem expedita maxime at. Laudantium?
          </HeaderBodyComponent>
          <HeaderActionsComponent>
            <ButtonComponent>Button</ButtonComponent>
            <ButtonComponent variant="outline">Button</ButtonComponent>
          </HeaderActionsComponent>
        </HeaderContentComponent>
      </HeaderComponent>
    `,
  }),
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
