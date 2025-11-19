import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DraggableListComponent } from './draggable-list.component';
import { CommonModule } from '@angular/common';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedDraggableListComponent<T> = DraggableListComponent<T> & {
  items: T[];
};

const meta: Meta<EnhancedDraggableListComponent<unknown>> = {
  title: 'Components/Data Entry/Draggable List',
  component: DraggableListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, StoryComponent],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedDraggableListComponent<unknown>>;

export const Default: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
  render: (args) => ({
    props: args,
    template: `
      <div qui-story>
        <qui-draggable-list [items]="items" [itemTemplate]="itemTemplate" (reorder)="onReorder($event)">
          <ng-template #itemTemplate let-item let-index="index">
            {{ index + 1 }}. {{ item }}
          </ng-template>
        </qui-draggable-list>
      </div>
    `,
    methods: {
      onReorder: (newOrder: number) => {
        // eslint-disable-next-line no-console
        console.log('New order:', newOrder);
      },
    },
  }),
};
