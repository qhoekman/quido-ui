import { Directive, HostListener, Input } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Directive({
  selector: '*[qui-accordion-trigger]',
  host: {
    'data-testid': 'qui-accordion-trigger',
  },
  standalone: true,
})
export class AccordionTriggerDirective {
  @Input() item!: AccordionItemComponent;

  @HostListener('click')
  toggleOpen() {
    this.item.toggleOpen();
  }
}
