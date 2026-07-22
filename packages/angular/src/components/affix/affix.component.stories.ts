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

export const Top: Story = {
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
      <div qui-skeleton style="width: 100%; height: 120vh;"></div>
    `,
  }),
};

export const Bottom: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `
      <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      <div qui-affix [offsetBottom]="0">
        <button qui-button>
          Affix bottom
        </button>
      </div>
      <div qui-skeleton style="width: 100%; height: 120vh;"></div>
    `,
  }),
};

export const Composition: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => ({
    template: `
      <div style="padding: var(--spacing-4);">
        <h3 style="margin: 0 0 var(--spacing-4);">Order #4471</h3>
        <div qui-affix [offsetTop]="0" style="display: block;">
          <div style="padding: var(--spacing-3) var(--spacing-4); background: var(--color-card); border-bottom: var(--border-width-default) solid var(--color-border); font-weight: var(--font-weight-semibold);">
            Shipping details
          </div>
        </div>
        <div style="padding: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
          <p>123 Market Street, Suite 400</p>
          <p>San Francisco, CA 94103</p>
          <div qui-skeleton style="width: 100%; height: 120vh;"></div>
        </div>
      </div>
    `,
  }),
};
