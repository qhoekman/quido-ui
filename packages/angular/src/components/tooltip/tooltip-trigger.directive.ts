import { Directive, ElementRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pui-tooltip-trigger]',
  standalone: true,
})
export class TooltipTriggerDirective {
  @Input() tooltipContentFor!: TemplateRef<unknown>;

  constructor(public elementRef: ElementRef) {}
}
