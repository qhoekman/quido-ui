import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import {
  IconFontBoldComponent,
  IconFontItalicComponent,
  IconFontStyleComponent,
} from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { ToggleGroupComponent } from './toggle-group.component';

const meta: Meta<ToggleGroupComponent> = {
  title: 'Components/Actions/Toggle Group',
  component: ToggleGroupComponent,
  argTypes: {
    strategy: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        ToggleComponent,
        IconFontBoldComponent,
        IconFontItalicComponent,
        IconFontStyleComponent,
        StoryComponent,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<ToggleGroupComponent>;

export const Default: Story = {
  args: {
    strategy: 'single',
    variant: 'default',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <div qui-toggle-group [strategy]="strategy" [variant]="variant" [size]="size">
        <button qui-toggle value="bold">
          <i qui-icon name="font-bold" size="lg"></i>
        </button>
        <button qui-toggle value="italic">
          <i qui-icon name="font-italic" size="lg"></i>
        </button>
        <button qui-toggle value="strikethrough">
          <i qui-icon name="font-style" size="lg"></i>
        </button>
      </div>
    </qui-story>`,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem;">
          <h3 style="margin: 0;">Sprint Backlog</h3>
          <div qui-toggle-group strategy="single" variant="outline" size="sm">
            <button qui-toggle value="list">List</button>
            <button qui-toggle value="board">Board</button>
            <button qui-toggle value="calendar">Calendar</button>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
