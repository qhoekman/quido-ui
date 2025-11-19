import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../components/table/table.component';
import { TableModule } from '../../components/table/table.module';

type StoryArgs = {
  size: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Dimensions/Sizing',
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
    size: [
      'full',
      'screen',
      'svw',
      'svh',
      'lvw',
      'lvh',
      'dvw',
      'dvh',
      'min',
      'max',
      'fit',
      'auto',
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      dataSource: args.size.map((size) => ({
        name: size,
        value: `var(--size-${size})`,
      })),
      displayedColumns: ['name', 'value'],
    },
    template: `
      <table qui-table [dataSource]="dataSource">
        <caption qui-table-caption>
          A list of size values.
        </caption>
        <ng-container puiColumnDef="name">
          <th qui-header-cell *puiHeaderCellDef style="width: 100px;">Name</th>
          <td qui-cell *puiCellDef="let size">{{ size.name }}</td>
          <td qui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="value">
          <th qui-header-cell *puiHeaderCellDef>Value</th>
          <td qui-cell *puiCellDef="let size">
            <div style="width: {{ size.value }}; height: 12px; background: var(--color-primary);"></div>
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
