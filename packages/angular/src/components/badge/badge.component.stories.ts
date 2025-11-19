import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { BadgeComponent, BadgeVariants } from './badge.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedBadgeComponent = BadgeComponent & {
  content: string;
};

const meta: Meta<EnhancedBadgeComponent> = {
  title: 'Components/Data Display/Badge',
  component: BadgeComponent,
  decorators: [moduleMetadata({ imports: [StoryComponent] })],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<BadgeVariants['variant']>('primary', 'secondary', 'destructive', 'outline'),
    },
    size: {
      control: 'select',
      options: Array<BadgeVariants['size']>('xs', 'sm', 'md', 'lg'),
    },
    rounded: {
      control: 'select',
      options: Array<BadgeVariants['rounded']>('default', 'full'),
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedBadgeComponent>;

export const Default: Story = {
  args: {
    variant: 'destructive',
    size: 'lg',
    rounded: 'full',
    content: '9+',
  },
  render: (args) => ({
    props: args,
    template: `<pui-story>
      <div pui-badge [variant]="variant" [size]="size" [rounded]="rounded">{{content}}</div>
    </pui-story>`,
  }),
};
