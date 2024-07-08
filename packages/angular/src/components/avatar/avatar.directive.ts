import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: 'h-10 w-10',
        sm: 'h-9 w-9',
        lg: 'h-11 w-11',
      },
    },
  },
);

@Directive({
  selector: '[quiAvatar]',
})
export class AvatarDirective implements OnInit, OnChanges {
  @Input() variant: VariantProps<typeof avatarVariants>['variant'] = 'default';
  @Input() size: VariantProps<typeof avatarVariants>['size'] = 'default';
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateClasses();
  }

  private updateClasses() {
    const classes = avatarVariants({ variant: this.variant, size: this.size });
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `${classes} ${this.className}`,
    );
  }
}
