import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/application/components/table/table";
import type { StoryObj, Meta } from "@storybook/react-vite";

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
  title: "Features/Application/Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export const Default: StoryObj<typeof Table> = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: "var(--spacing-24)" }}>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>
              {invoice.invoice}
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell style={{ textAlign: "right" }}>
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell style={{ textAlign: "right" }}>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

const teamMembers = [
  { name: "Ava Chen", role: "Product Designer", status: "Active" },
  { name: "Marcus Reyes", role: "Frontend Engineer", status: "Active" },
  { name: "Priya Nair", role: "Engineering Manager", status: "Invited" },
];

export const Composition: StoryObj<typeof Table> = {
  render: () => (
    <Table>
      <TableCaption>Members of the Website Redesign project.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead style={{ textAlign: "right" }}>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamMembers.map((member) => (
          <TableRow key={member.name}>
            <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>
              {member.name}
            </TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell style={{ textAlign: "right" }}>
              {member.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithSelectedRow: StoryObj<typeof Table> = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>
        A list of your recent invoices with selected row.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: "var(--spacing-24)" }}>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow
            key={invoice.invoice}
            data-state={index === 2 ? "selected" : undefined}
          >
            <TableCell style={{ fontWeight: "var(--font-weight-medium)" }}>
              {invoice.invoice}
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell style={{ textAlign: "right" }}>
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell style={{ textAlign: "right" }}>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
