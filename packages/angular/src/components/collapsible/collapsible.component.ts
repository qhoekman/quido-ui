import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'div[pui-collapsible]',
  standalone: true,
  imports: [CdkAccordionModule, CommonModule],
  template: `
    <div data-testid="pui-collapsible" cdkAccordion [class.collapsible--expanded]="expanded">
      <ng-content select="[pui-collapsible-trigger]"></ng-content>
      <ng-container *ngIf="expanded">
        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
      </ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      :host-context(.collapsible--expanded) .collapsible__content {
        display: block;
      }
    `,
  ],
})
export class CollapsibleComponent extends CdkAccordionItem {
  @ContentChild('content') contentTemplate!: TemplateRef<unknown>;
}
