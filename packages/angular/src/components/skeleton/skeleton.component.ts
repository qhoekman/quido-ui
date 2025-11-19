import { Component } from '@angular/core';

@Component({
  selector: '[pui-skeleton]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-skeleton',
  },
  styles: [
    `
      :host {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        border-radius: var(--border-radius-md);
        background-color: hsl(from var(--color-background-fg) h s l / 10%);
        opacity: 0.1;
      }
    `,
  ],
  standalone: true,
})
export class SkeletonComponent {}
