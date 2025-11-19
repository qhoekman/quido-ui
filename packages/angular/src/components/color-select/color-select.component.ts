import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { ColorSelectItemComponent } from './color-select-item.component';

@Component({
  selector: 'div[qui-color-select]',
  standalone: true,
  host: {
    'data-testid': 'qui-color-select',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: grid;
        gap: var(--spacing-2);
      }
    `,
  ],
})
export class ColorSelectComponent implements AfterContentInit {
  @ContentChildren(ColorSelectItemComponent, { descendants: true })
  items!: QueryList<ColorSelectItemComponent>;
  selectedColor?: string;

  ngAfterContentInit() {
    this.items.forEach((item) => {
      item.valueSelect.subscribe((color) => this.selectColor(color));
    });
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.items.forEach((item) => {
      item.checked = item.color === color;
    });
  }
}
