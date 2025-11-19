import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from '../label/label.component';
import { StackComponent } from '../stack/stack.component';
import { TextareaComponent } from './textarea.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedTextareaComponent = TextareaComponent & {
  placeholder: string;
  disabled: boolean;
};

const meta: Meta<EnhancedTextareaComponent> = {
  title: 'Components/Data Entry/Textarea',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelComponent, StackComponent, StoryComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedTextareaComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack direction="column" gap="sm" style="max-width: var(--breakpoint-xs);">
        <label qui-label [size]="size">Textarea</label>
        <textarea qui-textarea [size]="size" [placeholder]="placeholder" [disabled]="disabled"></textarea>
      </div>
    </qui-story>
    `,
  }),
};
