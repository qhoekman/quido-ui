import { Component } from '@angular/core';

@Component({
  selector: '[pui-drawer-content]',
  standalone: true,
  host: {
    '[attr.data-testid]': 'drawer__content',
    '[class]': 'getClassList()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      .drawer__content {
        width: 100%;
        transition:
          margin 0.3s ease,
          width 0.3s ease;
      }
    `,
  ],
})
export class DrawerContentComponent {
  getClassList() {
    return {
      drawer__content: true,
    };
  }
}
