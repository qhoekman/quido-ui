import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconBoxComponent, IconCheckComponent, IconThickArrowRightComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { TextComponent } from '../text/text.component';
import { TimelineBulletComponent } from './timeline-bullet.component';
import { TimelineConnectorComponent } from './timeline-connector.component';
import { TimelineContentComponent } from './timeline-content.component';
import { TimelineDescriptionComponent } from './timeline-description.component';
import { TimelineItemComponent } from './timeline-item.component';
import { TimelineSeparatorComponent } from './timeline-separator.component';
import { TimelineTitleComponent } from './timeline-title.component';
import { TimelineComponent } from './timeline.component';

type EnhancedTimelineComponent = TimelineComponent & {
  items: {
    title: string;
    description: string;
  }[];
};

const meta: Meta<EnhancedTimelineComponent> = {
  title: 'Components/Data Display/Timeline',
  component: TimelineComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TimelineComponent,
        TimelineItemComponent,
        TimelineConnectorComponent,
        TimelineContentComponent,
        TimelineTitleComponent,
        TimelineDescriptionComponent,
        TimelineBulletComponent,
        TimelineSeparatorComponent,
        TextComponent,
        IconThickArrowRightComponent,
        IconCheckComponent,
        IconBoxComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedTimelineComponent>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Product Shipped',
        description: '13th May 2021',
        icon: 'thick-arrow-right',
        additionalText: 'We shipped your product via FedEx and it should arrive within 3-5 business days.',
      },
      {
        title: 'Order Confirmed',
        description: '18th May 2021',
        icon: 'check',
      },
      {
        title: 'Order Delivered',
        description: '20th May 2021, 10:30am',
        icon: 'box',
      },
    ],
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <ul pui-timeline>
        <ng-container *ngFor="let item of items; let last = last">
          <li pui-timeline-item>
            <div pui-timeline-connector>
              <div pui-timeline-bullet>
                <i pui-icon name="thick-arrow-right" *ngIf="item.icon === 'thick-arrow-right'"></i>
                <i pui-icon name="check" *ngIf="item.icon === 'check'"></i>
                <i pui-icon name="box" *ngIf="item.icon === 'box'"></i>
              </div>
              <div pui-timeline-separator *ngIf="!last"></div>
            </div>
            <div pui-timeline-content>
              <h4 pui-timeline-title>{{ item.title }}</h4>
              <p pui-timeline-description>{{ item.description }}</p>
              <ng-container *ngIf="item.additionalText">
                <span pui-text size="sm">{{ item.additionalText }}</span>
              </ng-container>
            </div>
          </li>
        </ng-container>
      </ul>
    </pui-story>
    `,
  }),
};
