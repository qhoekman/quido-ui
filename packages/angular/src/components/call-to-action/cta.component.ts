import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-cta]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-cta',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        padding: var(--spacing-16) 0;
        width: 100%;
      }
    `,
  ],
})
export class CTAComponent {}
