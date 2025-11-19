import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[qui-accordion-item]',
  host: {
    'data-testid': 'qui-accordion-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid var(--color-border);
      }
    `,
  ],
  standalone: true,
})
export class AccordionItemComponent {
  @Output() toggle = new EventEmitter<void>();
  isOpen = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
  }
}
