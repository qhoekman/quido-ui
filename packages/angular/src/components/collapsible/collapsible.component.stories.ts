import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IconCaretSortComponent } from '../../icons';
import { ButtonComponent } from '../button/button.component';
import { CollapsibleTriggerComponent } from './collapsible-trigger.component';
import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleContentComponent } from './collapsible-content.component';
import { StoryComponent } from '../../system/components/story/story.component';
const meta: Meta<CollapsibleComponent> = {
  title: 'Components/Disclosure/Collapsible',
  component: CollapsibleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        CollapsibleTriggerComponent,
        CollapsibleContentComponent,
        IconCaretSortComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    expanded: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<CollapsibleComponent>;

export const Default: Story = {
  args: {
    expanded: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-collapsible #collapsible [expanded]="expanded" style="max-width: var(--breakpoint-xs);">
        <button qui-collapsible-trigger (click)="collapsible.toggle()">
          <span>Saved Recipes (3)</span>
          <i qui-icon name="caret-sort" size="sm"></i>
        </button>
        <ng-template #content>
          <div qui-collapsible-content>
            <p>Margherita Pizza</p>
            <p>Spaghetti Carbonara</p>
            <p>Chicken Tikka Masala</p>
          </div>
        </ng-template>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="max-width: 24rem; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Deploy Settings</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Configure how this project is deployed.</p>
        <div qui-collapsible #collapsible [expanded]="false">
          <button qui-collapsible-trigger (click)="collapsible.toggle()">
            <span>Show advanced options</span>
            <i qui-icon name="caret-sort" size="sm"></i>
          </button>
          <ng-template #content>
            <div qui-collapsible-content style="display: flex; flex-direction: column; gap: var(--spacing-2); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              <div>Build command: npm run build</div>
              <div>Output directory: dist</div>
              <div>Node version: 20.x</div>
            </div>
          </ng-template>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
