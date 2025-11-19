import { Component } from '@angular/core';
import { IconChevronLeftComponent } from '../../icons';

@Component({
  selector: 'a[pui-pagination-previous]',
  standalone: true,
  imports: [IconChevronLeftComponent],
  template: `<ng-content>
    <i pui-icon name="chevron-left"></i>
    <span>Previous</span>
  </ng-content>`,
  host: {
    'aria-label': 'Go to previous page',
    'data-testid': 'pui-pagination-previous',
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
