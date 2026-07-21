import { Component } from '@angular/core';

@Component({
  selector: 'dd[qui-definition-description]',
  standalone: true,
  host: {
    'data-testid': 'definition-list__description',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin-top: var(--spacing-1);
        font-size: var(--font-size-sm);
        color: var(--gray-700);
        grid-column: span 2;
      }
    `,
  ],
})
export class DefinitionDescriptionComponent {}
