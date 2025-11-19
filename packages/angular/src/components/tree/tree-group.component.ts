import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-tree-group]',
  standalone: true,
  imports: [CommonModule],
  host: {
    role: 'group',
    'data-testid': 'pui-tree-group',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        padding-left: var(--spacing-6);
      }
    `,
  ],
})
export class TreeGroupComponent {}
