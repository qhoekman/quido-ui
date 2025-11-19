import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[puiResizable]',
  host: {
    'data-testid': 'qui-resizable',
  },
})
export class ResizableDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, 'resize', 'both');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'auto');
  }
}
