import { Component } from '@angular/core';
import { IconMagnifyingGlassComponent } from '../../icons';

@Component({
  selector: 'div[pui-combobox-searchbox]',
  standalone: true,
  host: {
    'data-testid': 'pui-combobox-searchbox',
  },
  imports: [IconMagnifyingGlassComponent],
  template: `
    <i pui-icon name="magnifying-glass"></i>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-border);
        background-color: var(--color-input);
        margin: var(--spacing-2) var(--spacing-2);
        padding: var(--spacing-1) var(--spacing-2);
        color: var(--color-input-fg);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }

      :host i {
        color: var(--color-muted-fg);
        width: var(--spacing-4);
        height: var(--spacing-4);
        flex-shrink: 0;
      }
    `,
  ],
})
export class ComboboxSearchboxComponent {}
