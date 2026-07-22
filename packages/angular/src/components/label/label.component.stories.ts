import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from './label.component';
import { InputComponent } from '../input/input.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<LabelComponent> = {
  title: 'Components/Data Entry/Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent, InputComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};
export default meta;

type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <label qui-label [size]="size">Full name</label>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-1-5); max-width: 16rem;">
          <label qui-label for="full-name">Full name</label>
          <input qui-input id="full-name" placeholder="Jane Doe" />
        </div>
      </qui-story>
    `,
  }),
};
