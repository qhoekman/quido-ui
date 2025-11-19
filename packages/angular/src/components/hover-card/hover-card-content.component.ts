import { Component, HostListener } from '@angular/core';
import { HoverCardComponent } from './hover-card.component';

@Component({
  selector: '[qui-hover-card-content]',
  host: {
    'data-testid': 'qui-hover-card-content',
  },
  template: `<ng-content></ng-content>`,
  standalone: true,
  styles: [
    `
      :host {
        background-color: var(--color-muted);
        padding: var(--spacing-2);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-md);
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: var(--spacing-1);
        z-index: 1000;
      }
    `,
  ],
})
export class HoverCardContentComponent {
  constructor(private hoverCard: HoverCardComponent) {}

  @HostListener('mouseenter')
  handleMouseEnter() {
    this.hoverCard.show();
  }
}
