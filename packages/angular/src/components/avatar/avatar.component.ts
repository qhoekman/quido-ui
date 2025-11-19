import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AvatarVariants = {
  size: 'xs' | 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'div[qui-avatar], qui-avatar',
  standalone: true,
  host: {
    'data-testid': 'qui-avatar',
    '[class]': 'getClassList()',
  },
  imports: [AsyncPipe, NgIf],
  template: `
    @let hasFallback = needsFallback | async;
    <ng-content
      select="img[qui-avatar-image]"
      *ngIf="!hasFallback; else fallback"
    ></ng-content>
    <ng-template #fallback>
      <ng-content
        select="div[qui-avatar-fallback], qui-avatar-fallback"
      ></ng-content>
    </ng-template>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: var(--border-radius-full);
      }

      :host(.size--xs) {
        height: var(--spacing-6);
        width: var(--spacing-6);
      }

      :host(.size--sm) {
        height: var(--spacing-8);
        width: var(--spacing-8);
      }

      :host(.size--md) {
        height: var(--spacing-10);
        width: var(--spacing-10);
      }

      :host(.size--lg) {
        height: var(--spacing-12);
        width: var(--spacing-12);
      }
    `,
  ],
})
export class AvatarComponent {
  @Input() size: AvatarVariants['size'] = 'md';
  needsFallback = new BehaviorSubject<boolean>(true);

  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }

  onFallback(needsFallback: boolean) {
    this.needsFallback.next(needsFallback);
  }
}
