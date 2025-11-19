import { Component, Input } from '@angular/core';

export type SeparatorVariants = {
  orientation: 'horizontal' | 'vertical';
};

@Component({
  selector: '[pui-separator]',
  template: '',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-separator',
  },
  styles: [
    `
      :host {
        display: block;
        background-color: var(--border-color, #e0e0e0);
      }

      :host-context(.variant--horizontal) {
        height: 1px;
        width: 100%;
      }

      :host-context(.variant--vertical) {
        width: 1px;
        height: 100%;
      }
    `,
  ],
  standalone: true,
})
export class SeparatorComponent {
  @Input() orientation: SeparatorVariants['orientation'] = 'horizontal';

  getClassList() {
    return {
      'pui-separator': true,
      [`variant--${this.orientation}`]: true,
    };
  }
}
