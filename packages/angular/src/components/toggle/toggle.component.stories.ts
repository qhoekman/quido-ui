import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconMoonComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { ToggleComponent, ToggleVariants } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Components/Actions/Toggle',
  component: ToggleComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: Array<ToggleVariants['variant']>('default', 'outline'),
    },
    size: {
      control: 'select',
      options: Array<ToggleVariants['size']>('sm', 'md', 'lg'),
    },
    selected: {
      control: 'boolean',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [IconMoonComponent, StoryComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ToggleComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    selected: false,
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <button qui-toggle [variant]="variant" [size]="size" [selected]="selected">Bold</button>
    </qui-story>`,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-2);">
          <button qui-toggle variant="outline" [selected]="true">Bold</button>
          <button qui-toggle variant="outline">Italic</button>
          <button qui-toggle variant="outline">Underline</button>
        </div>
      </qui-story>
    `,
  }),
};
