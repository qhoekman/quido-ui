import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[qui-tree]',
  standalone: true,
  imports: [CommonModule],
  host: {
    role: 'tree',
    'data-testid': 'qui-tree',
  },
  template: ` <ng-content></ng-content> `,
})
export class TreeComponent {}
