import { Meta, StoryFn } from '@storybook/react';

import { Badge } from './badge';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args}></Badge>;

export const Default = {
  render: Template,
  args: {
    children: 'Badge',
  },
};
