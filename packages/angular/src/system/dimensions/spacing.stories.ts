import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../components/table/table.component';
import { TableModule } from '../../components/table/table.module';

type StoryArgs = {
  spacing: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Dimensions/Spacing',
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
    spacing: [
      'px',
      '0',
      '0-1',
      '0-2',
      '0-3',
      '0-4',
      '0-5',
      '1',
      '1-5',
      '2',
      '2-5',
      '3',
      '3-5',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '14',
      '16',
      '18',
      '20',
      '24',
      '28',
      '32',
      '36',
      '40',
      '44',
      '48',
      '52',
      '56',
      '60',
      '64',
      '72',
      '80',
      '96',
      'auto',
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      dataSource: args.spacing.map((spacing) => ({
        name: spacing,
        value: `var(--spacing-${spacing})`,
      })),
      displayedColumns: ['name', 'value'],
    },
    template: `
      <table pui-table [dataSource]="dataSource">
        <caption pui-table-caption>
          A list of spacing values.
        </caption>
        <ng-container puiColumnDef="name">
           <th pui-header-cell *puiHeaderCellDef style="width: 100px;">Name</th>
          <td pui-cell *puiCellDef="let spacing">{{ spacing.name }}</td>
          <td pui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="value">
          <th pui-header-cell *puiHeaderCellDef>Value</th>
          <td pui-cell *puiCellDef="let spacing">
            <div style="width: {{ spacing.value }}; height: 12px; background: var(--color-primary);"></div>
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
