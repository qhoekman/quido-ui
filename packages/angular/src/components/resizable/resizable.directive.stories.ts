import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ResizableDirective } from './resizable.directive';
import { StoryComponent } from '../../system/components/story/story.component';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Layout/Resizable',
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
      declarations: [ResizableDirective],
    }),
  ],
};
export default meta;

export const Default: Story = {
  render: () => ({
    template: `
    <pui-story>
      <div puiResizable style="width: 200px; height: 200px; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: center;">
        Resizable Box
      </div>
    </pui-story>
    `,
  }),
};
