import { Component } from '@angular/core';

@Component({
  selector: 'nav[qui-breadcrumb]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    role: 'navigation',
    'data-testid': 'qui-breadcrumb',
    '[attr.aria-label]': '"breadcrumb"',
  },
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class BreadcrumbComponent {}
