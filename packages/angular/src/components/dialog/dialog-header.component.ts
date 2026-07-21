import { Component } from '@angular/core';

@Component({
  selector: '[qui-dialog-header]',
  standalone: true,
  host: {
    'data-testid': 'dialog__header',
  },
  template: `<ng-content select="[qui-dialog-title]"></ng-content>
    <ng-content select="[qui-dialog-description]"></ng-content> `,
})
export class DialogHeaderComponent {}
