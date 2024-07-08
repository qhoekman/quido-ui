import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[quiBreadcrumbItem]',
})
export class BreadcrumbItemDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `flex items-center ${this.className}`,
    );
  }
}
