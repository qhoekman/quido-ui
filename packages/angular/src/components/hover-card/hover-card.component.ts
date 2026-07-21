import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'qui-hover-card',
  standalone: true,
  host: {
    'data-testid': 'hover-card',
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

  private showTimeout: ReturnType<typeof setTimeout> | null = null;
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
    this.debounceHide();
    if (this.open || this.showTimeout) return;
    this.showTimeout = setTimeout(() => {
      this.open = true;
      this.showTimeout = null;
    }, this.DELAY_MS);
  }

  hide() {
    this.debounceShow();
    if (!this.open || this.hideTimeout) return;
    this.hideTimeout = setTimeout(() => {
      this.open = false;
      this.hideTimeout = null;
    }, this.DELAY_MS);
  }

  debounceShow() {
    if (!this.showTimeout) return;
    clearTimeout(this.showTimeout);
    this.showTimeout = null;
  }

  debounceHide() {
    if (!this.hideTimeout) return;
    clearTimeout(this.hideTimeout);
    this.hideTimeout = null;
  }
}
