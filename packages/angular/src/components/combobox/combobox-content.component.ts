import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkListbox, CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: '[qui-combobox-content]',
  standalone: true,
  imports: [CommonModule, CdkListboxModule],
  host: {
    role: 'listbox',
    id: 'combobox-content',
    '[attr.tabindex]': '-1',
    'data-testid': 'qui-combobox-content',
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
        max-height: 15rem;
        overflow: auto;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class ComboboxContentComponent {}
