import { Directive, HostListener } from '@angular/core';
import { HoverCardComponent } from './hover-card.component';

@Directive({
  selector: '[puiHoverCardTrigger]',
  host: {
    'data-testid': 'qui-hover-card-trigger',
  },
  standalone: true,
})
export class HoverCardTriggerDirective {
  constructor(private hoverCard: HoverCardComponent) {}

  @HostListener('mouseenter')
  handleMouseEnter() {
    this.hoverCard.show();
  }

  @HostListener('focus')
  handleFocus() {
    this.hoverCard.show();
  }

  @HostListener('blur')
  handleBlur() {
    this.hoverCard.hide();
  }
}
