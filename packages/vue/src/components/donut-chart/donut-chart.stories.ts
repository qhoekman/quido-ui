import DonutChartComponent from '@/components/donut-chart/donut-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Donut Chart',
  component: DonutChartComponent,
  argTypes: {
    chartOptions: {
      control: 'object'
    }
  },
  args: {
    chartOptions: {
      series: [186, 305, 237, 173, 209],
      chart: {
        type: 'donut',
        height: 350,
        background: 'var(--color-chart)',
        foreColor: 'var(--color-chart-fg)',
        toolbar: {
          show: true,
          autoSelected: 'pan',
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      labels: ['January', 'February', 'March', 'April', 'May'],
      colors: [
        'var(--color-sky-500)',
        'var(--color-red-500)',
        'var(--color-green-500)',
        'var(--color-yellow-500)',
        'var(--color-purple-500)'
      ],
      title: {
        text: 'Monthly Visitors',
        align: 'left'
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    } as ApexOptions
  },
  render: (args) => ({
    components: { DonutChartComponent },
    setup() {
      return { args }
    },
    template: '<DonutChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof DonutChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
