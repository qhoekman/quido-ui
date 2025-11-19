import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NumberInputButtonComponent } from './number-input-button.component';
import { NumberInputComponent } from './number-input.component';
import {
  IconChevronLeftComponent,
  IconChevronRightComponent,
} from '../../icons';

export type NumberInputFieldVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'qui-number-inputfield',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-number-inputfield',
  },
  imports: [
    CommonModule,
    InputComponent,
    NumberInputButtonComponent,
    IconChevronLeftComponent,
    IconChevronRightComponent,
  ],
  template: `
    <button
      type="button"
      qui-number-input-button
      aria-label="Decrement"
      (click)="handleDecrement()"
      [size]="size"
    >
      <i [class]="getIconClassList()" qui-icon name="chevron-left"> </i>
    </button>
    <ng-content select="[qui-number-input]"></ng-content>
    <button
      qui-number-input-button
      [size]="size"
      aria-label="Increment"
      (click)="handleIncrement()"
    >
      <i [class]="getIconClassList()" qui-icon name="chevron-right"> </i>
    </button>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        align-items: stretch;
      }

      :host-context(.size--sm) {
        height: var(--spacing-3);
        max-width: var(--spacing-24);
      }

      :host-context(.size--md) {
        height: var(--spacing-5);
        max-width: var(--spacing-32);
      }

      :host-context(.size--lg) {
        height: var(--spacing-7);
        max-width: var(--spacing-48);
      }

      .icon.size--sm {
        width: var(--spacing-3);
        height: var(--spacing-3);
      }

      .icon.size--md {
        width: var(--spacing-4);
        height: var(--spacing-4);
      }

      .icon.size--lg {
        width: var(--spacing-5);
        height: var(--spacing-5);
      }
    `,
  ],
})
export class NumberInputFieldComponent implements AfterViewInit, OnChanges {
  @Input() size: NumberInputFieldVariants['size'] = 'md';
  @ContentChild(NumberInputComponent, { static: true })
  inputElement!: NumberInputComponent;

  ngAfterViewInit() {
    this.inputElement.size = this.size;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['size']) {
      this.inputElement.size = this.size;
    }
  }

  handleIncrement() {
    if (this.inputElement.elementRef.nativeElement) {
      this.inputElement.elementRef.nativeElement.stepUp();
    }
  }

  handleDecrement() {
    if (this.inputElement.elementRef.nativeElement) {
      this.inputElement.elementRef.nativeElement.stepDown();
    }
  }
  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }

  getIconClassList() {
    return {
      icon: true,
      [`size--${this.size}`]: true,
    };
  }
}
