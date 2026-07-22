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
    <qui-story>
      <span qui-sr-only>
        This text is visually hidden but accessible to screen readers.
      </span>
      <button qui-button>Visible Button</button>
    </qui-story>
  `,
  }),
};

export const Composition: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div style="display: flex; gap: var(--spacing-2);">
        <button qui-button>
          <span aria-hidden="true">🔍</span>
          <span qui-sr-only>Search</span>
        </button>
        <button qui-button>
          <span aria-hidden="true">🔔</span>
          <span qui-sr-only>Notifications</span>
        </button>
        <button qui-button>
          <span aria-hidden="true">⚙️</span>
          <span qui-sr-only>Settings</span>
        </button>
      </div>
    </qui-story>
  `,
  }),
};
