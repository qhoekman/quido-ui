import { Component } from '@angular/core';

@Component({
  selector: 'h2[pui-header-title]',
  standalone: true,
  host: {
    'data-testid': 'pui-header-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-4xl);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
        letter-spacing: var(--letter-spacing-wide);
        color: var(--color-background-fg);
        margin: 0;
      }

      @media (width >= 1280px) {
        :host {
          font-size: var(--font-size-5xl);
        }
      }
    `,
  ],
})
export class HeaderTitleComponent {}
