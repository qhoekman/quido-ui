import RadarChartComponent from '@/components/radar-chart/radar-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Radar Chart',
  component: RadarChartComponent,
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
          data: [186, 305, 237, 273, 209, 214]
        }
      ],
      chart: {
        type: 'radar',
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
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      colors: ['var(--color-sky-500)'],
      title: {
        text: 'Total Visitors for the Last 6 Months',
        align: 'left'
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    } as ApexOptions
  },
  render: (args) => ({
    components: { RadarChartComponent },
    setup() {
      return { args }
    },
    template: '<RadarChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof RadarChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: { RadarChartComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 640px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0;">Visitor Trend</h3>
        <p style="margin: var(--spacing-1) 0 var(--spacing-4); color: var(--color-muted-fg);">Total visitors by month across the last six months.</p>
        <RadarChartComponent v-bind="args" />
      </div>
    `
  })
}
