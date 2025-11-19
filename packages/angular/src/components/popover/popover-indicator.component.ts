import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'pui-popover-indicator',
  standalone: true,
  host: {
    'data-testid': 'pui-popover-indicator',
  },
  styles: [
    `
      :host svg {
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-card);
      }
    `,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <svg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,10 10,0 20,10" fill="currentColor" />
    </svg>
  `,
})
export class PopoverIndicatorComponent {}
