import { CdkMenuBar } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: '[qui-menubar]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-menubar',
  },
  hostDirectives: [CdkMenuBar],
  styles: [
    `
      :host {
        display: flex;
        gap: var(--spacing-2);
      }
    `,
  ],
  standalone: true,
})
export class MenubarComponent {}
