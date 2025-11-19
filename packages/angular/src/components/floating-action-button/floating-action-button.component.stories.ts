import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconPlusComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { FloatingActionButtonComponent } from './floating-action-button.component';

const meta: Meta<FloatingActionButtonComponent> = {
  title: 'Components/Actions/Floating Action Button',
  component: FloatingActionButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [IconPlusComponent, StoryComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<FloatingActionButtonComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <button qui-fab [size]="size">
        <i qui-icon name="plus" size="lg"></i>
      </button>
    </qui-story>`,
  }),
};
