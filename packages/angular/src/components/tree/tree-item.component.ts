import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CollapsibleComponent } from '../collapsible/collapsible.component';
import { TreeItemIndicatorComponent } from './tree-item-indicator.component';
import { TreeGroupComponent } from './tree-group.component';
import { CollapsibleTriggerComponent } from '../collapsible/collapsible-trigger.component';
import { CollapsibleContentComponent } from '../collapsible/collapsible-content.component';

@Component({
  selector: '[qui-tree-item]',
  standalone: true,
  host: {
    'data-testid': 'tree__item',
  },
  imports: [
    CommonModule,
    CollapsibleComponent,
    TreeItemIndicatorComponent,
    CollapsibleTriggerComponent,
    CollapsibleContentComponent,
  ],
  template: `
    <div
      qui-collapsible
      [expanded]="expanded"
      role="treeitem"
      [attr.aria-expanded]="expanded"
      [attr.aria-selected]="false"
    >
      <div qui-collapsible-trigger>
        <div
          role="button"
          data-testid="tree__item-trigger"
          class="tree-item"
          (click)="handleClick()"
          (keydown)="handleKeydown($event)"
          tabindex="0"
        >
          <qui-tree-item-indicator
            [empty]="!hasGroups()"
            [expanded]="expanded"
          ></qui-tree-item-indicator>
          <ng-content select="[qui-tree-item-icon]"></ng-content>
          <ng-content select="[qui-tree-item-label]"></ng-content>
        </div>
      </div>
      <ng-template #content>
        <div qui-collapsible-content>
          <ng-content select="[qui-tree-group]"></ng-content>
        </div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .tree-item {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class TreeItemComponent {
  @Input() expanded = false;
  @ContentChildren(TreeGroupComponent, { descendants: true })
  groups: QueryList<TreeGroupComponent> = new QueryList<TreeGroupComponent>();

  hasGroups() {
    return this.groups.length > 0;
  }

  handleClick() {
    this.expanded = !this.expanded;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.expanded = !this.expanded;
    }
  }
}
