import { Component, ElementRef, Input, TemplateRef } from '@angular/core';

type TabsTriggerVariants = {
  variant: 'active' | 'default';
};

@Component({
  selector: '[qui-tabs-trigger]',
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-tabs-trigger',
    '[attr.aria-expanded]': 'variant === "active"',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 0 none;
        border-radius: var(--border-radius-md);
        padding: var(--spacing-1-5) var(--spacing-3);
        background-color: hsl(from var(--color-background) h s l / 66%);
        color: hsl(from var(--color-background-fg) h s l / 80%);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: all 0.3s;
        outline: none;

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
          color: var(--color-muted-fg);
        }
      }

      :host(.variant--active) {
        background-color: var(--color-background);
        color: var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
        box-shadow: var(--box-shadow-sm);
      }
    `,
  ],
  standalone: true,
})
export class TabsTriggerComponent {
  @Input() variant: TabsTriggerVariants['variant'] = 'default';
  @Input() tabContentFor!: TemplateRef<unknown>;

  constructor(private elementRef: ElementRef) {}

  setClickListener(listener: () => void) {
    this.elementRef.nativeElement.addEventListener('click', listener);
  }

  getClassList() {
    return ['variant--' + this.variant].join(' ');
  }
}
