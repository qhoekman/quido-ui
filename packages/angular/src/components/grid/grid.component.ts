import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export type GridProps = {
  columns?: number;
};

@Component({
  selector: 'div[qui-grid]',
  standalone: true,
  host: {
    'data-testid': 'qui-grid',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: grid;
        gap: var(--spacing-4);
      }
    `,
  ],
})
export class GridComponent implements OnInit, OnChanges {
  @Input() columns = 4;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns']) {
      this.elementRef.nativeElement.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
    }
  }
}
