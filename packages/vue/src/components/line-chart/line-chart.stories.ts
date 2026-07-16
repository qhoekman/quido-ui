import LineChartComponent from '@/components/line-chart/line-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Line Chart',
  component: LineChartComponent,
  argTypes: {
    chartOptions: {
      control: 'object'
    }
  },
  args: {
    chartOptions: {
      series: [
        {
          name: 'Desktop',
          data: [186, 305, 237, 73, 209, 214]
        }
      ],
      chart: {
        type: 'line',
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
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Monthly Data',
        align: 'left'
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    } as ApexOptions
  },
  render: (args) => ({
    components: { LineChartComponent },
    setup() {
      return { args }
    },
    template: '<LineChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof LineChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
