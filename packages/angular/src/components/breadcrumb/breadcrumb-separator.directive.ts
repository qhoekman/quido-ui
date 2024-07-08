import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[quiBreadcrumbSeparator]',
})
export class BreadcrumbSeparatorDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `mx-1 [&>svg]:size-4 ${this.className}`,
    );
  }
}
