import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { TagDirective } from './tag.directive';
import { CommonModule } from '@angular/common';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Data Display/Tag',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TagDirective],
    }),
  ],
  args: {
    variant: 'default',
    size: 'md',
    className: '',
  },
  render: (args: any) => ({
    props: args,
    template: `<div quiTag
      [variant]="variant"
      [size]="size"
      [className]="className"
    >Tag</div>`,
  }),
};

export const Default: Story = {};

export default meta;
