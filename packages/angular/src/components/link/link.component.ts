import { Component } from '@angular/core';

@Component({
  selector: '[qui-link]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'link',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        gap: var(--spacing-2);
        color: var(--color-primary);
        text-align: center;
        font-family: var(--font-primary);
        font-size: var(--size-3);
        font-style: normal;
        font-weight: 400;
        line-height: var(--line-height-5);
        text-decoration: none;
        transition: text-decoration 0.2s ease-in-out;

        &:hover {
          text-decoration: underline;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-skip-ink: none;
          text-decoration-thickness: auto;
          text-underline-offset: auto;
          text-underline-position: from-font;
        }

        &:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 2px var(--color-ring),
            0 0 0 4px var(--color-background);
        }
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class LinkComponent {
  getClassList() {
    return {
      link: true,
    };
  }
}
