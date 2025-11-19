import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'button[pui-switch]',
  host: {
    type: 'button',
    role: 'switch',
    'data-testid': 'pui-switch',
    '[attr.aria-checked]': 'checked',
    '[attr.data-state]': 'checked ? "checked" : "unchecked"',
  },
  standalone: true,
  template: `
    <span class="thumb" [class.checked]="checked" data-testid="pui-switch-thumb"></span>
    <input
      data-testid="pui-switch-input"
      type="hidden"
      [attr.name]="elementRef.nativeElement.getAttribute('name')"
      [value]="checked ? 'true' : 'false'"
    />
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        height: 1.25rem;
        width: 2.25rem;
        cursor: pointer;
        border-radius: 1.125rem;
        border: 2px solid transparent;
        transition: background-color 0.2s;
        align-items: center;
        padding: 0;
      }

      :host[aria-checked='true'] {
        background-color: var(--color-primary);
      }

      :host[aria-checked='false'] {
        background-color: var(--color-muted);
      }

      :host:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .thumb {
        pointer-events: none;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: var(--color-background);
        transition: transform 0.2s;
        transform: translateX(0);
      }

      .thumb.checked {
        transform: translateX(1rem);
        background-color: var(--color-input-fg);
      }
    `,
  ],
})
export class SwitchComponent {
  @Input() checked = false;

  constructor(public elementRef: ElementRef) {}

  @HostListener('click')
  toggleSwitch() {
    if (!this.elementRef.nativeElement.disabled) {
      this.checked = !this.checked;
    }
  }
}
