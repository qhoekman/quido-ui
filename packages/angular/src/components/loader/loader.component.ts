import { Component, Input } from '@angular/core';
import { IconUpdateComponent } from '../../icons';

export type LoaderVariants = {
  variant: 'spinner';
};

@Component({
  selector: '[qui-loader]',
  standalone: true,
  imports: [IconUpdateComponent],
  host: {
    'data-testid': 'qui-loader',
    '[class]': 'getClassList()',
  },
  template: `
    <ng-content></ng-content>
    <i *ngIf="active && variant === 'spinner'" qui-icon name="update"> </i>
  `,
  styles: [
    `
      :host {
        display: none;
        transition: opacity 0.3s;
        opacity: 0;
      }

      :host(.variant--spinner) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        gap: var(--spacing-2);
        border-radius: var(--border-radius-md);
        animation: spin 3.33s linear infinite;
      }

      :host(.active) {
        opacity: 1;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoaderComponent {
  @Input() active = false;
  @Input() variant: LoaderVariants['variant'] = 'spinner';

  getClassList() {
    return {
      active: this.active,
      'variant--spinner': this.variant === 'spinner',
    };
  }
}
