import { Component } from '@angular/core';

@Component({
  selector: 'pui-toast-viewport',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-toast-viewport',
  },
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        z-index: 100;
        display: flex;
        max-height: 100vh;
        width: 100%;
        flex-direction: column-reverse;
        padding: 1rem;
      }

      @media (width >= 640px) {
        :host {
          bottom: 0;
          right: 0;
          top: auto;
          flex-direction: column;
        }
      }

      @media (width >= 768px) {
        :host {
          max-width: 420px;
        }
      }
    `,
  ],
})
export class ToastViewportComponent {}
