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
    <pui-story>
      <nav pui-breadcrumb aria-label="breadcrumb">
        <ol pui-breadcrumb-list>
          <li pui-breadcrumb-item>
             <span pui-breadcrumb-ellipsis></span>
          </li>
          <li pui-breadcrumb-separator></li>
          <li pui-breadcrumb-item>
            <a pui-breadcrumb-link href="#">Library</a>
          </li>
          <li pui-breadcrumb-separator></li>
          <li pui-breadcrumb-item>
            <a pui-breadcrumb-link href="#">Media</a>
          </li>
          <li pui-breadcrumb-separator>
            <i pui-icon name="chevron-right"></i>
          </li>
          <li pui-breadcrumb-item>
            <span pui-breadcrumb-page>Videos</span>
          </li>
        </ol>
      </nav>
    </pui-story>
    `,
  }),
};
