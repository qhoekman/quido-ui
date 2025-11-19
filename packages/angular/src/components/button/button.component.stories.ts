import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent, ButtonVariants } from './button.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<ButtonVariants['variant']>(
        'primary',
        'secondary',
        'destructive',
        'ghost',
        'outline',
        'link'
      ),
    },
    size: {
      control: 'select',
      options: Array<ButtonVariants['size']>('sm', 'md', 'lg', 'icon'),
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story><button qui-button [variant]="variant" [size]="size" [loading]="loading" [disabled]="disabled">Button</button></qui-story>`,
  }),
};
