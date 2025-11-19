// src/components/tab-navigation/tab-navigation-link.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-tab-navigation-item]',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationItemComponent {}
