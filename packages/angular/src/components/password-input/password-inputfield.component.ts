import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { PasswordInputButtonComponent } from './password-input-button.component';
import { BehaviorSubject } from 'rxjs';
import { PasswordInputComponent } from './password-input.component';
import { IconEyeClosedComponent, IconEyeOpenComponent } from '../../icons';

export type PasswordInputVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'pui-password-inputfield',
  standalone: true,
  imports: [CommonModule, PasswordInputButtonComponent, IconEyeOpenComponent, IconEyeClosedComponent],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-password-inputfield',
  },
  template: `
    @let canSeePassword = isPasswordVisible | async;
    <ng-content select="input"></ng-content>
    <button pui-password-input-button (click)="togglePasswordVisibility()">
      <i pui-icon name="eye-closed" [class]="getIconClassList()" *ngIf="canSeePassword === false"></i>
      <i pui-icon name="eye-open" [class]="getIconClassList()" *ngIf="canSeePassword === true"></i>
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-border);
        background-color: var(--color-input);
        color: var(--color-input-fg);
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
export class PasswordInputFieldComponent implements AfterViewInit {
  @Input() size: PasswordInputVariants['size'] = 'md';
  @ContentChild(PasswordInputComponent) passwordInput!: PasswordInputComponent;
  isPasswordVisible = new BehaviorSubject<boolean>(false);

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.isPasswordVisible.subscribe((value) => {
      if (value) {
        this.passwordInput.elementRef.nativeElement.type = 'text';
      } else {
        this.passwordInput.elementRef.nativeElement.type = 'password';
      }
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.next(!this.isPasswordVisible.value);
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
