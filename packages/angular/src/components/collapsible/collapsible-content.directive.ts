import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[quiCollapsibleContent]',
  standalone: true,
})
export class CollapsibleContentDirective {
  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.el.nativeElement, 'transition-all');
  }
}
