import { Component } from '@angular/core';
import { IconSlashComponent } from '../../icons';

@Component({
  selector: 'li[pui-breadcrumb-separator]',
  standalone: true,
  imports: [IconSlashComponent],
  template: `
    <ng-content>
      <i pui-icon name="slash"></i>
    </ng-content>
  `,

  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
    'data-testid': 'pui-breadcrumb-separator',
  },
  styles: [
    `
      :host {
        list-style: none;
      }

      :host svg {
        width: var(--spacing-3-5);
        height: var(--spacing-3-5);
      }
    `,
  ],
})
export class BreadcrumbSeparatorComponent {}
