import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../components/table/table.component';
import { TableModule } from '../../components/table/table.module';

type StoryArgs = {
  columns: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Dimensions/Column',
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
    columns: [
      'auto',
      '3xs',
      '2xs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      dataSource: args.columns.map((column) => ({
        name: column,
        value: `var(--columns-${column})`,
      })),
      displayedColumns: ['name', 'value'],
    },
    template: `
      <table qui-table [dataSource]="dataSource">
        <caption qui-table-caption>
          A list of column values.
        </caption>
        <ng-container puiColumnDef="name">
          <th qui-header-cell *puiHeaderCellDef style="width: 100px;">Name</th>
          <td qui-cell *puiCellDef="let column">{{ column.name }}</td>
          <td qui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="value">
          <th qui-header-cell *puiHeaderCellDef>Value</th>
          <td qui-cell *puiCellDef="let column">
            <div style="width: {{ column.value }}; height: 12px; background: var(--color-primary);"></div>
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
