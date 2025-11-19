import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

const meta: Meta<ChartComponent> = {
  title: 'Components/Charts/Pie Chart',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [NgApexchartsModule],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<ChartComponent>;

export const Default: Story = {
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
            reset: false,
          },
        },
      },
      labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
      colors: [
        'var(--color-purple-500)',
        'var(--color-red-500)',
        'var(--color-green-500)',
        'var(--color-blue-500)',
        'var(--color-yellow-500)',
      ],
      title: {
        text: 'Browser Market Share',
        align: 'left',
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [labels]="chartOptions.labels"
      [colors]="chartOptions.colors"
      [title]="chartOptions.title"
      [tooltip]="chartOptions.tooltip"
    ></apx-chart>
    `,
  }),
};
