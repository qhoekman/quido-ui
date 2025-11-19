import { Component } from '@angular/core';

@Component({
  selector: 'nav[qui-pagination]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    role: 'navigation',
    'data-testid': 'qui-pagination',
    '[attr.aria-label]': '"pagination"',
  },
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `,
  ],
})
export class PaginationComponent {}
