import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-tagline]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-tagline',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-medium);
        color: hsl(from var(--color-background-fg) h s l / 80%);
        margin: 0;
      }
    `,
  ],
})
export class HeroTaglineComponent {}
