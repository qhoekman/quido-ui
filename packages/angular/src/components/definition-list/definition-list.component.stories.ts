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
    <pui-story>
      <dl pui-definition-list>
        <div pui-definition-list-item>
          <dt pui-definition-term>
            Full name
          </dt>
          <dd pui-definition-description>
            John Doe
          </dd>
        </div>
        <div pui-definition-list-item>
          <dt pui-definition-term>
            Phone number
          </dt>
          <dd pui-definition-description>
            +1 (555) 123-4567
          </dd>
        </div>
        <div pui-definition-list-item>
          <dt pui-definition-term>
            Email address
          </dt>
          <dd pui-definition-description>
            <a pui-link href="mailto:johndoe@example.com">
              johndoe&#64;example.com
            </a>
            </dd>
        </div>
      </dl>
    </pui-story>
  `,
  }),
};
