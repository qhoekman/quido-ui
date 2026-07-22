import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconPlusComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { FloatingActionButtonComponent } from './floating-action-button.component';

const meta: Meta<FloatingActionButtonComponent> = {
  title: 'Components/Actions/Floating Action Button',
  component: FloatingActionButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [IconPlusComponent, StoryComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<FloatingActionButtonComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<qui-story>
      <button qui-fab [size]="size">
        <i qui-icon name="plus" size="lg"></i>
      </button>
    </qui-story>`,
  }),
};

export const Composition: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 400px; width: 100%; background-color: var(--color-neutral-50); border-radius: var(--border-radius-md); padding: var(--spacing-6);">
        <h2 style="margin-top: 0;">Contacts</h2>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--spacing-2);">
          <li>Ava Thompson</li>
          <li>Marcus Lee</li>
          <li>Priya Nair</li>
        </ul>
        <button qui-fab [size]="size">
          <i qui-icon name="plus" size="lg"></i>
        </button>
      </div>
    `,
  }),
};
