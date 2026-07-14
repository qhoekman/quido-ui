import StatisticComponent from '@/components/statistic/statistic.vue'
import StatisticValueComponent from '@/components/statistic/statistic-value.vue'
import StatisticLabelComponent from '@/components/statistic/statistic-label.vue'
import StatisticTrendComponent from '@/components/statistic/statistic-trend.vue'
import StatisticHelperTextComponent from '@/components/statistic/statistic-helper-text.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Statistic',
  component: StatisticComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: 'select',
      options: ['up', 'down', 'neutral']
    }
  },
  args: {
    size: 'md',
    variant: 'up'
  },
  render: (args) => ({
    components: {
      StatisticComponent,
      StatisticValueComponent,
      StatisticLabelComponent,
      StatisticTrendComponent,
      StatisticHelperTextComponent
    },
    setup() {
      return { args }
    },
    template: `
      <StatisticComponent :size="args.size">
        <StatisticLabelComponent>Active Users</StatisticLabelComponent>
        <StatisticValueComponent>2,338</StatisticValueComponent>
        <StatisticTrendComponent :variant="args.variant">
          <span v-if="args.variant === 'up'">+180</span>
          <span v-else-if="args.variant === 'down'">-180</span>
        </StatisticTrendComponent>
        <StatisticHelperTextComponent>New users this week</StatisticHelperTextComponent>
      </StatisticComponent>
    `
  })
} satisfies Meta<typeof StatisticComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
