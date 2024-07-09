import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-md px-2.5 py-2.5 text-center text-xs',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-fg',
        destructive: 'bg-destructive text-destructive-fg',
        outline: 'border border-input hover:bg-accent',
        secondary: 'bg-secondary text-secondary-fg',
      },
      size: {
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

@Directive({
  selector: '[quiTag]',
  standalone: true,
})
export class TagDirective implements OnInit {
  @Input() variant: VariantProps<typeof tagVariants>['variant'] = 'default';
  @Input() size: VariantProps<typeof tagVariants>['size'] = 'md';
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
  }

  private updateClasses() {
    const classes = tagVariants({ variant: this.variant, size: this.size });
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `${classes} ${this.className}`,
    );
  }
}
