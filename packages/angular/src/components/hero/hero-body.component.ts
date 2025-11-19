import { Component } from '@angular/core';

@Component({
  selector: '[pui-hero-body]',
  standalone: true,
  host: {
    'data-testid': 'pui-hero-body',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        color: hsl(from var(--color-background-fg) h s l / 66%);
        margin: 0;
      }
    `,
  ],
})
export class HeroBodyComponent {}
