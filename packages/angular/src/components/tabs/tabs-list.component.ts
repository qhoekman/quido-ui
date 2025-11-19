import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabsTriggerComponent } from './tabs-trigger.component';

@Component({
  selector: '[pui-tabs-list]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-tabs-list',
  },
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        width: fit-content;
        border-radius: var(--border-radius-md);
        color: var(--color-muted-fg);
        box-shadow: var(--box-shadow-default);
      }

      :host ::ng-deep a,
      :host ::ng-deep button {
        position: relative;
        border-radius: 0;
        margin: 0;
      }

      :host ::ng-deep a:first-child,
      :host ::ng-deep button:first-child {
        border-top-left-radius: var(--border-radius-md);
        border-bottom-left-radius: var(--border-radius-md);
      }

      :host ::ng-deep a:last-child,
      :host ::ng-deep button:last-child {
        border-top-right-radius: var(--border-radius-md);
        border-bottom-right-radius: var(--border-radius-md);
      }
    `,
  ],
  standalone: true,
})
export class TabsListComponent {
  @ContentChildren(TabsTriggerComponent)
  tabTriggers!: QueryList<TabsTriggerComponent>;
}
