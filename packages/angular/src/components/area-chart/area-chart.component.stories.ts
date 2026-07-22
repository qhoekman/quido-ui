import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { background } from 'storybook/theming';

const meta: Meta<ChartComponent> = {
  title: 'Components/Charts/Area Chart',
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
          data: [186, 305, 237, 73, 209, 214],
        },
        {
          name: 'Mobile',
          data: [80, 200, 120, 190, 130, 140],
        },
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
            reset: false,
          },
        },
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Monthly Data',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      markers: {
        size: 0,
      },
    },
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [xaxis]="chartOptions.xaxis"
      [dataLabels]="chartOptions.dataLabels"
      [stroke]="chartOptions.stroke"
      [title]="chartOptions.title"
      [fill]="chartOptions.fill"
      [tooltip]="chartOptions.tooltip"
      [markers]="chartOptions.markers"
    ></apx-chart>
    `,
  }),
};

export const Composition: Story = {
  args: {
    chartOptions: {
      series: [
        {
          name: 'Desktop',
          data: [186, 305, 237, 73, 209, 214],
        },
        {
          name: 'Mobile',
          data: [80, 200, 120, 190, 130, 140],
        },
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
            reset: false,
          },
        },
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Monthly Data',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      markers: {
        size: 0,
      },
    },
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <div style="max-width: 640px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
      <h3 style="margin: 0;">Traffic Overview</h3>
      <p style="margin: var(--spacing-1) 0 var(--spacing-4); color: var(--color-muted-fg);">Desktop vs. mobile sessions over the last 6 months.</p>
      <apx-chart
        [series]="chartOptions.series"
        [chart]="chartOptions.chart"
        [xaxis]="chartOptions.xaxis"
        [dataLabels]="chartOptions.dataLabels"
        [stroke]="chartOptions.stroke"
        [title]="chartOptions.title"
        [fill]="chartOptions.fill"
        [tooltip]="chartOptions.tooltip"
        [markers]="chartOptions.markers"
      ></apx-chart>
    </div>
    `,
  }),
};
