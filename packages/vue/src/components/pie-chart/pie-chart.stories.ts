import PieChartComponent from '@/components/pie-chart/pie-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Pie Chart',
  component: PieChartComponent,
  argTypes: {
    chartOptions: {
      control: 'object'
    }
  },
  args: {
    chartOptions: {
      series: [275, 200, 187, 173, 90],
      chart: {
        type: 'pie',
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
      labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
      colors: [
        'var(--color-purple-500)',
        'var(--color-red-500)',
        'var(--color-green-500)',
        'var(--color-blue-500)',
        'var(--color-yellow-500)'
      ],
      title: {
        text: 'Browser Market Share',
        align: 'left'
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    } as ApexOptions
  },
  render: (args) => ({
    components: { PieChartComponent },
    setup() {
      return { args }
    },
    template: '<PieChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof PieChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: { PieChartComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 640px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0;">Browser Usage</h3>
        <p style="margin: var(--spacing-1) 0 var(--spacing-4); color: var(--color-muted-fg);">Share of site visits by browser over the last 30 days.</p>
        <PieChartComponent v-bind="args" />
      </div>
    `
  })
}
