import { Component } from '@angular/core';

@Component({
  selector: 'h1[qui-hero-title]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-4xl);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
        color: var(--color-background-fg);
        letter-spacing: var(--tracking-wide);
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
export class HeroTitleComponent {}
