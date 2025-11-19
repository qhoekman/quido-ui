import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { TextComponent, TextVariants } from './text.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<TextComponent> = {
  title: 'Components/Typography/Text',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<TextVariants['variant']>('body', 'caption', 'label', 'title', 'subtitle', 'unset'),
    },
    size: {
      control: 'select',
      options: Array<TextVariants['size']>(
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        'unset',
      ),
    },
    weight: {
      control: 'select',
      options: Array<TextVariants['weight']>('normal', 'medium', 'bold', 'unset'),
    },
    color: {
      control: 'select',
      options: Array<TextVariants['color']>(
        'neutral',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'muted',
        'unset',
      ),
    },
  },
};
export default meta;

type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    variant: 'unset',
    size: 'unset',
    weight: 'unset',
    color: 'unset',
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <span pui-text [variant]="variant" [size]="size" [weight]="weight" [color]="color">Sample Text</span>
    </pui-story>
    `,
  }),
};
