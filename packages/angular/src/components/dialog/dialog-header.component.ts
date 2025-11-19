import { Component } from '@angular/core';

@Component({
  selector: '[pui-dialog-header]',
  standalone: true,
  host: {
    'data-testid': 'pui-dialog-header',
  },
  template: `<ng-content select="[pui-dialog-title]"></ng-content>
    <ng-content select="[pui-dialog-description]"></ng-content> `,
})
export class DialogHeaderComponent {}
