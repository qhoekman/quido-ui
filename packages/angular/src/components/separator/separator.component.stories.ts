import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SeparatorComponent } from './separator.component';

const meta: Meta<SeparatorComponent> = {
  title: 'Components/Layout/Separator',
  component: SeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};
export default meta;

type Story = StoryObj<SeparatorComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 260px;">
        <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Account</h4>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Manage your profile and preferences.</p>
        <hr qui-separator [orientation]="orientation" style="margin: var(--spacing-4) 0;" />
        <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Notifications</h4>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Choose what you want to be notified about.</p>
      </div>
    `,
  }),
  args: {
    orientation: 'horizontal',
  },
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-3); height: 24px;">
        <span style="font-size: var(--font-size-sm);">Bold</span>
        <hr qui-separator orientation="vertical" />
        <span style="font-size: var(--font-size-sm);">Italic</span>
        <hr qui-separator orientation="vertical" />
        <span style="font-size: var(--font-size-sm);">Underline</span>
      </div>
    `,
  }),
};
