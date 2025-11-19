import { Directive, HostListener } from '@angular/core';
import { ReelService } from './reel.service';

@Directive({
  selector: '[puiReelPrevious]',
  standalone: true,
  host: {
    'data-testid': 'qui-reel-previous',
  },
})
export class ReelPreviousDirective {
  constructor(private reelService: ReelService) {}

  @HostListener('click')
  handleClick() {
    this.reelService.scrollPrev();
  }
}
