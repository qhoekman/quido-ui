import { Component, Input } from '@angular/core';

type ReelButtonVariants = {
  direction: 'prev' | 'next';
};

@Component({
  selector: 'button[qui-reel-button]',
  template: ` <ng-content></ng-content> `,
  standalone: true,
  host: {
    'data-testid': 'qui-reel-button',
    '[class]': 'getClassList()',
  },
  styles: [
    `
      :host {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: var(--color-primary);
        color: var(--color-primary-fg);
        backdrop-filter: blur(5px);
        border: none;
        z-index: 10;
      }

      :host-context(.direction--prev) {
        left: 0;
      }

      :host-context(.direction--next) {
        right: 0;
      }
    `,
  ],
})
export class ReelButtonComponent {
  @Input() direction: ReelButtonVariants['direction'] = 'next';

  getClassList() {
    return {
      [`direction--${this.direction}`]: true,
    };
  }
}
