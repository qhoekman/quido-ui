import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CountdownItemComponent } from './countdown-item.component';
import { CountdownComponent } from './countdown.component';
import { StoryComponent } from '../../system/components/story/story.component';

export default {
  title: 'Components/Data Display/Countdown',
  component: CountdownComponent,
  decorators: [
    moduleMetadata({
      imports: [CountdownItemComponent, StoryComponent],
    }),
  ],
} as Meta;

type Story = StoryObj<CountdownComponent>;

export const Default: Story = {
  args: {},
  render: (args) => {
    // 1 day from now
    const date = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000);
    return {
      props: {
        ...args,
        date,
      },
      template: `<qui-story>
        <div qui-countdown #countdown [date]="date">
          <span qui-countdown-item>
            {{ countdown.hours }}
          </span>:
          <span qui-countdown-item>
          {{ countdown.minutes }}
          </span>:
          <span qui-countdown-item>
            {{ countdown.seconds }}
          </span>
        </div>
      </qui-story>`,
    };
  },
};

export const Composition: Story = {
  render: () => {
    const date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
    return {
      props: { date },
      template: `<qui-story>
        <div style="max-width: 360px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); text-align: center;">
          <h3 style="margin: 0 0 var(--spacing-1);">Summer Sale Ends In</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Get 30% off all annual plans before the timer runs out.</p>
          <div qui-countdown #countdown [date]="date">
            <span qui-countdown-item>{{ countdown.hours }}</span>:
            <span qui-countdown-item>{{ countdown.minutes }}</span>:
            <span qui-countdown-item>{{ countdown.seconds }}</span>
          </div>
        </div>
      </qui-story>`,
    };
  },
};

export const WithCustomDate: Story = {
  render: () => {
    const date = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
    return {
      props: { date },
      template: `<qui-story>
        <div qui-countdown #countdown [date]="date">
          <span qui-countdown-item>{{ countdown.hours }}</span>:
          <span qui-countdown-item>{{ countdown.minutes }}</span>:
          <span qui-countdown-item>{{ countdown.seconds }}</span>
        </div>
      </qui-story>`,
    };
  },
};

export const LongCountdown: Story = {
  render: () => {
    const date = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
    return {
      props: { date },
      template: `<qui-story>
        <div qui-countdown #countdown [date]="date">
          <span qui-countdown-item>{{ countdown.years }}</span>y
          <span qui-countdown-item>{{ countdown.months }}</span>m
          <span qui-countdown-item>{{ countdown.days }}</span>d
          <span qui-countdown-item>{{ countdown.hours }}</span>h
          <span qui-countdown-item>{{ countdown.minutes }}</span>m
          <span qui-countdown-item>{{ countdown.seconds }}</span>s
        </div>
      </qui-story>`,
    };
  },
};
