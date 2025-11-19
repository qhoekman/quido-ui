import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ScrollAreaComponent } from './scroll-area.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ScrollAreaComponent> = {
  title: 'Components/Layout/Scroll Area',
  component: ScrollAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
  },
};
export default meta;

type Story = StoryObj<ScrollAreaComponent>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div style="width: 300px; height: 200px; border: 1px solid var(--color-border); border-radius: var(--border-radius-sm);">
        <pui-scroll-area [orientation]="orientation" style="height: 100%;">
          <div style="padding: 16px">
            <h4 style="margin-bottom: 16px; font-size: 14px; font-weight: 500;">Tags</h4>
            <div *ngFor="let item of [].constructor(50); let i = index" style="font-size: 14px;">
              Item {{ i + 1 }}
            </div>
          </div>
        </pui-scroll-area>
      </div>
    </pui-story>
    `,
  }),
};
