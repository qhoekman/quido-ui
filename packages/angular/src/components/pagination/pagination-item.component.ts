import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-pagination-item]',
  standalone: true,
  host: {
    'data-testid': 'pui-pagination-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        list-style: none;
      }
    `,
  ],
})
export class PaginationItemComponent {}
