import { Component } from '@angular/core';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';
import { IconDotsHorizontalComponent } from '../../icons';

@Component({
  selector: 'span[qui-breadcrumb-ellipsis]',
  standalone: true,
  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
    'data-testid': 'qui-breadcrumb-ellipsis',
  },
  imports: [VisuallyHiddenComponent, IconDotsHorizontalComponent],
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host svg {
        width: var(--spacing-3-5);
        height: var(--spacing-3-5);
      }
    `,
  ],
  template: `<ng-content>
    <i qui-icon name="dots-horizontal"></i>
    <span qui-visually-hidden>More</span>
  </ng-content>`,
})
export class BreadcrumbEllipsisComponent {}
