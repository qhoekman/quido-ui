import { AsyncPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'pui-loading-bar',
  standalone: true,
  imports: [AsyncPipe],
  host: {
    'data-testid': 'pui-loading-bar',
  },
  template: ` <div [class.indicator]="loadingService.loadingSubject | async"></div> `,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        overflow: hidden;
        z-index: 1000;
      }

      :host .indicator {
        height: 100%;
        width: 100%;
        background-color: var(--color-primary);
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
})
export class LoadingBarComponent implements OnInit, OnChanges {
  @Input() loading = false;

  constructor(protected loadingService: LoadingService) {}

  ngOnInit(): void {
    if (this.loading) {
      this.loadingService.start();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loading']) {
      if (this.loading) {
        this.loadingService.start();
      } else {
        this.loadingService.stop();
      }
    }
  }
}
