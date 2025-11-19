import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: '[qui-dropdown-menu-item]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    role: 'menuitem',
    'data-testid': 'qui-dropdown-menu-item',
  },
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        cursor: pointer;
        user-select: none;
        list-style: none;
        align-items: center;
        gap: var(--spacing-2);
        border-radius: var(--border-radius-sm);
        padding: var(--spacing-1-5) var(--spacing-2) var(--spacing-1-5)
          var(--spacing-2);
        font-size: var(--font-size-sm);
        outline: none;
        transition: background-color 0.2s, color 0.2s;
      }

      :host:hover {
        background-color: hsl(from var(--color-background) h s l / 66%);
      }

      :host(:focus) {
        background-color: var(--color-accent);
        color: var(--color-accent-foreground);
      }

      :host > svg {
        width: var(--size-4);
        height: var(--size-4);
        flex-shrink: 0;
      }
    `,
  ],
})
export class DropdownMenuItemComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown.space')
  @HostListener('keydown.enter')
  triggerClick() {
    this.elementRef.nativeElement.click();
  }

  @HostListener('keydown.arrowup')
  triggerArrowUp() {
    this.elementRef.nativeElement.previousElementSibling?.focus();
  }

  @HostListener('keydown.arrowdown')
  triggerArrowDown() {
    this.elementRef.nativeElement.nextElementSibling?.focus();
  }
}
