import { Component } from '@angular/core';

@Component({
  selector: 'span[pui-countdown-item]',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
      }
    `,
  ],
  standalone: true,
})
export class CountdownItemComponent {}
