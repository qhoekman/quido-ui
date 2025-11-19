import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-tree]',
  standalone: true,
  imports: [CommonModule],
  host: {
    role: 'tree',
    'data-testid': 'pui-tree',
  },
  template: ` <ng-content></ng-content> `,
})
export class TreeComponent {}
