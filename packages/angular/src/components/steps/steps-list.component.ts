import { Component } from '@angular/core';

@Component({
  selector: 'pui-steps-list',
  standalone: true,
  host: {
    'data-testid': 'pui-steps-list',
  },
  template: `
    <div class="steps-list">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .steps-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    `,
  ],
})
export class StepsListComponent {}
