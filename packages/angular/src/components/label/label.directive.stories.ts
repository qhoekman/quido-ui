import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {
  ButtonDirective,
  ButtonProps,
} from '@/components/button/button.directive';
import { CommonModule } from '@angular/common';
import { LabelDirective } from '@/components/label/label.directive';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Data Manipulation/Label',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, LabelDirective],
    }),
  ],
  args: {
    content: 'Label',
  },
  render: (args: ButtonProps) => ({
    props: args,
    template: `
<label quiButton>
{{content}}
</label>`,
  }),
};

export const Default: Story = {};

export default meta;
