import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconFolderComponent, IconMagnifyingGlassComponent } from '../../icons';
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
        IconFolderComponent,
        IconMagnifyingGlassComponent,
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
      <qui-story>
        <div qui-empty-state size="lg">
          <div qui-empty-state-icon>
            <i qui-icon name="folder" size="3xl"></i>
          </div>
          <h2 qui-empty-state-title>No projects yet</h2>
          <p qui-empty-state-description>Create your first project to get started.</p>
          <div qui-empty-state-action-group>
            <button qui-button>Create project</button>
          </div>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 480px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <div qui-empty-state size="sm">
            <div qui-empty-state-icon>
              <i qui-icon name="magnifying-glass" size="2xl"></i>
            </div>
            <h2 qui-empty-state-title>No results found</h2>
            <p qui-empty-state-description>We couldn't find anything matching "invoice #4521". Try a different search term.</p>
            <div qui-empty-state-action-group>
              <button qui-button variant="outline">Clear filters</button>
            </div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
