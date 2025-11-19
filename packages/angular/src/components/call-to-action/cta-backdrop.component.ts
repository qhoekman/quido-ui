import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'img[pui-cta-backdrop]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-cta-backdrop',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -50;
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.25);
      }
    `,
  ],
})
export class CTABackdropComponent {}
