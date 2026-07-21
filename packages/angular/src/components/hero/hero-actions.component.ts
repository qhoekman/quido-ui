import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-actions]',
  standalone: true,
  host: {
    'data-testid': 'hero__actions',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        gap: var(--spacing-8);
      }
    `,
  ],
})
export class HeroActionsComponent {}
