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
      <pui-story>
        <p>Press <kbd pui-kbd [variant]="variant" [size]="size">CMD</kbd> + <kbd pui-kbd [variant]="variant" [size]="size">K</kbd> to see the effect</p>
      </pui-story>
    `,
  }),
};
