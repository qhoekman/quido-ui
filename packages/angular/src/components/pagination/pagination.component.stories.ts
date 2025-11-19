import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { PaginationContentComponent } from './pagination-content.component';
import { PaginationEllipsisComponent } from './pagination-ellipsis.component';
import { PaginationItemComponent } from './pagination-item.component';
import { PaginationLinkComponent } from './pagination-link.component';
import { PaginationNextComponent } from './pagination-next.component';
import { PaginationPreviousComponent } from './pagination-previous.component';
import { PaginationComponent } from './pagination.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<PaginationComponent> = {
  title: 'Components/Navigation/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        PaginationContentComponent,
        PaginationItemComponent,
        PaginationLinkComponent,
        PaginationPreviousComponent,
        PaginationNextComponent,
        PaginationEllipsisComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<PaginationComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
      <nav pui-pagination aria-label="pagination">
        <ul pui-pagination-content>
          <li pui-pagination-item>
            <a pui-pagination-previous></a>
          </li>
          <li pui-pagination-item>
            <a pui-pagination-link [isActive]="true">1</a>
          </li>
          <li pui-pagination-item>
            <a pui-pagination-link>2</a>
          </li>
          <li pui-pagination-item>
            <span pui-pagination-ellipsis></span>
          </li>
          <li pui-pagination-item>
            <a pui-pagination-link>10</a>
          </li>
          <li pui-pagination-item>
            <a pui-pagination-next></a>
          </li>
        </ul>
      </nav>
    </pui-story>
    `,
  }),
};
