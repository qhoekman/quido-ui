import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from './button-group.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/Actions/Button Group',
  component: ButtonGroupComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, StoryComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ButtonGroupComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-button-group>
          <button qui-button variant="outline">Bold</button>
          <button qui-button variant="outline">Italic</button>
          <button qui-button variant="outline">Underline</button>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-4); width: 100%;">
          <h2 style="margin: 0;">Sprint Backlog</h2>
          <div qui-button-group>
            <button qui-button variant="outline">List</button>
            <button qui-button variant="outline">Board</button>
            <button qui-button variant="outline">Calendar</button>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
