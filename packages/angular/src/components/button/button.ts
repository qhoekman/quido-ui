import { cn } from '@/lib/utils';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';

export interface ButtonProps extends VariantProps<typeof buttonVariants> {}

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
  }
);

@Component({
  selector: 'q-button',
  standalone: true,
  template: `<button
    [type]="type"
    [disabled]="disabled"
    [class]="classes"
    (click)="handleClick($event)"
  >
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {
  @Input() public variant: VariantProps<typeof buttonVariants>['variant'] =
    'default';
  @Input() public size: VariantProps<typeof buttonVariants>['size'] = 'default';
  @Input() public disabled = false;
  @Input() public type!: 'button' | 'submit' | 'reset';
  @Input() public className = '';
  @Output() public onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }

  get classes() {
    return cn(
      buttonVariants({
        variant: this.variant,
        size: this.size,
      }),
      this.className
    );
  }
}
