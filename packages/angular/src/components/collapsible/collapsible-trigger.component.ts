import { Component } from '@angular/core';

@Component({
  selector: '[pui-collapsible-trigger]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-collapsible-trigger',
  },
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-2);
        padding: var(--spacing-1) var(--spacing-3);
        color: var(--color-background-fg);
      }
    `,
  ],
  standalone: true,
})
export class CollapsibleTriggerComponent {}
