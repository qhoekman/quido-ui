import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-tree-item-icon]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-tree-item-icon',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        margin-right: 0.5rem;
      }
    `,
  ],
})
export class TreeItemIconComponent {}
