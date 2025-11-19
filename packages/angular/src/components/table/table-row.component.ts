import { CdkCellOutlet, CdkRow, CdkRowDef } from '@angular/cdk/table';
import { Component, Directive } from '@angular/core';

@Component({
  selector: '[qui-row]',
  host: {
    'data-testid': 'qui-table-row',
  },
  standalone: true,
  styles: [
    `
      :host {
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke;
        transition-timing-function: ease-in-out;
        transition-duration: 0.15s;
      }

      :host:hover {
        background-color: hsl(from var(--color-muted) h s l / 50%);
      }
    `,
  ],
  imports: [CdkCellOutlet],
  providers: [{ provide: CdkRow, useExisting: TableRowComponent }],
  template: '<ng-container cdkCellOutlet></ng-container>',
})
export class TableRowComponent extends CdkRow {}

@Directive({
  selector: '[puiRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: TableRowDefDirective }],
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    { name: 'columns', alias: 'puiRowDefColumns' },
    { name: 'when', alias: 'puiRowDefWhen' },
  ],
  standalone: true,
})
export class TableRowDefDirective<T> extends CdkRowDef<T> {}
