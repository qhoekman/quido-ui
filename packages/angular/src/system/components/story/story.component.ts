import { Component, Input } from '@angular/core';

type StoryVariants = {
  variant: 'default' | 'centered';
};

@Component({
  selector: 'pui-story, [pui-story]',
  host: {
    '[class]': 'getClassList()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        padding: var(--spacing-3);
        max-width: var(--breakpoint-sm);
        margin: 0 auto;
      }

      :host-context(.variant--centered) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  standalone: true,
})
export class StoryComponent {
  @Input() variant: StoryVariants['variant'] = 'centered';

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
    };
  }
}
