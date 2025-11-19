import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: '[pui-toast-close]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-toast-close',
  },
  styles: [
    `
      :host {
        position: absolute;
        right: var(--spacing-4);
        top: var(--spacing-2);
        background-color: transparent;
        border: none;
        width: var(--spacing-4);
        height: var(--spacing-4);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-1);
        color: currentcolor;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    `,
  ],
})
export class ToastCloseComponent {
  @Output() hasClosed = new EventEmitter<void>();

  @HostListener('click')
  closeToast() {
    this.hasClosed.emit();
  }
}
