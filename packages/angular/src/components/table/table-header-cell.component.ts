import { CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[pui-header-cell]',
  standalone: true,
  host: {
    role: 'columnheader',
    'data-testid': 'pui-table-header-cell',
  },
  hostDirectives: [CdkHeaderCell],
  styles: [
    `
      :host {
        color: var(--color-muted-fg);
        font-weight: var(--font-weight-medium);
        vertical-align: middle;
        text-align: left;
        padding: 0 var(--spacing-2);
        height: var(--spacing-10);
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class TableHeaderCellComponent {}

@Directive({
  selector: '[puiHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: TableHeaderCellDefDirective }],
  standalone: true,
})
export class TableHeaderCellDefDirective extends CdkHeaderCellDef {}
