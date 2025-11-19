import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconCross2Component } from '../../icons';

@Component({
  selector: '[pui-dialog-close]',
  standalone: true,
  imports: [ButtonComponent, IconCross2Component],
  template: `<ng-content>
    <button pui-button variant="ghost" size="sm" (click)="handleClose()" data-testid="pui-dialog-close">
      <i pui-icon name="cross2" size="md"></i>
    </button>
  </ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        top: var(--spacing-2);
        right: var(--spacing-2);
      }
    `,
  ],
})
export class DialogCloseComponent {
  @Output() doClose = new EventEmitter<void>();

  handleClose() {
    this.doClose.emit();
  }
}
