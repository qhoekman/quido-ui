import { Component } from '@angular/core';

@Component({
  selector: 'dl[qui-definition-list]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        border-top: 1px solid var(--neutral-100);
      }
    `,
  ],
})
export class DefinitionListComponent {}
