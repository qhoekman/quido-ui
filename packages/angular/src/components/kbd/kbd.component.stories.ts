import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { KbdComponent, KbdVariants } from './kbd.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<KbdComponent> = {
  title: 'Components/Data Display/Kbd',
  component: KbdComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<KbdVariants['variant']>('default'),
    },
    size: {
      control: 'select',
      options: Array<KbdVariants['size']>('sm', 'md', 'lg'),
    },
  },
};
export default meta;

type Story = StoryObj<KbdComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <p>Press <kbd qui-kbd [variant]="variant" [size]="size">CMD</kbd> + <kbd qui-kbd [variant]="variant" [size]="size">K</kbd> to see the effect</p>
      </qui-story>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
          <p>Press <kbd qui-kbd size="sm">CMD</kbd> + <kbd qui-kbd size="sm">K</kbd></p>
          <p>Press <kbd qui-kbd size="md">CMD</kbd> + <kbd qui-kbd size="md">K</kbd></p>
          <p>Press <kbd qui-kbd size="lg">CMD</kbd> + <kbd qui-kbd size="lg">K</kbd></p>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 320px; display: flex; flex-direction: column; gap: var(--spacing-3);">
          <h3 style="margin: 0;">Keyboard Shortcuts</h3>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Open search</span>
            <span><kbd qui-kbd size="sm">CMD</kbd> + <kbd qui-kbd size="sm">K</kbd></span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Save changes</span>
            <span><kbd qui-kbd size="sm">CMD</kbd> + <kbd qui-kbd size="sm">S</kbd></span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>New tab</span>
            <span><kbd qui-kbd size="sm">CMD</kbd> + <kbd qui-kbd size="sm">T</kbd></span>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
