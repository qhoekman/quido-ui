import { CdkCellOutlet, CdkHeaderRow, CdkHeaderRowDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[pui-header-row]',
  standalone: true,
  host: {
    'data-testid': 'pui-table-header-row',
  },
  styles: [
    `
      :host {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: ease-in-out;
        transition-duration: 0.15s;
      }

      :host:hover {
        background-color: hsl(from var(--color-muted) h s l / 50%);
      }
    `,
  ],
  imports: [CdkCellOutlet],
  providers: [{ provide: CdkHeaderRow, useExisting: TableHeaderRowComponent }],
  template: '<ng-container cdkCellOutlet></ng-container>',
})
export class TableHeaderRowComponent extends CdkHeaderRow {}

@Directive({
  selector: '[puiHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: TableHeaderRowDefDirective }],
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'columns', alias: 'puiHeaderRowDef' }],
  standalone: true,
})
export class TableHeaderRowDefDirective extends CdkHeaderRowDef {}
