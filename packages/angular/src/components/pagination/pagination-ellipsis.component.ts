import { Component } from '@angular/core';
import { IconDotsHorizontalComponent } from '../../icons';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';

@Component({
  selector: 'span[pui-pagination-ellipsis]',
  standalone: true,
  host: {
    '[attr.aria-hidden]': 'true',
    'data-testid': 'pui-pagination-ellipsis',
  },
  imports: [IconDotsHorizontalComponent, VisuallyHiddenComponent],
  template: `
    <ng-content>
      <i pui-icon name="dots-horizontal"></i>
      <span pui-visually-hidden>More</span>
    </ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--spacing-9);
        height: var(--spacing-9);
      }
    `,
  ],
})
export class PaginationEllipsisComponent {}
