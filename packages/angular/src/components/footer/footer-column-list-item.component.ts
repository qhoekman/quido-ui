import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'li[qui-footer-column-list-item]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-column-list-item',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-6);
        color: hsl(from var(--color-background-fg) h s l / 66%);
        list-style: none;
        margin: 0;
        padding: 0;

        &:hover {
          color: var(--color-background-fg);
        }
      }
    `,
  ],
})
export class FooterColumnListItemComponent {}
