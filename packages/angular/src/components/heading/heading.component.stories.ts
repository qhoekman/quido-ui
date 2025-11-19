import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { HeadingComponent, HeadingVariants } from './heading.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<HeadingComponent> = {
  title: 'Components/Typography/Heading',
  component: HeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<HeadingVariants['variant']>('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'unset'),
    },
    size: {
      control: 'select',
      options: Array<HeadingVariants['size']>('sm', 'md', 'lg', 'xl', '2xl', '3xl', 'unset'),
    },
    weight: {
      control: 'select',
      options: Array<HeadingVariants['weight']>('normal', 'medium', 'bold', 'unset'),
    },
    color: {
      control: 'select',
      options: Array<HeadingVariants['color']>('neutral', 'primary', 'secondary', 'unset'),
    },
  },
};
export default meta;

type Story = StoryObj<HeadingComponent>;

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
      <span pui-heading [variant]="variant" [size]="size" [weight]="weight" [color]="color">Sample Heading</span>
    </pui-story>
    `,
  }),
};
