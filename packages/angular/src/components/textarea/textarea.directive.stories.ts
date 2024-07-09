import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { TextareaDirective } from './textarea.directive';
import { CommonModule } from '@angular/common';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Data Manipulation/Textarea',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TextareaDirective],
    }),
  ],
  args: {
    placeholder: 'Enter your message',
    value: '',
    className: '',
    disabled: false,
  },
  render: (args: any) => ({
    props: args,
    template: `<div class="max-w-xs"><textarea quiTextarea
      [placeholder]="placeholder"
      [value]="value"
      [className]="className"
      [disabled]="disabled"
    ></textarea></div>`,
  }),
};

export const Default: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam lacinia, nunc nisl aliquet nunc, quis aliquam nisl.',
  },
};

export default meta;
