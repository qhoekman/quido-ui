import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { ComboboxComponent } from './combobox.component';

@Component({
  selector: 'button[pui-combobox-trigger]',
  standalone: true,
  host: {
    role: 'button',
    'data-testid': 'pui-combobox-trigger',
    'aria-controls': 'select-content',
  },
  imports: [CommonModule],
  template: `
    <ng-content *ngIf="!combobox.getSelectedOption(); else selectedValue"></ng-content>
    <ng-template #selectedValue>
      <span>{{ combobox.getSelectedOption()?.label }}</span>
    </ng-template>
    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex: 1 1 auto;
        justify-content: space-between;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-border);
        background-color: var(--color-input);
        color: var(--color-input-fg);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        cursor: pointer;
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--sm) {
        height: var(--spacing-3);
        padding: var(--spacing-2) var(--spacing-2);
      }

      :host-context(.size--md) {
        height: var(--spacing-5);
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--lg) {
        height: var(--spacing-7);
        padding: var(--spacing-3) var(--spacing-3);
      }
    `,
  ],
})
export class ComboboxTriggerComponent extends PopoverTriggerDirective {
  constructor(protected combobox: ComboboxComponent) {
    super(combobox.popover);
  }

  @HostListener('click')
  toggleOpen() {
    this.combobox.toggleOpen();
  }
}
