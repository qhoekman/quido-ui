import type { Meta, StoryFn } from "@storybook/vue3";
import Table from "./table.vue";
import TableHeader from "./table-header.vue";
import TableBody from "./table-body.vue";
import TableFooter from "./table-footer.vue";
import TableRow from "./table-row.vue";
import TableHead from "./table-head.vue";
import TableCell from "./table-cell.vue";
import TableCaption from "./table-caption.vue";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default {
  title: "Components/Data Display/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "A table component for displaying structured data.",
      },
    },
  },
} satisfies Meta<typeof Table>;

export const Default: StoryFn<typeof Table> = () => ({
  components: {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
  },
  setup() {
    return { invoices };
  },
  template: `
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead :style="{ width: 'var(--spacing-24)' }">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead :style="{ textAlign: 'right' }">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="invoice in invoices" :key="invoice.invoice">
          <TableCell :style="{ fontWeight: 'var(--font-weight-medium)' }">
            {{ invoice.invoice }}
          </TableCell>
          <TableCell>{{ invoice.paymentStatus }}</TableCell>
          <TableCell>{{ invoice.paymentMethod }}</TableCell>
          <TableCell :style="{ textAlign: 'right' }">
            {{ invoice.totalAmount }}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell :colspan="3">Total</TableCell>
          <TableCell :style="{ textAlign: 'right' }">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  `,
});

export const WithSelectedRow: StoryFn<typeof Table> = () => ({
  components: {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
  },
  setup() {
    return { invoices };
  },
  template: `
    <Table>
      <TableCaption>
        A list of your recent invoices with selected row.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead :style="{ width: 'var(--spacing-24)' }">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead :style="{ textAlign: 'right' }">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="(invoice, index) in invoices"
          :key="invoice.invoice"
          :data-state="index === 2 ? 'selected' : undefined"
        >
          <TableCell :style="{ fontWeight: 'var(--font-weight-medium)' }">
            {{ invoice.invoice }}
          </TableCell>
          <TableCell>{{ invoice.paymentStatus }}</TableCell>
          <TableCell>{{ invoice.paymentMethod }}</TableCell>
          <TableCell :style="{ textAlign: 'right' }">
            {{ invoice.totalAmount }}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell :colspan="3">Total</TableCell>
          <TableCell :style="{ textAlign: 'right' }">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  `,
});
