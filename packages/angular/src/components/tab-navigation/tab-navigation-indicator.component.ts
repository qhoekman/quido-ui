import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IconCaretDownComponent, IconCaretUpComponent } from '../../icons';

import { CdkMenuTrigger } from '@angular/cdk/menu';
@Component({
  selector: 'qui-tab-navigation-indicator',
  imports: [NgIf, IconCaretUpComponent, IconCaretDownComponent],
  template: `
    <ng-container *ngIf="menuTrigger.isOpen(); else caretDown">
      <i qui-icon name="caret-up"></i>
    </ng-container>
    <ng-template #caretDown>
      <i qui-icon name="caret-down"></i>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        width: var(--spacing-4);
        height: var(--spacing-4);
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationIndicatorComponent {
  constructor(protected menuTrigger: CdkMenuTrigger) {}
}
