import { Component, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { ReelService } from './reel.service';

@Component({
  selector: 'div[pui-reel-content]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-reel-content',
  },
  styles: [
    `
      :host {
        display: flex;
        overflow: auto hidden;
        scroll-snap-type: x mandatory;
      }
    `,
  ],
})
export class ReelContentComponent implements AfterViewInit {
  constructor(
    @Inject(ReelService) private reelService: ReelService,
    private el: ElementRef,
  ) {}

  ngAfterViewInit() {
    this.reelService.setReelRef(this.el);
  }
}
