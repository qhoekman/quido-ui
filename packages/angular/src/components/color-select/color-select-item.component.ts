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
  selector: 'button[qui-color-select-item]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      data-testid="qui-color-select-item-color-indicator"
      class="color-indicator"
      [style.backgroundColor]="color"
      [class.checked]="checked"
    ></div>
    <input
      data-testid="qui-color-select-item-input"
      type="hidden"
      [attr.id]="elementRef.nativeElement.id"
      [attr.name]="elementRef.nativeElement.name"
      [value]="color"
    />
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s;
        border: none;
        outline: none;
        padding: 0;
      }

      :host:focus-visible {
        box-shadow: 0 0 0 1px var(--color-ring);
      }

      :host[data-state='checked'] {
        border: 1px solid var(--color-background-fg);
        box-shadow: var(--box-shadow-default);
      }

      :host:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .color-indicator {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: transform 0.2s;
      }
    `,
  ],
  host: {
    type: 'button',
    role: 'radio',
    'data-testid': 'qui-color-select-item',
    '[attr.aria-checked]': 'checked',
    '[attr.data-state]': 'checked ? "checked" : "unchecked"',
  },
})
export class ColorSelectItemComponent {
  @Input() checked = false;
  @Input() color = 'black';
  @Output() valueSelect = new EventEmitter<string>();

  constructor(public elementRef: ElementRef) {}

  @HostListener('click')
  toggleCheck() {
    if (!this.elementRef.nativeElement.disabled) {
      this.valueSelect.emit(this.color);
    }
  }
}
