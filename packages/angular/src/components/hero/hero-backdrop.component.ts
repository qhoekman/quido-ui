import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-backdrop]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-backdrop',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class HeroBackdropComponent {}
