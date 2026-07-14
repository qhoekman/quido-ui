import TabsComponent from "@/components/tabs/tabs.vue";
import TabsListComponent from "@/components/tabs/tabs-list.vue";
import TabsTriggerComponent from "@/components/tabs/tabs-trigger.vue";
import TabsContentComponent from "@/components/tabs/tabs-content.vue";
import CardComponent from "@/components/card/card.vue";
import CardHeaderComponent from "@/components/card/card-header.vue";
import CardTitleComponent from "@/components/card/card-title.vue";
import CardDescriptionComponent from "@/components/card/card-description.vue";
import CardContentComponent from "@/components/card/card-content.vue";
import CardFooterComponent from "@/components/card/card-footer.vue";
import ButtonComponent from "@/components/button/button.vue";
import InputComponent from "@/components/input/input.vue";
import LabelComponent from "@/components/label/label.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, watch } from "vue";

const meta = {
  title: "Components/Navigation/Tabs",
  component: TabsComponent,
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "The value of the tab that should be active when initially rendered",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description:
        "When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",
    },
  },
  args: {
    defaultValue: "account",
    orientation: "horizontal",
    activationMode: "automatic",
  },
  render: (args) => ({
    components: {
      TabsComponent,
      TabsListComponent,
      TabsTriggerComponent,
      TabsContentComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardDescriptionComponent,
      CardContentComponent,
      CardFooterComponent,
      ButtonComponent,
      InputComponent,
      LabelComponent,
    },
    setup() {
      const value = ref(args.defaultValue ?? "account");

      watch(
        () => args.defaultValue,
        (newValue) => {
          value.value = newValue ?? "account";
        }
      );

      return { args, value };
    },
    template: `
      <TabsComponent
        v-model:value="value"
        :default-value="args.defaultValue"
        :orientation="args.orientation"
        :activation-mode="args.activationMode"
        style="width: 100%; max-width: 600px;"
      >
        <TabsListComponent>
          <TabsTriggerComponent value="account">Account</TabsTriggerComponent>
          <TabsTriggerComponent value="password">Password</TabsTriggerComponent>
          <TabsTriggerComponent value="disabled" disabled>Disabled</TabsTriggerComponent>
        </TabsListComponent>
        <TabsContentComponent value="account">
          <CardComponent>
            <CardHeaderComponent>
              <CardTitleComponent>Account</CardTitleComponent>
              <CardDescriptionComponent>
                Make changes to your account here. Click save when you're done.
              </CardDescriptionComponent>
            </CardHeaderComponent>
            <CardContentComponent>
              <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
                  <LabelComponent for="name">Name</LabelComponent>
                  <InputComponent id="name" defaultValue="Pedro Duarte" />
                </div>
                <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
                  <LabelComponent for="username">Username</LabelComponent>
                  <InputComponent id="username" defaultValue="@peduarte" />
                </div>
              </div>
            </CardContentComponent>
            <CardFooterComponent>
              <ButtonComponent>Save changes</ButtonComponent>
            </CardFooterComponent>
          </CardComponent>
        </TabsContentComponent>
        <TabsContentComponent value="password">
          <CardComponent>
            <CardHeaderComponent>
              <CardTitleComponent>Password</CardTitleComponent>
              <CardDescriptionComponent>
                Change your password here. After saving, you'll be logged out.
              </CardDescriptionComponent>
            </CardHeaderComponent>
            <CardContentComponent>
              <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
                  <LabelComponent for="current">Current password</LabelComponent>
                  <InputComponent id="current" type="password" />
                </div>
                <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
                  <LabelComponent for="new">New password</LabelComponent>
                  <InputComponent id="new" type="password" />
                </div>
              </div>
            </CardContentComponent>
            <CardFooterComponent>
              <ButtonComponent>Save password</ButtonComponent>
            </CardFooterComponent>
          </CardComponent>
        </TabsContentComponent>
        <TabsContentComponent value="disabled">
          <CardComponent>
            <CardContentComponent>
              <p>This tab is disabled.</p>
            </CardContentComponent>
          </CardComponent>
        </TabsContentComponent>
      </TabsComponent>
    `,
  }),
} satisfies Meta<typeof TabsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
