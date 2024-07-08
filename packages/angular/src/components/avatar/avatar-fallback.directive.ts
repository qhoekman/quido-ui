import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[quiAvatarFallback]',
})
export class AvatarFallbackDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `flex h-full w-full items-center justify-center rounded-full bg-muted ${this.className}`,
    );
  }
}
