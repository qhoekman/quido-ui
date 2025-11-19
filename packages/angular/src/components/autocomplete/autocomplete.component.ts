import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PopoverComponent } from '../popover/popover.component';

export interface AutocompleteOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'qui-autocomplete',
  standalone: true,
  host: {
    'data-testid': 'qui-autocomplete',
  },
  imports: [CommonModule, PopoverComponent, FormsModule],
  template: `
    <qui-popover #popover [popoverContent]="popoverContent" [autoSize]="true">
      <ng-content select="[qui-autocomplete-trigger]"></ng-content>

      <ng-template #popoverContent>
        <ng-content select="[qui-autocomplete-content]"></ng-content>
      </ng-template>
    </qui-popover>
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
export class AutocompleteComponent {
  protected selectedOptionSubject =
    new BehaviorSubject<AutocompleteOption | null>(null);
  protected selectedOption$ = this.selectedOptionSubject.asObservable();
  @Output() valueChange = new EventEmitter<AutocompleteOption>();
  @ViewChild('popover') popover!: PopoverComponent;

  toggleOpen() {
    this.popover.toggle();
  }

  getSelectedOption() {
    return this.selectedOptionSubject.value;
  }

  getSelectedOption$() {
    return this.selectedOption$;
  }

  select(option: AutocompleteOption) {
    this.selectedOptionSubject.next(option);
    this.valueChange.emit(option);
    this.popover.hide();
  }

  getOpenState() {
    return this.popover.isOpen;
  }
}
