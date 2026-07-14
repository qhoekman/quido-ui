import CallToActionComponent from "@/components/call-to-action/call-to-action.vue";
import CallToActionContentComponent from "@/components/call-to-action/call-to-action-content.vue";
import CallToActionSectionComponent from "@/components/call-to-action/call-to-action-section.vue";
import CallToActionTitleComponent from "@/components/call-to-action/call-to-action-title.vue";
import CallToActionSubtitleComponent from "@/components/call-to-action/call-to-action-subtitle.vue";
import CallToActionActionsComponent from "@/components/call-to-action/call-to-action-actions.vue";
import CallToActionBackdropComponent from "@/components/call-to-action/call-to-action-backdrop.vue";
import ButtonComponent from "@/components/button/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Layout/Call To Action",
  component: CallToActionComponent,
  argTypes: {
    asChild: {
      control: "boolean",
    },
  },
  args: {
    asChild: false,
  },
  render: (args) => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionSectionComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
    },
    setup() {
      return { args };
    },
    template: `
      <CallToActionComponent v-bind="args">
        <CallToActionContentComponent>
          <CallToActionSectionComponent>
            <CallToActionTitleComponent>Ready to dive in?</CallToActionTitleComponent>
            <CallToActionSubtitleComponent>
              Start your free trial today and experience the power of our platform.
            </CallToActionSubtitleComponent>
            <CallToActionActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </CallToActionActionsComponent>
          </CallToActionSectionComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
} satisfies Meta<typeof CallToActionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
