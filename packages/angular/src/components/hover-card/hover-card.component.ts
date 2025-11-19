import { CommonModule } from '@angular/common';
import { Component, Input, ContentChild, TemplateRef, HostListener } from '@angular/core';

@Component({
  selector: 'pui-hover-card',
  standalone: true,
  host: {
    'data-testid': 'pui-hover-card',
  },
  imports: [CommonModule],
  template: `
    <ng-content select="[puiHoverCardTrigger]"></ng-content>
    <ng-container *ngIf="open">
      <ng-container *ngTemplateOutlet="hoverCardContent"></ng-container>
    </ng-container>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: inline-block;
      }
    `,
  ],
})
export class HoverCardComponent {
  private DELAY_MS = 300;
  @Input() open = false;
  @ContentChild('hoverCardContent', { static: true, descendants: true })
  hoverCardContent!: TemplateRef<unknown>;

  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  @HostListener('mouseleave')
  handleMouseLeave() {
    this.hide();
  }

  @HostListener('mouseenter')
  handleMouseEnter() {
    this.debounceHide();
  }

  show() {
    setTimeout(() => {
      this.open = true;
    }, this.DELAY_MS);
  }

  hide() {
    this.hideTimeout = setTimeout(() => {
      this.open = false;
    }, this.DELAY_MS);
  }

  debounceHide() {
    if (!this.hideTimeout) return;
    clearTimeout(this.hideTimeout);
    this.hideTimeout = null;
  }
}
