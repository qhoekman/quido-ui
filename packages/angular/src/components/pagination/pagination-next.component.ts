import { Component } from '@angular/core';
import { IconChevronRightComponent } from '../../icons';

@Component({
  selector: 'a[qui-pagination-next]',
  standalone: true,
  imports: [IconChevronRightComponent],
  template: `<ng-content>
    <span>Next</span>
    <i qui-icon name="chevron-right"></i>
  </ng-content>`,
  host: {
    'aria-label': 'Go to next page',
    'data-testid': 'qui-pagination-next',
  },
  styleUrls: ['./pagination-link.component.css'],
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-right: 1rem;
      }
    `,
  ],
})
export class PaginationNextComponent {}
