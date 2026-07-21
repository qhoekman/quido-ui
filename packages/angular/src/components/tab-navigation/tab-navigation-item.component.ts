// src/components/tab-navigation/tab-navigation-link.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'li[qui-tab-navigation-item]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'tab-navigation__item',
  },
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
