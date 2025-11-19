import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-section]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-section',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 0 auto;
        max-width: var(--max-width-2xl);
      }
    `,
  ],
})
export class HeroSectionComponent {}
