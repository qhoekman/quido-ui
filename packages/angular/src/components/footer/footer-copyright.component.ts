import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'p[pui-footer-copyright]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-copyright',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-xs);
        line-height: var(--line-height-5);
        color: hsl(from var(--color-background-fg) h s l / 55%);
        margin: 0;
      }
    `,
  ],
})
export class FooterCopyrightComponent {}
