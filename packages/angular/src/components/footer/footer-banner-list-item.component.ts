import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-footer-banner-list-item]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-banner-list-item',
  },
  imports: [CommonModule],
  styles: [
    `
      :host {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class FooterBannerListItemComponent {}
