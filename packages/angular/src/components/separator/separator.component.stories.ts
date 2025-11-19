import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SeparatorComponent } from './separator.component';

const meta: Meta<SeparatorComponent> = {
  title: 'Components/Layout/Separator',
  component: SeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};
export default meta;

type Story = StoryObj<SeparatorComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; justify-content: center; height: 100px;">
        <hr qui-separator [orientation]="orientation" />
      </div>
    `,
  }),
  args: {
    orientation: 'horizontal',
  },
};
