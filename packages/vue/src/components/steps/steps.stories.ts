import StepsComponent from "@/components/steps/steps.vue";
import StepsListComponent from "@/components/steps/steps-list.vue";
import StepsItemComponent from "@/components/steps/steps-item.vue";
import StepsContentComponent from "@/components/steps/steps-content.vue";
import StepsPrevComponent from "@/components/steps/steps-prev.vue";
import StepsNextComponent from "@/components/steps/steps-next.vue";
import StepsCompletedContentComponent from "@/components/steps/steps-completed-content.vue";
import ButtonComponent from "@/components/button/button.vue";
import ButtonGroupComponent from "@/components/button-group/button-group.vue";
import StackComponent from "@/components/stack/stack.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Navigation/Steps",
  component: StepsComponent,
  argTypes: {
    count: {
      control: "number",
    },
  },
  args: {
    count: 3,
  },
  render: (args) => ({
    components: {
      StepsComponent,
      StepsListComponent,
      StepsItemComponent,
      StepsContentComponent,
      StepsPrevComponent,
      StepsNextComponent,
      StepsCompletedContentComponent,
      ButtonComponent,
      ButtonGroupComponent,
      StackComponent,
    },
    setup() {
      return { args };
    },
    template: `
      <StepsComponent :count="args.count">
        <StepsListComponent>
          <StepsItemComponent index="0">Step 1</StepsItemComponent>
          <StepsItemComponent index="1">Step 2</StepsItemComponent>
          <StepsItemComponent index="2">Step 3</StepsItemComponent>
        </StepsListComponent>

        <StepsContentComponent index="0">
          Step 1 Content
        </StepsContentComponent>
        <StepsContentComponent index="1">
          Step 2 Content
        </StepsContentComponent>
        <StepsContentComponent index="2">
          Step 3 Content
        </StepsContentComponent>
        <StepsCompletedContentComponent>
          All steps completed
        </StepsCompletedContentComponent>

        <StackComponent align="center" items="center">
          <ButtonGroupComponent>
            <StepsPrevComponent as-child>
              <ButtonComponent variant="ghost" size="icon">
                &lt;
              </ButtonComponent>
            </StepsPrevComponent>
            <StepsNextComponent as-child>
              <ButtonComponent variant="ghost" size="icon">
                &gt;
              </ButtonComponent>
            </StepsNextComponent>
          </ButtonGroupComponent>
        </StackComponent>
      </StepsComponent>
    `,
  }),
} satisfies Meta<typeof StepsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
