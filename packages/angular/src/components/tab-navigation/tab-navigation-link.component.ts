// src/components/tab-navigation/tab-navigation-link.component.ts
import { CdkMenuItem } from '@angular/cdk/menu';
import { NgIf } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

type TabNavigationLinkVariants = {
  variant: 'link' | 'border' | 'pill';
  state: 'default' | 'active';
};

@Component({
  selector: 'a[pui-tab-navigation-link], button[pui-tab-navigation-link]',
  host: {
    '[class]': 'getClassList()',
    '[attr.aria-disabled]': 'disabled ? true : null',
  },
  imports: [NgIf],
  hostDirectives: [CdkMenuItem],
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        position: relative;
        cursor: pointer;
        transition: all 0.2s;
        z-index: var(--z-index-10);
      }

      :host.variant--link {
        display: flex;
        flex-shrink: 0;
        user-select: none;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        padding: var(--spacing-1) var(--spacing-3);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-foreground);
        border-bottom: 2px solid transparent;
      }
      :host.variant--link:hover {
        border-color: var(--color-primary);
      }
      :host(.variant--link[aria-expanded='true']),
      :host.variant--link.state--active {
        border-color: var(--color-primary);
        color: var(--color-primary);
      }
      :host(.variant--link[disabled]),
      :host.variant--link[aria-disabled='true'] {
        pointer-events: none;
        color: var(--color-muted-fg);
        opacity: 0.5;
      }

      :host.variant--pill {
        display: flex;
        gap: var(--spacing-2);
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 0 none;
        border-radius: var(--border-radius-md);
        padding: var(--spacing-1) var(--spacing-3);
        background-color: var(--color-background);
        color: var(--color-card-fg);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: all 0.3s;
        outline: none;
      }
      :host.variant--pill:hover {
        background-color: hsl(from var(--color-background) h s l / 66%);
        color: var(--color-foreground);
      }
      :host(.variant--pill[aria-expanded='true']),
      :host.variant--pill.state--active {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }
      :host(.variant--pill[disabled]),
      :host.variant--pill[aria-disabled='true'] {
        pointer-events: none;
        background-color: var(--color-muted);
        color: var(--color-muted-fg);
        opacity: 0.5;
      }

      :host.variant--border {
        display: flex;
        gap: var(--spacing-2);
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 0 none;
        padding: var(--spacing-1) var(--spacing-3);
        border: var(--border-width-default) solid var(--color-border);
        background-color: var(--color-popover);
        color: var(--color-popover-fg);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: all 0.3s;
        outline: none;
      }

      :host.variant--border:hover {
        border-color: var(--color-muted-fg);
      }

      :host.variant--border.state--active {
        color: var(--color-primary);
        background-color: var(--color-background);
        border: var(--border-width-default) solid var(--color-border);
        border-bottom: 0 none;
        &:hover {
          border-color: var(--color-muted-fg);
        }
      }

      :host(.variant--border[aria-expanded='true']) {
        border: var(--border-width-default) solid var(--color-border);
        &:hover {
          border-color: var(--color-foreground);
        }
      }

      :host(.variant--border[disabled]),
      :host.variant--border[aria-disabled='true'] {
        pointer-events: none;
        opacity: 0.5;
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationLinkComponent {
  @Input() variant: TabNavigationLinkVariants['variant'] = 'link';
  @Input() state: TabNavigationLinkVariants['state'] = 'default';
  constructor(private el: ElementRef) {}

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`state--${this.state}`]: true,
    };
  }
}
