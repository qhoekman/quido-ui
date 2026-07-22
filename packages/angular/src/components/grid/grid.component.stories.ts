import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { GridItemComponent } from './grid-item.component';
import { GridComponent } from './grid.component';

export default {
  title: 'Components/Layout/Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [GridComponent, GridItemComponent],
    }),
  ],
} as Meta;

type Story = StoryObj<GridComponent>;

export const DefaultGridItem: Story = {
  args: {
    columns: 4,
    colSpan: 1,
  } as never,
  render: (args) => ({
    props: {
      ...args,
      grid: new Array(args.columns).fill(0),
    },
    template: `
      <div qui-grid [columns]="columns">
        @for (i of grid; track $index) {
          <div qui-grid-item [colSpan]="colSpan" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
            Item {{ $index + 1 }}
          </div>
        }
      </div>
    `,
  }),
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    colSpan: 1,
  } as never,
  render: (args) => ({
    props: {
      ...args,
      grid: new Array(args.columns).fill(0),
    },
    template: `
      <div qui-grid [columns]="columns">
        @for (i of grid; track $index) {
          <div qui-grid-item [colSpan]="colSpan" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
            Item {{ $index + 1 }}
          </div>
        }
      </div>
    `,
  }),
};

export const SixColumns: Story = {
  args: {
    columns: 6,
    colSpan: 1,
  } as never,
  render: (args) => ({
    props: {
      ...args,
      grid: new Array(args.columns).fill(0),
    },
    template: `
      <div qui-grid [columns]="columns">
        @for (i of grid; track $index) {
          <div qui-grid-item [colSpan]="colSpan" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
            Item {{ $index + 1 }}
          </div>
        }
      </div>
    `,
  }),
};

export const WithColSpan: Story = {
  args: {
    columns: 4,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <div qui-grid [columns]="columns">
        <div qui-grid-item [colSpan]="2" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
          Item (span 2)
        </div>
        <div qui-grid-item [colSpan]="1" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
          Item (span 1)
        </div>
        <div qui-grid-item [colSpan]="1" style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;">
          Item (span 1)
        </div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  args: {
    columns: 4,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <div qui-grid [columns]="columns">
        <div qui-grid-item [colSpan]="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Revenue</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">$48,290</p>
        </div>
        <div qui-grid-item [colSpan]="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">New Users</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">1,204</p>
        </div>
        <div qui-grid-item [colSpan]="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Orders</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">356</p>
        </div>
        <div qui-grid-item [colSpan]="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Conversion</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">3.2%</p>
        </div>
      </div>
    `,
  }),
};
