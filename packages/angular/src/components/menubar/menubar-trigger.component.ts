import { CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { NgIf } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { IconCaretDownComponent, IconCaretUpComponent } from '../../icons';

type MenubarTriggerVariants = {
  variant: 'active' | 'default';
};

@Component({
  selector: '[qui-menubar-trigger]',
  imports: [NgIf, IconCaretUpComponent, IconCaretDownComponent],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-menubar-trigger',
  },
  hostDirectives: [CdkMenuItem],
  template: `
    <ng-content></ng-content>
    <ng-container *ngIf="this.menuTrigger.isOpen(); else caretDown">
      <i qui-icon name="caret-up"></i>
    </ng-container>
    <ng-template #caretDown>
      <i qui-icon name="caret-down"></i>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-1);
        margin: var(--spacing-0);
        padding: var(--spacing-1) var(--spacing-2);
        border: none;
        user-select: none;
        background-color: var(--color-popover);
        color: var(--color-popover-fg);
        font-family: var(--font-family-sans);
        font-style: normal;
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-6);
      }

      :host(:hover) {
        background-color: hsl(from var(--color-popover-fg) h s l / 12%);
      }

      :host svg {
        width: var(--spacing-4);
        height: var(--spacing-4);
      }

      :host([aria-expanded='true']),
      :host(.variant--active) {
        color: var(--color-primary);
        font-weight: var(--font-weight-medium);
        border-bottom: 2px solid var(--color-primary);
      }
    `,
  ],
  standalone: true,
})
export class MenubarTriggerComponent {
  @Input() variant: MenubarTriggerVariants['variant'] = 'default';

  constructor(public menuTrigger: CdkMenuTrigger, private el: ElementRef) {}

  getClassList(): string[] {
    return [`variant--${this.variant}`];
  }
}
