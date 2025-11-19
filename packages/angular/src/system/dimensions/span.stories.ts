import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../components/table/table.component';
import { TableModule } from '../../components/table/table.module';

type StoryArgs = {
  span: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Dimensions/Span',
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
    span: [
      '1-2',
      '1-3',
      '2-3',
      '1-4',
      '2-4',
      '3-4',
      '1-5',
      '2-5',
      '3-5',
      '4-5',
      '1-6',
      '2-6',
      '3-6',
      '4-6',
      '5-6',
      '1-12',
      '2-12',
      '3-12',
      '4-12',
      '5-12',
      '6-12',
      '7-12',
      '8-12',
      '9-12',
      '10-12',
      '11-12',
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      dataSource: args.span.map((span) => ({
        name: span,
        value: `var(--span-${span})`,
      })),
      displayedColumns: ['name', 'value'],
    },
    template: `
      <table pui-table [dataSource]="dataSource">
        <caption pui-table-caption>
          A list of span values.
        </caption>
        <ng-container puiColumnDef="name">
          <th pui-header-cell *puiHeaderCellDef style="width: 100px;">Name</th>
          <td pui-cell *puiCellDef="let span">{{ span.name }}</td>
          <td pui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="value">
          <th pui-header-cell *puiHeaderCellDef>Value</th>
          <td pui-cell *puiCellDef="let span">
            <div style="width: {{ span.value }}; height: 12px; background: var(--color-primary);"></div>
          </td>
          <td pui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <tr pui-header-row *puiHeaderRowDef="displayedColumns"></tr>
        <tr pui-row *puiRowDef="let row; columns: displayedColumns"></tr>
        <tr pui-footer-row *puiFooterRowDef="displayedColumns"></tr>
      </table>
    `,
  }),
};
