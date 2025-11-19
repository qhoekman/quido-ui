import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'a[pui-footer-link]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-link',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-xs);
        line-height: var(--line-height-5);
        color: hsl(from var(--color-background-fg) h s l / 55%);
        text-decoration: underline;
      }

      :host:hover {
        color: hsl(from var(--color-background-fg) h s l / 66%);
      }
    `,
  ],
})
export class FooterLinkComponent {}
