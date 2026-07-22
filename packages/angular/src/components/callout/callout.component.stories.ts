import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconInfoCircledComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { CalloutDescriptionComponent } from './callout-description.component';
import { CalloutIndicatorComponent } from './callout-indicator.component';
import { CalloutTitleComponent } from './callout-title.component';
import { CalloutComponent } from './callout.component';

const meta: Meta<CalloutComponent> = {
  title: 'Components/Feedback/Callout',
  component: CalloutComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CalloutTitleComponent,
        CalloutDescriptionComponent,
        CalloutIndicatorComponent,
        IconInfoCircledComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};
export default meta;

type Story = StoryObj<CalloutComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-callout [variant]="variant" style="max-width: var(--breakpoint-md);">
        <div qui-callout-indicator>
          <i qui-icon name="info-circled" size="lg"></i>
        </div>
        <h5 qui-callout-title>New features available</h5>
        <div qui-callout-description>
          <p>Check out the new dashboard widgets and dark mode support in this release.</p>
        </div>
      </div>
    </qui-story>
    `,
  }),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-callout [variant]="variant" style="max-width: var(--breakpoint-md);">
        <div qui-callout-indicator>
          <i qui-icon name="info-circled" size="lg"></i>
        </div>
        <h5 qui-callout-title>Payment failed</h5>
        <div qui-callout-description>
          <p>We couldn't process your payment. Please update your billing details to avoid service interruption.</p>
        </div>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="max-width: var(--breakpoint-md);">
        <h3 style="margin: 0 0 var(--spacing-4);">Billing</h3>
        <div qui-callout variant="destructive" style="margin-bottom: var(--spacing-4);">
          <div qui-callout-indicator>
            <i qui-icon name="info-circled" size="lg"></i>
          </div>
          <h5 qui-callout-title>Payment failed</h5>
          <div qui-callout-description>
            <p>We couldn't process your payment. Please update your billing details to avoid service interruption.</p>
          </div>
        </div>
        <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Update your payment method below to keep your subscription active.</p>
      </div>
    </qui-story>
    `,
  }),
};
