import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { CollapsibleComponent } from '../collapsible/collapsible.component';
import { TreeItemIndicatorComponent } from './tree-item-indicator.component';
import { TreeGroupComponent } from './tree-group.component';
import { CollapsibleTriggerComponent } from '../collapsible/collapsible-trigger.component';
import { CollapsibleContentComponent } from '../collapsible/collapsible-content.component';

@Component({
  selector: '[pui-tree-item]',
  standalone: true,
  imports: [
    CommonModule,
    CollapsibleComponent,
    TreeItemIndicatorComponent,
    CollapsibleTriggerComponent,
    CollapsibleContentComponent,
  ],
  template: `
    <div
      pui-collapsible
      #collapsible
      [expanded]="expanded"
      role="treeitem"
      [attr.aria-expanded]="expanded"
      [attr.aria-selected]="false"
    >
      <div pui-collapsible-trigger (click)="collapsible.toggle()">
        <div
          role="button"
          data-testid="pui-tree-item-trigger"
          class="tree-item"
          (click)="handleClick()"
          (keydown)="handleKeydown($event)"
          tabindex="0"
        >
          <pui-tree-item-indicator [empty]="!hasGroups()" [expanded]="collapsible.expanded"></pui-tree-item-indicator>
          <ng-content select="[pui-tree-item-icon]"></ng-content>
          <ng-content select="[pui-tree-item-label]"></ng-content>
        </div>
      </div>
      <div pui-collapsible-content>
        <ng-content select="[pui-tree-group]"></ng-content>
      </div>
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
  @ContentChild(CollapsibleComponent) collapsible!: CollapsibleComponent;
  @ContentChildren(TreeGroupComponent, { descendants: true })
  groups: QueryList<TreeGroupComponent> = new QueryList<TreeGroupComponent>();

  hasGroups() {
    return this.groups.length > 0;
  }

  handleClick() {
    this.collapsible.toggle();
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.collapsible.toggle();
    }
  }
}
