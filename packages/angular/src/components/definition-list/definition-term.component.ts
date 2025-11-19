import { Component } from '@angular/core';

@Component({
  selector: 'dt[pui-definition-term]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-background-fg);
      }
    `,
  ],
})
export class DefinitionTermComponent {}
