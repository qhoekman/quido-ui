import { cn } from '@/lib/utils';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

export type ButtonProps = Partial<HTMLButtonElement> & {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
};

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-fg hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-fg hover:bg-secondary/90',
        destructive: 'bg-danger text-danger-fg hover:bg-danger/90',
        outline:
          'border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-foreground',
        ghost: 'hover:bg-neutral-100 hover:text-foreground/90',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

@Directive({
  selector: 'button[quiButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  private className = '';
  @Input() variant: VariantProps<typeof buttonVariants>['variant'] = 'default';
  @Input() size: VariantProps<typeof buttonVariants>['size'] = 'default';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
    this.className = this.el.nativeElement.className;
  }

  ngOnChanges() {
    this.updateClasses();
  }

  private updateClasses() {
    const classList = buttonVariants({
      variant: this.variant,
      size: this.size,
    });
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      cn(this.className, classList),
    );
  }
}
