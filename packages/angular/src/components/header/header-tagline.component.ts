import { Component } from '@angular/core';

@Component({
  selector: 'h3[pui-header-tagline]',
  standalone: true,
  host: {
    'data-testid': 'pui-header-tagline',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-medium);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-wide);
        color: hsl(from var(--color-background-fg) h s l / 80%);
        margin: 0;
      }
    `,
  ],
})
export class HeaderTaglineComponent {}
