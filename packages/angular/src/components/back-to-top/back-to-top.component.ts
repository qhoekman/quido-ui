import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'div[qui-back-to-top]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-back-to-top',
  },
  template: `<ng-content *ngIf="isVisible"></ng-content>`,
  styles: [
    `
      :host {
        position: fixed;
        bottom: var(--spacing-4);
        right: var(--spacing-4);
        z-index: var(--z-index-1000);
      }
    `,
  ],
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isVisible = scrollPosition > document.documentElement.clientHeight / 2;
  }

  @HostListener('click')
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
