import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

const meta: Meta<ChartComponent> = {
  title: 'Components/Charts/Radar Chart',
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
      series: [
        {
          name: 'Desktop',
          data: [186, 305, 237, 273, 209, 214],
        },
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
            reset: false,
          },
        },
      },
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      colors: ['var(--color-sky-500)'],
      title: {
        text: 'Total Visitors for the Last 6 Months',
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
