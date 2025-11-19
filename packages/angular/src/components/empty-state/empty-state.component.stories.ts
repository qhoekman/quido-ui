import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconExclamationTriangleComponent } from '../../icons';
import { ButtonComponent } from '../button/button.component';
import { EmptyStateActionGroupComponent } from './empty-state-action-group.component';
import { EmptyStateDescriptionComponent } from './empty-state-description.component';
import { EmptyStateIconComponent } from './empty-state-icon.component';
import { EmptyStateTitleComponent } from './empty-state-title.component';
import { EmptyStateComponent } from './empty-state.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<EmptyStateComponent> = {
  title: 'Components/Data Display/Empty State',
  component: EmptyStateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        EmptyStateComponent,
        EmptyStateIconComponent,
        EmptyStateTitleComponent,
        EmptyStateDescriptionComponent,
        EmptyStateActionGroupComponent,
        ButtonComponent,
        IconExclamationTriangleComponent,
        StoryComponent,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<EmptyStateComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <div pui-empty-state size="lg">
          <div pui-empty-state-icon>
            <i pui-icon name="exclamation-triangle" size="3xl"></i>
          </div>
          <h2 pui-empty-state-title>Empty State Title</h2>
          <p pui-empty-state-description>This is a description of the empty state.</p>
          <div pui-empty-state-action-group>
            <button pui-button>Action</button>
          </div>
        </div>
      </pui-story>
    `,
  }),
};
