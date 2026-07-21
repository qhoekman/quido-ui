import { Component } from '@angular/core';

@Component({
  selector: 'li[qui-pagination-item]',
  standalone: true,
  host: {
    'data-testid': 'pagination__item',
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
