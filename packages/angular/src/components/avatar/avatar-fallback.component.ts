import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-avatar-fallback], qui-avatar-fallback',
  standalone: true,
  host: {
    'data-testid': 'qui-avatar-fallback',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        height: var(--size-full);
        width: var(--size-full);
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-full);
        color: var(--color-muted-fg);
        background-color: var(--color-muted);
      }
    `,
  ],
})
export class AvatarFallbackComponent {}
