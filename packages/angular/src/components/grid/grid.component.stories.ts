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
        @for (i of grid; track i) {
          <div qui-grid-item [colSpan]="colSpan" style="background-color: lightgray; padding: 20px;">
            Grid Item
          </div>
        }
      </div>
    `,
  }),
};
