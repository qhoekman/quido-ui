import { Component, Input } from '@angular/core';

export type TopBarSectionVariants = {
  items: 'center' | 'start' | 'end' | 'between' | 'around' | 'initial';
  align: 'center' | 'start' | 'end' | 'baseline' | 'stretch' | 'initial';
  direction: 'row' | 'column';
  gap: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'section[qui-top-bar-section], div[qui-top-bar-section]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-top-bar-section',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }

      :host-context(.gap--sm) {
        gap: var(--spacing-2);
      }

      :host-context(.gap--md) {
        gap: var(--spacing-4);
      }

      :host-context(.gap--lg) {
        gap: var(--spacing-6);
      }

      :host-context(.direction--row) {
        flex-direction: row;
      }

      :host-context(.direction--column) {
        flex-direction: column;
      }

      :host-context(.items--center) {
        justify-content: center;
      }

      :host-context(.items--start) {
        justify-content: flex-start;
      }

      :host-context(.items--end) {
        justify-content: flex-end;
      }

      :host-context(.items--between) {
        justify-content: space-between;
      }

      :host-context(.items--around) {
        justify-content: space-around;
      }

      :host-context(.align--center) {
        align-items: center;
      }

      :host-context(.align--start) {
        align-items: flex-start;
      }

      :host-context(.align--end) {
        align-items: flex-end;
      }

      :host-context(.align--baseline) {
        align-items: baseline;
      }

      :host-context(.align--stretch) {
        align-items: stretch;
      }
    `,
  ],
})
export class TopBarSectionComponent {
  @Input() items: TopBarSectionVariants['items'] = 'start';
  @Input() align: TopBarSectionVariants['align'] = 'center';
  @Input() direction: TopBarSectionVariants['direction'] = 'row';
  @Input() gap: TopBarSectionVariants['gap'] = 'md';

  getClassList() {
    return {
      [`items--${this.items}`]: true,
      [`align--${this.align}`]: true,
      [`direction--${this.direction}`]: true,
      [`gap--${this.gap}`]: true,
    };
  }
}
