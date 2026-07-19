import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const tableWrapperStyles = css`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const TableWrapper = styled.div`
  ${tableWrapperStyles}
`;

const tableStyles = css`
  width: 100%;
  caption-side: bottom;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  text-indent: 0;
  border-collapse: collapse;
`;

const StyledTable = styled.table`
  ${tableStyles}
`;

const tableHeaderStyles = css`
  display: table-header-group;

  & tr {
    border-bottom: var(--border-width-default) solid var(--color-border);
  }
`;

const StyledTableHeader = styled.thead`
  ${tableHeaderStyles}
`;

const tableBodyStyles = css`
  display: table-row-group;

  & tr:last-child {
    border: 0;
  }
`;

const StyledTableBody = styled.tbody`
  ${tableBodyStyles}
`;

const tableFooterStyles = css`
  display: table-footer-group;
  border-top: var(--border-width-default) solid var(--color-border);
  background-color: hsl(from var(--color-muted) h s l / 50%);
  color: var(--color-muted-fg);
  font-weight: var(--font-weight-medium);

  & > tr:last-child {
    border-bottom: 0;
  }
`;

const StyledTableFooter = styled.tfoot`
  ${tableFooterStyles}
`;

const tableRowStyles = css`
  display: table-row;
  border-bottom: var(--border-width-default) solid var(--color-border);
  transition: colors 0.3s;

  &:hover {
    background-color: hsl(from var(--color-background-fg) h s l / 10%);
  }

  &[data-state="selected"] {
    background-color: hsl(from var(--color-background-fg) h s l / 30%);
  }
`;

const StyledTableRow = styled.tr`
  ${tableRowStyles}
`;

const tableHeadStyles = css`
  height: var(--spacing-12);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  text-align: left;
  vertical-align: middle;
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const StyledTableHead = styled.th`
  ${tableHeadStyles}
`;

const tableCellStyles = css`
  padding: var(--spacing-4);
  vertical-align: middle;

  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

const StyledTableCell = styled.td`
  ${tableCellStyles}
`;

const tableCaptionStyles = css`
  margin-top: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: var(--color-background-fg);
`;

const StyledTableCaption = styled.caption`
  ${tableCaptionStyles}
`;

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <TableWrapper className="q-table-wrapper">
    <StyledTable
      ref={ref}
      data-testid="table"
      className={cx("q-table", className)}
      {...props}
    />
  </TableWrapper>
));
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableHeader
    ref={ref}
    data-testid="table__header"
    className={cx("q-table-header", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableBody
    ref={ref}
    data-testid="table__body"
    className={cx("q-table-body", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <StyledTableFooter
    ref={ref}
    data-testid="table__footer"
    className={cx("q-table-footer", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <StyledTableRow
    ref={ref}
    data-testid="table__row"
    className={cx("q-table-row", className)}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <StyledTableHead
    ref={ref}
    data-testid="table__head"
    className={cx("q-table-head", className)}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <StyledTableCell
    ref={ref}
    data-testid="table__cell"
    className={cx("q-table-cell", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <StyledTableCaption
    ref={ref}
    data-testid="table__caption"
    className={cx("q-table-caption", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";
