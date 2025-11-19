import { Directive, HostListener } from '@angular/core';
import { ReelService } from './reel.service';

@Directive({
  selector: '[puiReelNext]',
  standalone: true,
  host: {
    'data-testid': 'qui-reel-next',
  },
})
export class ReelNextDirective {
  constructor(private reelService: ReelService) {}

  @HostListener('click')
  handleClick() {
    this.reelService.scrollNext();
  }
}
