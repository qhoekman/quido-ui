import { Directive, HostListener } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[puiPopoverTrigger]',
  host: {
    'data-testid': 'popover__trigger',
  },
  standalone: true,
})
export class PopoverTriggerDirective {
  constructor(private popover: PopoverComponent) {}

  @HostListener('click')
  togglePopover() {
    if (this.popover.overlayRef.hasAttached()) {
      this.popover.hide();
    } else {
      this.popover.show();
    }
  }
}
