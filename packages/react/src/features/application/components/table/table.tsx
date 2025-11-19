import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: var(--font-size-sm);
`;

const StyledTableHeader = styled.thead`
  & tr {
    border-bottom: var(--border-width-default) solid var(--color-border);
  }
`;

const StyledTableBody = styled.tbody`
  & tr:last-child {
    border: 0;
  }
`;

const StyledTableFooter = styled.tfoot`
  border-top: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  font-weight: var(--font-weight-medium);

  & > tr:last-child {
    border-bottom: 0;
  }
`;

const StyledTableRow = styled.tr`
  border-bottom: var(--border-width-default) solid var(--color-border);
  transition: colors 0.3s;

  &:hover {
    background-color: hsl(from var(--color-background-fg) h s l / 10%);
  }

  &[data-state="selected"] {
    background-color: hsl(from var(--color-background-fg) h s l / 30%);
  }
`;

const StyledTableHead = styled.th`
  height: var(--spacing-12);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  text-align: left;
  vertical-align: middle;
  font-weight: var(--font-weight-medium);
  color: var(--color-foreground);

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const StyledTableCell = styled.td`
  padding: var(--spacing-4);
  vertical-align: middle;

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const StyledTableCaption = styled.caption`
  margin-top: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: var(--color-foreground);
`;

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <TableWrapper>
    <StyledTable ref={ref} className={className} {...props} />
  </TableWrapper>
));
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableHeader ref={ref} className={className} {...props} />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableBody ref={ref} className={className} {...props} />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableFooter ref={ref} className={className} {...props} />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <StyledTableRow ref={ref} className={className} {...props} />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <StyledTableHead ref={ref} className={className} {...props} />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <StyledTableCell ref={ref} className={className} {...props} />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <StyledTableCaption ref={ref} className={className} {...props} />
));
TableCaption.displayName = "TableCaption";
