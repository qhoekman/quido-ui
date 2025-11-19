import { NgModule } from '@angular/core';
import { TableCaptionComponent } from './table-caption.component';
import { TableCellComponent, TableCellDefDirective } from './table-cell.component';
import { TableColumnDefDirective } from './table-column.directive';
import { TableFooterCellComponent, TableFooterCellDefDirective } from './table-footer-cell.component';
import { TableFooterRowComponent, TableFooterRowDefDirective } from './table-footer-row.component';
import { TableHeaderCellComponent, TableHeaderCellDefDirective } from './table-header-cell.component';
import { TableHeaderRowComponent, TableHeaderRowDefDirective } from './table-header-row.component';
import { TableRowComponent, TableRowDefDirective } from './table-row.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    TableComponent,
    TableColumnDefDirective,
    TableFooterCellComponent,
    TableFooterCellDefDirective,
    TableFooterRowComponent,
    TableFooterRowDefDirective,
    TableHeaderCellComponent,
    TableHeaderCellDefDirective,
    TableHeaderRowComponent,
    TableHeaderRowDefDirective,
    TableRowComponent,
    TableRowDefDirective,
    TableCellComponent,
    TableCellDefDirective,
    TableCaptionComponent,
  ],
  exports: [
    TableComponent,
    TableColumnDefDirective,
    TableFooterCellComponent,
    TableFooterCellDefDirective,
    TableFooterRowComponent,
    TableFooterRowDefDirective,
    TableHeaderCellComponent,
    TableHeaderCellDefDirective,
    TableHeaderRowComponent,
    TableHeaderRowDefDirective,
    TableRowComponent,
    TableRowDefDirective,
    TableCellComponent,
    TableCellDefDirective,
    TableCaptionComponent,
  ],
})
export class TableModule {}
