import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type DialogVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'dialog[qui-dialog]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
  },
  template: `
    <ng-content select="[qui-dialog-close]"></ng-content>
    <ng-content select="[qui-dialog-header]"></ng-content>
    <ng-content select="[qui-dialog-content]"></ng-content>
    <ng-content select="[qui-dialog-footer]"></ng-content>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: block;
        border: 0 none;
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-lg);
        background-color: var(--color-card);
        color: var(--color-card-fg);
        padding: var(--spacing-4);

        &:is(.size--sm) {
          width: 300px;
        }

        &:is(.size--md) {
          width: 500px;
        }

        &:is(.size--lg) {
          width: 700px;
        }
      }
    `,
  ],
})
export class DialogComponent {
  @Input() size: DialogVariants['size'] = 'md';

  getClassList() {
    return [`size--${this.size}`].join(' ');
  }
}
