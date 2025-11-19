import { CdkCell, CdkCellDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[qui-cell]',
  standalone: true,
  hostDirectives: [CdkCell],
  host: {
    'data-testid': 'qui-table-cell',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        padding: var(--spacing-2);
        vertical-align: middle;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class TableCellComponent {}

@Directive({
  selector: '[puiCellDef]',
  standalone: true,
  providers: [{ provide: CdkCellDef, useExisting: TableCellDefDirective }],
})
export class TableCellDefDirective extends CdkCellDef {}
