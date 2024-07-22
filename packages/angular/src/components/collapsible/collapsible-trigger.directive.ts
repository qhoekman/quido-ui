import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[quiCollapsibleTrigger]',
})
export class CollapsibleTriggerDirective {
  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {
    // Add classes here
    // this.renderer.addClass(this.el.nativeElement, '');
  }
}
