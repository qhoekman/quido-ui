import { CurrencyPipe } from '@angular/common';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { TableModule } from './table.module';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<TableComponent<unknown>> = {
  title: 'Components/Data Display/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [TableModule, CurrencyPipe, StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<TableComponent<unknown>>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      dataSource: [
        {
          invoice: 'DOD101',
          paymentStatus: 'Pending',
          totalAmount: 275.0,
          paymentMethod: 'Bank Transfer',
        },
        {
          invoice: 'DOD102',
          paymentStatus: 'Paid',
          totalAmount: 125.0,
          paymentMethod: 'Credit Card',
        },
        {
          invoice: 'DOD103',
          paymentStatus: 'Unpaid',
          totalAmount: 400.0,
          paymentMethod: 'PayPal',
        },
        {
          invoice: 'DOD104',
          paymentStatus: 'Paid',
          totalAmount: 500.0,
          paymentMethod: 'Bank Transfer',
        },
        {
          invoice: 'DOD105',
          paymentStatus: 'Pending',
          totalAmount: 600.0,
          paymentMethod: 'Credit Card',
        },
        {
          invoice: 'DOD106',
          paymentStatus: 'Unpaid',
          totalAmount: 225.0,
          paymentMethod: 'PayPal',
        },
        {
          invoice: 'DOD107',
          paymentStatus: 'Paid',
          totalAmount: 350.0,
          paymentMethod: 'Credit Card',
        },
      ],
      displayedColumns: ['invoice', 'paymentStatus', 'paymentMethod', 'totalAmount'],
    },
    template: `
    <pui-story>
      <table pui-table [dataSource]="dataSource">
        <caption pui-table-caption>
          A list of your recent invoices.
        </caption>
        <ng-container puiColumnDef="invoice">
          <th pui-header-cell *puiHeaderCellDef>Invoice</th>
          <td pui-cell *puiCellDef="let invoice">{{ invoice.invoice }}</td>
          <td pui-footer-cell *puiFooterCellDef>Total</td>
        </ng-container>

        <ng-container puiColumnDef="paymentStatus">
          <th pui-header-cell *puiHeaderCellDef>Status</th>
          <td pui-cell *puiCellDef="let invoice">{{ invoice.paymentStatus }}</td>
          <td pui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="paymentMethod">
          <th pui-header-cell *puiHeaderCellDef>Method</th>
          <td pui-cell *puiCellDef="let invoice">{{ invoice.paymentMethod }}</td>
          <td pui-footer-cell *puiFooterCellDef></td>
        </ng-container>

        <ng-container puiColumnDef="totalAmount">
          <th pui-header-cell *puiHeaderCellDef class="text-right">Amount</th>
          <td pui-cell *puiCellDef="let invoice" class="text-right">
            {{ invoice.totalAmount | currency }}
          </td>
          <td pui-footer-cell *puiFooterCellDef>
            {{ 2475.00 | currency }}
          </td>
        </ng-container>

        <tr pui-header-row *puiHeaderRowDef="displayedColumns"></tr>
        <tr pui-row *puiRowDef="let row; columns: displayedColumns"></tr>
        <tr pui-footer-row *puiFooterRowDef="displayedColumns"></tr>
      </table>
    </pui-story>
    `,
  }),
};
