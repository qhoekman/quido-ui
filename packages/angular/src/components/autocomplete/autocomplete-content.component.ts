import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkListbox, CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: '[pui-autocomplete-content]',
  standalone: true,
  imports: [CommonModule, CdkListboxModule],
  host: {
    role: 'listbox',
    id: 'autocomplete-content',
    'data-testid': 'pui-autocomplete-content',
    '[attr.tabindex]': '-1',
  },
  hostDirectives: [CdkListbox],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        width: 100%;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-border);
        background-color: var(--color-input);
        color: var(--color-input-fg);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        max-height: var(--spacing-60);
        overflow: auto;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class AutocompleteContentComponent {}
