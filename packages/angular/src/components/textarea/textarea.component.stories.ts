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
    placeholder: 'Enter your message',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack direction="column" gap="sm" style="max-width: var(--breakpoint-xs);">
        <label qui-label [size]="size">Message</label>
        <textarea qui-textarea [size]="size" [placeholder]="placeholder" [disabled]="disabled">The new dashboard is much easier to navigate, but I'd love to see dark mode support added soon.</textarea>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: var(--spacing-64);">
          <label qui-label for="bio">Bio</label>
          <textarea qui-textarea id="bio" placeholder="Tell us a little about yourself..." rows="4" style="margin-top: var(--spacing-1-5); width: 100%;"></textarea>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">This appears on your public profile. Max 200 characters.</p>
        </div>
      </qui-story>
    `,
  }),
};
