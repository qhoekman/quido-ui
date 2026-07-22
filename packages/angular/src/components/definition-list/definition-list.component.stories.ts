import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DefinitionDescriptionComponent } from './definition-description.component';
import { DefinitionListItemComponent } from './definition-list-item.component';
import { DefinitionListComponent } from './definition-list.component';
import { DefinitionTermComponent } from './definition-term.component';
import { StoryComponent } from '../../system/components/story/story.component';
import { LinkComponent } from '../link/link.component';

export default {
  title: 'Components/Data Display/Definition List',
  component: DefinitionListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DefinitionListComponent,
        DefinitionListItemComponent,
        DefinitionTermComponent,
        DefinitionDescriptionComponent,
        StoryComponent,
        LinkComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<DefinitionListComponent>;

export const Default: Story = {
  render: () => ({
    template: `
    <qui-story>
      <dl qui-definition-list>
        <div qui-definition-list-item>
          <dt qui-definition-term>
            Full name
          </dt>
          <dd qui-definition-description>
            John Doe
          </dd>
        </div>
        <div qui-definition-list-item>
          <dt qui-definition-term>
            Phone number
          </dt>
          <dd qui-definition-description>
            +1 (555) 123-4567
          </dd>
        </div>
        <div qui-definition-list-item>
          <dt qui-definition-term>
            Email address
          </dt>
          <dd qui-definition-description>
            <a qui-link href="mailto:johndoe@example.com">
              johndoe&#64;example.com
            </a>
            </dd>
        </div>
      </dl>
    </qui-story>
  `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="max-width: var(--spacing-2xl); padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); box-sizing: border-box;">
        <h4 style="margin: 0 0 var(--spacing-4);">Order #4471</h4>
        <dl qui-definition-list>
          <div qui-definition-list-item>
            <dt qui-definition-term>Order date</dt>
            <dd qui-definition-description>June 12, 2026</dd>
          </div>
          <div qui-definition-list-item>
            <dt qui-definition-term>Status</dt>
            <dd qui-definition-description>Shipped</dd>
          </div>
          <div qui-definition-list-item>
            <dt qui-definition-term>Total</dt>
            <dd qui-definition-description>$128.50</dd>
          </div>
        </dl>
      </div>
    </qui-story>
  `,
  }),
};
