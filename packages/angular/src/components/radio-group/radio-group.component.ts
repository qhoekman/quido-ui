import { Component, ContentChildren, QueryList, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { RadioGroupItemComponent } from './radio-group-item.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'div[pui-radio-group]',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'pui-radio-group',
  },
  styles: [
    `
      :host {
        display: grid;
        gap: 0.5rem;
      }
    `,
  ],
})
export class RadioGroupComponent implements AfterContentInit {
  @ContentChildren(RadioGroupItemComponent, { descendants: true })
  items!: QueryList<RadioGroupItemComponent>;
  selectedValueSubject = new BehaviorSubject<string | number | null>(null);
  @Output() valueSelect = new EventEmitter<string | number | null>();

  ngAfterContentInit() {
    this.items.forEach((item) => {
      item.valueSelect.subscribe((value) => this.selectItem(value));
    });
  }

  selectItem(value: string | number | null) {
    this.selectedValueSubject.next(value);
    this.items.forEach((item) => {
      item.checked = item.value === value;
    });
    this.valueSelect.emit(value);
  }
}
