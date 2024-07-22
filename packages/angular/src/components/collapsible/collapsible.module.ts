import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapsibleContentDirective } from './collapsible-content.directive';
import { CollapsibleTriggerDirective } from './collapsible-trigger.directive';
import { CollapsibleDirective } from './collapsible.directive';

@NgModule({
  declarations: [
    CollapsibleDirective,
    CollapsibleTriggerDirective,
    CollapsibleContentDirective,
  ],
  imports: [CommonModule],
  exports: [
    CollapsibleDirective,
    CollapsibleTriggerDirective,
    CollapsibleContentDirective,
  ],
})
export class CollapsibleModule {}
