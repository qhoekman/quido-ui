import { Component } from '@angular/core';
import { IconChevronLeftComponent } from '../../icons';

@Component({
  selector: 'a[qui-pagination-previous]',
  standalone: true,
  imports: [IconChevronLeftComponent],
  template: `<ng-content>
    <i qui-icon name="chevron-left"></i>
    <span>Previous</span>
  </ng-content>`,
  host: {
    'aria-label': 'Go to previous page',
    'data-testid': 'qui-pagination-previous',
  },
  styleUrls: ['./pagination-link.component.css'],
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-left: 1rem;
      }
    `,
  ],
})
export class PaginationPreviousComponent {}
