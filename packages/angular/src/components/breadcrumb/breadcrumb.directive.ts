import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[quiBreadcrumb]'
})
export class BreadcrumbDirective implements OnInit {
  @Input() className = ''

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `flex items-center text-sm ${this.className}`
    )
    this.renderer.setAttribute(this.el.nativeElement, 'aria-label', 'Breadcrumb')
  }
}
