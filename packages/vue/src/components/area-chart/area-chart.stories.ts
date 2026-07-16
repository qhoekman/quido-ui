import AreaChartComponent from '@/components/area-chart/area-chart.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ApexOptions } from 'apexcharts'

const meta = {
  title: 'Components/Charts/Area Chart',
  component: AreaChartComponent,
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
        },
        {
          name: 'Mobile',
          data: [80, 200, 120, 190, 130, 140]
        }
      ],
      chart: {
        type: 'area',
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
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Monthly Data',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      markers: {
        size: 0
      }
    } as ApexOptions
  },
  render: (args) => ({
    components: { AreaChartComponent },
    setup() {
      return { args }
    },
    template: '<AreaChartComponent v-bind="args" />'
  })
} satisfies Meta<typeof AreaChartComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
