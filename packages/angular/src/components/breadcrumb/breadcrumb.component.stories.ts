import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconChevronRightComponent } from '../../icons';
import { BreadcrumbEllipsisComponent } from './breadcrumb-ellipsis.component';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';
import { BreadcrumbLinkComponent } from './breadcrumb-link.component';
import { BreadcrumbListComponent } from './breadcrumb-list.component';
import { BreadcrumbPageComponent } from './breadcrumb-page.component';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<BreadcrumbComponent> = {
  title: 'Components/Navigation/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BreadcrumbListComponent,
        BreadcrumbItemComponent,
        BreadcrumbSeparatorComponent,
        BreadcrumbLinkComponent,
        BreadcrumbPageComponent,
        BreadcrumbEllipsisComponent,
        IconChevronRightComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<BreadcrumbComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <nav qui-breadcrumb aria-label="breadcrumb">
        <ol qui-breadcrumb-list>
          <li qui-breadcrumb-item>
             <span qui-breadcrumb-ellipsis></span>
          </li>
          <li qui-breadcrumb-separator></li>
          <li qui-breadcrumb-item>
            <a qui-breadcrumb-link href="#">Library</a>
          </li>
          <li qui-breadcrumb-separator></li>
          <li qui-breadcrumb-item>
            <a qui-breadcrumb-link href="#">Media</a>
          </li>
          <li qui-breadcrumb-separator>
            <i qui-icon name="chevron-right"></i>
          </li>
          <li qui-breadcrumb-item>
            <span qui-breadcrumb-page>Videos</span>
          </li>
        </ol>
      </nav>
    </qui-story>
    `,
  }),
};
