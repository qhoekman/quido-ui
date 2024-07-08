import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

@Directive({
  selector: '[quiLabel]',
  standalone: true,
})
export class LabelDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
  }

  private updateClasses() {
    const classes = labelVariants();
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `${classes} ${this.className}`,
    );
  }
}
