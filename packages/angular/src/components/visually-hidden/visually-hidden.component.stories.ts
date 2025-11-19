import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { VisuallyHiddenComponent } from './visually-hidden.component';
import { ButtonComponent } from '../button/button.component';
import { StoryComponent } from '../../system/components/story/story.component';

export default {
  title: 'Components/Accessibility/Visually Hidden',
  component: VisuallyHiddenComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, StoryComponent],
    }),
  ],
} as Meta;

type Story = StoryObj<VisuallyHiddenComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <span pui-sr-only>
        This text is visually hidden but accessible to screen readers.
      </span>
      <button pui-button>Visible Button</button>
    </pui-story>
  `,
  }),
};
