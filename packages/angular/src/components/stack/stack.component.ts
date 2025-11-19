import { Component, Input } from '@angular/core';

export type StackVariants = {
  items: 'center' | 'start' | 'end' | 'between' | 'around' | 'initial';
  align: 'center' | 'start' | 'end' | 'baseline' | 'stretch' | 'initial';
  direction: 'row' | 'column';
  gap: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
};

@Component({
  selector: '[qui-stack]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
      }

      :host(.gap--none) {
        gap: 0;
      }

      :host(.gap--sm) {
        gap: var(--spacing-2);
      }

      :host(.gap--md) {
        gap: var(--spacing-4);
      }

      :host(.gap--lg) {
        gap: var(--spacing-6);
      }

      :host(.gap--xl) {
        gap: var(--spacing-8);
      }

      :host(.gap--2xl) {
        gap: var(--spacing-12);
      }

      :host(.direction--row) {
        flex-direction: row;
      }

      :host(.direction--column) {
        flex-direction: column;
      }

      :host(.items--center) {
        justify-content: center;
      }

      :host(.items--start) {
        justify-content: flex-start;
      }

      :host(.items--end) {
        justify-content: flex-end;
      }

      :host(.items--between) {
        justify-content: space-between;
      }

      :host(.items--around) {
        justify-content: space-around;
      }

      :host(.align--center) {
        align-items: center;
      }

      :host(.align--start) {
        align-items: flex-start;
      }

      :host(.align--end) {
        align-items: flex-end;
      }

      :host(.align--baseline) {
        align-items: baseline;
      }

      :host(.align--stretch) {
        align-items: stretch;
      }
    `,
  ],
})
export class StackComponent {
  @Input() gap: StackVariants['gap'] = 'md';
  @Input() direction: StackVariants['direction'] = 'row';
  @Input() items: StackVariants['items'] = 'initial';
  @Input() align: StackVariants['align'] = 'initial';

  getClassList() {
    return {
      [`gap--${this.gap}`]: this.gap,
      [`direction--${this.direction}`]: this.direction,
      [`items--${this.items}`]: this.items,
      [`align--${this.align}`]: this.align,
    };
  }
}
