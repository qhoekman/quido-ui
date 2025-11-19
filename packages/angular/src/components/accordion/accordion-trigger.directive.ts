import { Directive, HostListener, Input } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Directive({
  selector: '*[pui-accordion-trigger]',
  host: {
    'data-testid': 'pui-accordion-trigger',
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
