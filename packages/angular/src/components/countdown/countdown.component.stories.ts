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
      template: `<pui-story>
        <div pui-countdown #countdown [date]="date">
          <span pui-countdown-item>
            {{ countdown.hours }}
          </span>:
          <span pui-countdown-item>
          {{ countdown.minutes }}
          </span>:
          <span pui-countdown-item>
            {{ countdown.seconds }}
          </span>
        </div>
      </pui-story>`,
    };
  },
};
