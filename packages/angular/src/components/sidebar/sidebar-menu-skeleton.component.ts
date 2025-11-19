import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SkeletonComponent } from '../skeleton/skeleton.component';

export type SidebarMenuSkeletonVariants = {
  variant: 'default' | 'with-icon';
};

@Component({
  selector: 'div[pui-sidebar-menu-skeleton]',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  host: {
    'data-sidebar': 'menu-skeleton',
    'data-testid': 'pui-sidebar-menu-skeleton',
  },
  template: `
    <ng-container *ngIf="variant === 'with-icon'">
      <div pui-skeleton class="skeleton-icon" [attr.data-sidebar]="'menu-skeleton-icon'"></div>
    </ng-container>
    <div pui-skeleton class="skeleton-text" [attr.data-sidebar]="'menu-skeleton-text'"></div>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
        align-items: center;
        border-radius: var(--border-radius-md);
        height: var(--spacing-8);
      }

      .skeleton-icon {
        width: var(--spacing-4);
        height: var(--spacing-4);
      }

      .skeleton-text {
        flex: 1;
        height: var(--spacing-4);
        max-width: var(--skeleton-width);
      }
    `,
  ],
})
export class SidebarMenuSkeletonComponent {
  @Input() variant: SidebarMenuSkeletonVariants['variant'] = 'default';

  @HostBinding('style.--skeleton-width')
  get skeletonWidth() {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }
}
