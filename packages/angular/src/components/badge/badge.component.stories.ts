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
      options: Array<BadgeVariants['variant']>(
        'primary',
        'secondary',
        'destructive',
        'outline'
      ),
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
    variant: 'primary',
    size: 'md',
    content: '3',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <div>Notifications<div qui-badge [variant]="variant" [size]="size">{{content}}</div></div>
    </qui-story>`,
  }),
};

export const WithText: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    content: '99+',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <div>Messages<div qui-badge [variant]="variant" [size]="size">{{content}}</div></div>
    </qui-story>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); align-items: center;">
          <div qui-badge size="sm">5</div>
          <div qui-badge size="md">12</div>
          <div qui-badge size="lg">42</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); align-items: center;">
          <div qui-badge variant="primary">Primary</div>
          <div qui-badge variant="secondary">Secondary</div>
          <div qui-badge variant="destructive">Destructive</div>
          <div qui-badge variant="outline">Outline</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-2); width: 200px;">
          <div style="display: flex; justify-content: space-between;">
            <span>Inbox</span>
            <div qui-badge>12</div>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Spam</span>
            <div qui-badge variant="destructive">3</div>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Archived</span>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
