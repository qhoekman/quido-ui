import { Component, HostListener } from '@angular/core';

@Component({
  selector: '[pui-combobox-search]',
  standalone: true,
  host: {
    'data-testid': 'pui-combobox-search',
  },
  template: '',
  styles: [
    `
      :host {
        display: inline-flex;
        flex: 1 1 auto;
        border: none;
        background-color: transparent;
        color: var(--color-input-fg);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        outline: none;
      }
    `,
  ],
})
export class ComboboxSearchComponent {
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    event.stopPropagation();
  }
}
