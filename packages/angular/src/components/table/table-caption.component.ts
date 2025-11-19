import { Component } from '@angular/core';

@Component({
  selector: '[pui-table-caption]',
  host: {
    'data-testid': 'pui-table-caption',
  },
  styles: [
    `
      :host {
        color: var(--color-muted-fg);
        margin-top: var(--spacing-3);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class TableCaptionComponent {}
