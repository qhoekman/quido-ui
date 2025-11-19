import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-definition-list-item]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: var(--spacing-4) var(--spacing-6);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-4);
      }
    `,
  ],
})
export class DefinitionListItemComponent {}
