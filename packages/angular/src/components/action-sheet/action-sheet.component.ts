import { Component, ContentChild, ElementRef, HostListener, TemplateRef } from '@angular/core';
import { ActionSheetOverlayComponent } from './action-sheet-overlay.component';
import { ActionSheetContentComponent } from './action-sheet-content.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: '[pui-action-sheet]',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-action-sheet',
  },
  imports: [ActionSheetOverlayComponent, ActionSheetContentComponent, NgTemplateOutlet],
  template: `
    <div pui-action-sheet-overlay [isOpen]="isOpen">
      <ng-container *ngTemplateOutlet="actionSheetContent"></ng-container>
    </div>
    <div pui-action-sheet-content [isOpen]="isOpen">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        --action-sheet-height: 200px;

        position: relative;
        display: flex;
        overflow: hidden;
        height: 100svh;
      }

      :host-context(.open.has-backdrop) {
        background: hsl(from var(--color-muted) h s l / 33%);
      }
    `,
  ],
  standalone: true,
})
export class ActionSheetComponent {
  @ContentChild('actionSheetContent') actionSheetContent!: TemplateRef<unknown>;

  constructor(private elementRef: ElementRef) {}

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getClassList() {
    return {
      'has-backdrop': true,
      open: this.isOpen,
    };
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    this.close();
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (this.isOpen && this.elementRef.nativeElement === event.target) {
      this.close();
    }
  }
}
