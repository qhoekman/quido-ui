import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconCheckComponent, IconDashComponent } from '../../icons';

@Component({
  selector: 'span[qui-checkbox-indicator]',
  imports: [CommonModule, IconCheckComponent, IconDashComponent],
  host: {
    'data-testid': 'qui-checkbox-indicator',
  },
  standalone: true,
  template: `
    <i *ngIf="checked && !indeterminate" qui-icon name="check" size="sm"></i>
    <i *ngIf="indeterminate && !checked" qui-icon name="dash" size="sm"></i>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class CheckboxIndicatorComponent {
  @Input() checked = false;
  @Input() indeterminate = false;
}
