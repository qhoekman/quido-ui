import { Component } from '@angular/core';

@Component({
  selector: '[pui-link]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-link',
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

        &:hover {
          text-decoration: underline;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-skip-ink: none;
          text-decoration-thickness: auto;
          text-underline-offset: auto;
          text-underline-position: from-font;
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
