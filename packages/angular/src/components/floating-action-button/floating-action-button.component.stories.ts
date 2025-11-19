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
    template: `<pui-story>
      <button pui-fab [size]="size">
        <i pui-icon name="plus" size="lg"></i>
      </button>
    </pui-story>`,
  }),
};
