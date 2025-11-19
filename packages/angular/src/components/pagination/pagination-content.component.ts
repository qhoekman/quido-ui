import { Component } from '@angular/core';

@Component({
  selector: 'ul[qui-pagination-content]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-pagination-content',
  },
  styles: [
    `
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }
    `,
  ],
})
export class PaginationContentComponent {}
