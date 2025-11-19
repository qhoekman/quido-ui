import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import {
  IconBoxComponent,
  IconCheckComponent,
  IconThickArrowRightComponent,
} from '../../icons';
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
        additionalText:
          'We shipped your product via FedEx and it should arrive within 3-5 business days.',
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
    <qui-story>
      <ul qui-timeline>
        <ng-container *ngFor="let item of items; let last = last">
          <li qui-timeline-item>
            <div qui-timeline-connector>
              <div qui-timeline-bullet>
                <i qui-icon name="thick-arrow-right" *ngIf="item.icon === 'thick-arrow-right'"></i>
                <i qui-icon name="check" *ngIf="item.icon === 'check'"></i>
                <i qui-icon name="box" *ngIf="item.icon === 'box'"></i>
              </div>
              <div qui-timeline-separator *ngIf="!last"></div>
            </div>
            <div qui-timeline-content>
              <h4 qui-timeline-title>{{ item.title }}</h4>
              <p qui-timeline-description>{{ item.description }}</p>
              <ng-container *ngIf="item.additionalText">
                <span qui-text size="sm">{{ item.additionalText }}</span>
              </ng-container>
            </div>
          </li>
        </ng-container>
      </ul>
    </qui-story>
    `,
  }),
};
