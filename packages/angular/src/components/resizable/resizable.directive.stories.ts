import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ResizableDirective } from './resizable.directive';
import { StoryComponent } from '../../system/components/story/story.component';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Layout/Resizable',
  decorators: [
    moduleMetadata({
      imports: [StoryComponent, ResizableDirective],
    }),
  ],
};
export default meta;

export const Default: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div puiResizable style="width: 200px; height: 200px; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: center;">
        Resizable Box
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
        <h4 style="margin: 0; font-size: var(--font-size-sm);">Notes panel</h4>
        <div puiResizable style="width: 260px; height: 160px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); padding: var(--spacing-4); box-sizing: border-box;">
          Drag the corner to resize this panel.
        </div>
      </div>
    </qui-story>
    `,
  }),
};
