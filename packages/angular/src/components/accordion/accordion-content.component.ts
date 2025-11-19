import { Component, Input } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: '[qui-accordion-content]',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-accordion-content',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        padding: var(--spacing-3);
      }

      :host-context(.variant--open) {
        display: block;
        visibility: visible;
      }

      :host-context(.variant--closed) {
        display: none;
        visibility: hidden;
      }
    `,
  ],
  standalone: true,
})
export class AccordionContentComponent {
  @Input() item!: AccordionItemComponent;

  getClassList() {
    return [this.item.isOpen ? 'variant--open' : 'variant--closed'].join(' ');
  }
}
