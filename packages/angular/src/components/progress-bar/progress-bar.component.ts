import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[pui-progress-bar]',
  imports: [NgStyle],
  host: {
    'data-testid': 'pui-progress-bar',
  },
  template: `
    <div
      data-testid="pui-progress-bar-indicator"
      [ngStyle]="getIndicatorStyle()"
      [class]="getIndicatorClassList()"
    ></div>
  `,
  styles: [
    `
      :host {
        position: relative;
        height: 2px;
        width: 100%;
        overflow: hidden;
        border-radius: var(--border-radius-md);
        background-color: var(--color-primary) / 20%;
      }

      :host .indicator {
        height: 100%;
        width: 100%;
        flex: 1;
        background-color: var(--color-primary);
        transition: transform 0.3s ease;
      }

      :host .indicator.variant--indeterminate {
        animation: indeterminate 1.5s infinite linear;
      }

      @keyframes indeterminate {
        0% {
          transform: translateX(-100%);
        }

        100% {
          transform: translateX(100%);
        }
      }
    `,
  ],
  standalone: true,
})
export class ProgressBarComponent {
  @Input() value?: number;

  getIndicatorClassList() {
    return ['indicator', this.value === undefined ? 'variant--indeterminate' : 'variant--determinate'].join(' ');
  }

  getIndicatorStyle() {
    return this.value !== undefined ? { transform: 'translateX(' + (-100 + this.value) + '%)' } : {};
  }
}
