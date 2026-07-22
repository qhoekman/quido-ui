import ScatterChartComponent from '@/components/scatter-chart/scatter-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Scatter Chart',
  component: ScatterChartComponent,
  argTypes: {
    chartOptions: {
      control: 'object'
    }
  },
  args: {
    chartOptions: {
      series: [
        {
          name: 'Electronics',
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
          ],
        },
        {
          name: 'Home Goods',
          data: [
            [30.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
          ],
        },
      ],
      chart: {
        type: 'scatter',
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
            pan: true,
            reset: true,
          },
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val: string) {
            return parseFloat(val).toFixed(1)
          },
        },
      },
      yaxis: {
        tickAmount: 7,
      },
      title: {
        text: 'Price vs. Rating by Category',
        align: 'left',
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
    } as ApexOptions
  },
  render: (args) => ({
    components: { ScatterChartComponent },
    setup() {
      return { args }
    },
    template: '<ScatterChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof ScatterChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: { ScatterChartComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 640px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0;">Price vs. Rating</h3>
        <p style="margin: var(--spacing-1) 0 var(--spacing-4); color: var(--color-muted-fg);">Product price plotted against customer rating, by category.</p>
        <ScatterChartComponent v-bind="args" />
      </div>
    `
  })
}
