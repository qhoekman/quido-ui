import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-header-backdrop]',
  standalone: true,
  host: {
    'data-testid': 'qui-header-backdrop',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class HeaderBackdropComponent {}
