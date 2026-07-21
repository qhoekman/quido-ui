import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[qui-pagination-link]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pagination__link',
    '[attr.aria-current]': 'isActive ? "page" : null',
  },
  styleUrls: ['./pagination-link.component.css'],
})
export class PaginationLinkComponent {
  @Input() isActive = false;
}
