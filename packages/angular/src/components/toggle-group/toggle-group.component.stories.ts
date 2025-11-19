import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconFontBoldComponent, IconFontItalicComponent, IconFontStyleComponent } from '../../icons';
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
    template: `<pui-story>
      <div pui-toggle-group [strategy]="strategy" [variant]="variant" [size]="size">
        <button pui-toggle value="bold">
          <i pui-icon name="font-bold" size="lg"></i>
        </button>
        <button pui-toggle value="italic">
          <i pui-icon name="font-italic" size="lg"></i>
        </button>
        <button pui-toggle value="strikethrough">
          <i pui-icon name="font-style" size="lg"></i>
        </button>
      </div>
    </pui-story>`,
  }),
};
