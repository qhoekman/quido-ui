import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'button[qui-radio-group-item]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      *ngIf="checked"
      class="indicator"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="3.3" fill="currentColor"></circle>
    </svg>
    <input
      type="hidden"
      [attr.id]="elementRef.nativeElement.id"
      [attr.name]="elementRef.nativeElement.name"
      [value]="value"
    />
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 1px solid var(--color-primary);
        box-shadow: var(--box-shadow-default);
        cursor: pointer;
        transition: background-color 0.2s;
        outline: none;
        padding: 0;
      }

      :host:focus-visible {
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

      :host svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  host: {
    type: 'button',
    role: 'radio',
    'data-testid': 'qui-radio-group-item',
    '[attr.aria-checked]': 'checked',
    '[attr.data-state]': 'checked ? "checked" : "unchecked"',
  },
})
export class RadioGroupItemComponent {
  @Input() checked = false;
  @Input() value: string | number | null = null;
  @Output() valueSelect = new EventEmitter<string | number | null>();

  constructor(public elementRef: ElementRef) {}

  @HostListener('click')
  toggleCheck() {
    if (!this.elementRef.nativeElement.disabled) {
      this.valueSelect.emit(this.value);
    }
  }
}
