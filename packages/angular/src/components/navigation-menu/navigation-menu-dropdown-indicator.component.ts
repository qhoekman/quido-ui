import { CdkMenuTrigger } from '@angular/cdk/menu';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IconChevronDownComponent, IconChevronUpComponent } from '../../icons';

@Component({
  selector: 'pui-navigation-menu-dropdown-indicator',
  imports: [NgIf, IconChevronUpComponent, IconChevronDownComponent],
  template: `
    <ng-container *ngIf="this.menuTrigger.isOpen(); else caretDown">
      <i pui-icon name="chevron-up"></i>
    </ng-container>
    <ng-template #caretDown>
      <i pui-icon name="chevron-down"></i>
    </ng-template>
  `,
  styles: [
    `
      :host i {
        margin-top: var(--spacing-1);
        width: var(--spacing-4);
        height: var(--spacing-4);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuDropdownIndicatorComponent {
  constructor(public menuTrigger: CdkMenuTrigger) {}
}
