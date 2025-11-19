import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'h3[qui-footer-heading]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-heading',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-6);
        color: var(--color-background-fg);
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class FooterHeadingComponent {}
