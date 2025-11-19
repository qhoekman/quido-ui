import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IconChevronDownComponent,
  IconChevronRightComponent,
} from '../../icons';

@Component({
  selector: 'qui-tree-item-indicator',
  standalone: true,
  host: {
    'data-testid': 'qui-tree-item-indicator',
  },
  imports: [IconChevronRightComponent, IconChevronDownComponent, CommonModule],
  template: `<ng-container *ngIf="!empty; else noContent">
      <ng-container *ngIf="expanded; else collapsed">
        <i qui-icon name="chevron-down"></i>
      </ng-container>
      <ng-template #collapsed>
        <i qui-icon name="chevron-right"></i>
      </ng-template>
    </ng-container>
    <ng-template #noContent>
      <div class="empty"></div>
    </ng-template> `,
  styles: [
    `
      :host {
        margin-right: var(--spacing-2);
      }

      :host .empty {
        display: inline-block;
        width: var(--spacing-4);
        height: var(--spacing-4);
      }
    `,
  ],
})
export class TreeItemIndicatorComponent {
  @Input() expanded = false;
  @Input() empty = false;
}
