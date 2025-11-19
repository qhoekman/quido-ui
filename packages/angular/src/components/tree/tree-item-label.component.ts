import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[qui-tree-item-label]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-tree-item-label',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        flex-grow: 1;
      }
    `,
  ],
})
export class TreeItemLabelComponent {}
