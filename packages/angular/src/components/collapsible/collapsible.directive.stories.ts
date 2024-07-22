import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CollapsibleModule } from './collapsible.module';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Disclosure/Collapsible',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CollapsibleModule],
    }),
  ],
  args: {
    className: '',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <div quiCollapsible [className]="className" class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4" quiCollapsibleTrigger>
          <h4 class="text-sm font-semibold">Lorem ipsum...</h4>
          <button class="button-size-sm button-variant-ghost">Toggle</button>
        </div>
        <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Dolor sit amet.
        </div>
        <div quiCollapsibleContent class="space-y-2">
          <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            Consectetur.
          </div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            Adipisicing elit.
          </div>
        </div>
      </div>
    `,
  }),
};

export const Default: Story = {};

export default meta;
