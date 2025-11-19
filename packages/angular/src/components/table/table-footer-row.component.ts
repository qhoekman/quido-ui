import { CdkCellOutlet, CdkFooterRow, CdkFooterRowDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[pui-footer-row]',
  template: `<ng-container cdkCellOutlet></ng-container>`,
  host: {
    role: 'row',
    'data-testid': 'pui-table-footer-row',
  },
  providers: [{ provide: CdkFooterRow, useExisting: TableFooterRowComponent }],
  imports: [CdkCellOutlet],
  standalone: true,
})
export class TableFooterRowComponent extends CdkFooterRow {}

@Directive({
  selector: '[puiFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: TableFooterRowDefDirective }],
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'columns', alias: 'puiFooterRowDef' }],
  standalone: true,
})
export class TableFooterRowDefDirective extends CdkFooterRowDef {}
