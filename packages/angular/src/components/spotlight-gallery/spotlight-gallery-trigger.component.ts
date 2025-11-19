import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[pui-spotlight-gallery-trigger]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class.active]': 'active',
    'data-testid': 'pui-spotlight-gallery-trigger',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        cursor: pointer;
        border-radius: var(--border-radius-md);
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        color: var(--color-gray-900);
        text-transform: uppercase;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: background-color 0.3s;
      }

      :host(:hover) {
        background-color: var(--color-gray-50);
      }

      :host(.active) {
        border: 1px solid var(--color-ring);
      }
    `,
  ],
})
export class SpotlightGalleryTriggerComponent {
  @Input() active = false;
}
