import { Component } from '@angular/core';

@Component({
  selector: '[pui-collapsible-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-collapsible-content',
  },
  styles: [
    `
      :host {
        padding: var(--spacing-1) var(--spacing-3);
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class CollapsibleContentComponent {}
