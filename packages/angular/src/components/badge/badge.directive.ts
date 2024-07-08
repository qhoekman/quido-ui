import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
  OnChanges
} from '@angular/core'
import { cva, VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-fg shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-fg hover:bg-secondary/80',
        destructive: 'border-transparent bg-danger text-danger-fg shadow hover:bg-danger/80',
        outline: 'text-foreground'
      },
      size: {
        default: 'h-6',
        sm: 'h-5',
        lg: 'h-7'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

@Directive({
  selector: '[quiBadge]',
  standalone: true
})
export class BadgeDirective implements OnInit, OnChanges {
  @Input() variant: VariantProps<typeof badgeVariants>['variant'] = 'default'
  @Input() size: VariantProps<typeof badgeVariants>['size'] = 'default'
  @Input() className = ''

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.updateClasses()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateClasses()
  }

  private updateClasses() {
    const classes = badgeVariants({ variant: this.variant, size: this.size })
    this.renderer.setAttribute(this.el.nativeElement, 'class', `${classes} ${this.className}`)
  }
}
