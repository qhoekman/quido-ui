import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { AfterContentInit, Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabsListComponent } from './tabs-list.component';

@Component({
  selector: '[pui-tabs]',
  imports: [NgTemplateOutlet, AsyncPipe],
  template: `
    <ng-content select="[pui-tabs-list]">
      <ng-content select="[pui-tabs-trigger]"></ng-content>
    </ng-content>
    <ng-container *ngTemplateOutlet="tabsContent | async"></ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius-md);
        background-color: var(--color-muted);
        padding: var(--spacing-1);
        color: var(--color-background-fg);
      }
    `,
  ],
  standalone: true,
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(TabsListComponent) tabsList!: TabsListComponent;
  @Input() initialTab?: TemplateRef<unknown>;
  tabsContent = new BehaviorSubject<TemplateRef<unknown> | null>(null);

  ngOnInit() {
    if (this.initialTab) {
      this.tabsContent.next(this.initialTab);
    }
    this.tabsContent.subscribe((tab) => {
      if (!this.tabsList) return;
      this.tabsList.tabTriggers.forEach((trigger) => {
        if (trigger.tabContentFor === tab) {
          trigger.variant = 'active';
        } else {
          trigger.variant = 'default';
        }
      });
    });
  }

  ngOnDestroy() {
    this.tabsContent.unsubscribe();
  }

  ngAfterContentInit() {
    this.tabsList.tabTriggers.forEach((trigger, i) => {
      if (!trigger.tabContentFor) return;
      // If no initial tab is set, and no tab is currently active, set the first tab as active
      if (!this.initialTab && !this.tabsContent.value && i === 0) {
        this.tabsContent.next(trigger.tabContentFor);
      }
      // Set the tab content to the trigger's tab content when the trigger is clicked
      trigger.setClickListener(() => {
        this.tabsContent.next(trigger.tabContentFor);
      });
    });
  }
}
