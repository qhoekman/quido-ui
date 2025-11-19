import { CdkFooterCell, CdkFooterCellDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[pui-footer-cell]',
  hostDirectives: [CdkFooterCell],
  host: {
    'data-testid': 'pui-table-footer-cell',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        vertical-align: middle;
        text-align: left;
        padding: var(--spacing-2);
      }
    `,
  ],
  standalone: true,
})
export class TableFooterCellComponent {}

@Directive({
  selector: '[puiFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: TableFooterCellDefDirective }],

  standalone: true,
})
export class TableFooterCellDefDirective extends CdkFooterCellDef {}
