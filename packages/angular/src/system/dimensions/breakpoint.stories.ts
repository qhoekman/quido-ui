import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../components/table/table.component';
import { TableModule } from '../../components/table/table.module';

type StoryArgs = {
  breakpoint: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Dimensions/Breakpoint',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [TableModule, CurrencyPipe],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    breakpoint: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
  render: (args) => ({
    props: {
      ...args,
      dataSource: args.breakpoint.map((breakpoint) => ({
        name: breakpoint,
        value: `var(--breakpoint-${breakpoint})`,
      })),
      displayedColumns: ['name', 'value'],
    },
    template: `
      <table qui-table [dataSource]="dataSource">
        <caption qui-table-caption>
          A list of breakpoint values.
        </caption>
        <ng-container puiColumnDef="name">
          <th qui-header-cell *puiHeaderCellDef style="width: 100px;">Name</th>
          <td qui-cell *puiCellDef="let breakpoint">{{ breakpoint.name }}</td>
          <td qui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="value">
          <th qui-header-cell *puiHeaderCellDef>Value</th>
          <td qui-cell *puiCellDef="let breakpoint">
            <div style="width: {{ breakpoint.value }}; height: 12px; background: var(--color-primary);"></div>
          </td>
          <td qui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <tr qui-header-row *puiHeaderRowDef="displayedColumns"></tr>
        <tr qui-row *puiRowDef="let row; columns: displayedColumns"></tr>
        <tr qui-footer-row *puiFooterRowDef="displayedColumns"></tr>
      </table>
    `,
  }),
};
