import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[pui-pagination-link]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    '[attr.aria-current]': 'isActive ? "page" : null',
  },
  styleUrls: ['./pagination-link.component.css'],
})
export class PaginationLinkComponent {
  @Input() isActive = false;
}
