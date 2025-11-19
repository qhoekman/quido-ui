import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export type GridItemProps = {
  colSpan?: number;
};

@Component({
  selector: 'div[pui-grid-item]',
  standalone: true,
  host: {
    'data-testid': 'pui-grid-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        grid-column: span 1;
      }
    `,
  ],
})
export class GridItemComponent implements OnInit, OnChanges {
  @Input() colSpan = 1;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.updateGridColumn();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['colSpan']) {
      this.updateGridColumn();
    }
  }

  private updateGridColumn() {
    this.elementRef.nativeElement.style.gridColumn = `span ${this.colSpan}`;
  }
}
