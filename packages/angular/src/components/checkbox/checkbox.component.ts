import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CheckboxIndicatorComponent } from './checkbox-indicator.component';

@Component({
  selector: 'button[pui-checkbox]',
  imports: [CheckboxIndicatorComponent],
  host: {
    type: 'button',
    role: 'checkbox',
    '[attr.aria-checked]': 'checked',
    '[attr.data-state]': 'checked ? "checked" : "unchecked"',
  },
  standalone: true,
  template: `
    <span pui-checkbox-indicator [checked]="checked"></span>
    <input
      type="hidden"
      [attr.name]="elementRef.nativeElement.getAttribute('name')"
      [value]="checked ? 'true' : 'false'"
    />
  `,
  styles: [
    `
      :host {
        height: var(--spacing-4);
        width: var(--spacing-4);
        flex-shrink: 0;
        border-radius: var(--border-radius-sm);
        border: 1px solid var(--color-primary);
        box-shadow: var(--box-shadow-default);
        outline: none;
        transition: background-color 0.2s;
        cursor: pointer;
        padding: 0;
      }

      :host:focus-visible {
        outline: none;
        box-shadow: 0 0 0 1px var(--color-ring);
      }

      :host[aria-checked='true'] {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }

      :host:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ],
})
export class CheckboxComponent {
  @Input() checked = false;

  constructor(public elementRef: ElementRef) {}

  @HostListener('click')
  toggleCheck() {
    if (!this.elementRef.nativeElement.disabled) {
      this.checked = !this.checked;
    }
  }
}
