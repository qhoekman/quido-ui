import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[quiTextarea]',
  standalone: true,
})
export class TextareaDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
  }

  private updateClasses() {
    const baseClasses =
      'flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    const classes = `${baseClasses} ${this.className}`;
    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
