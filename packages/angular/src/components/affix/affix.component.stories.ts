import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { AffixComponent } from './affix.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';

const meta: Meta<AffixComponent> = {
  title: 'Components/Layout/Affix',
  component: AffixComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AffixComponent,
        SkeletonComponent,
        ButtonGroupComponent,
        ButtonComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any controls for the dropdown menu component if needed
  },
};
export default meta;

type Story = StoryObj<AffixComponent>;

export const Default: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `
      <div qui-skeleton style="width: 100%; height: 120vh;"></div>

        <div qui-affix [offsetTop]="0">
          <button qui-button>
            Affix top
          </button>

        </div>
        <div qui-affix [offsetBottom]="0">
          <button qui-button>
            Affix bottom
          </button>
        </div>

      <div qui-skeleton style="width: 100%; height: 120vh;"></div>
    `,
  }),
};
