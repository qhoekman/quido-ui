import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { InputComponent } from '../input/input.component';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { PopoverContentComponent } from '../popover/popover-content.component';
import { FormsModule } from '@angular/forms';

export interface ComboboxOption {
  value: string;
  label: string;
}

@Component({
  selector: 'qui-combobox',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    PopoverComponent,
    PopoverTriggerDirective,
    PopoverContentComponent,
    FormsModule,
  ],
  template: `
    <qui-popover #popover [popoverContent]="popoverContent">
      <ng-content select="[qui-combobox-trigger]"></ng-content>
      <ng-template #popoverContent>
        <ng-content select="[qui-combobox-content]"></ng-content>
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
export class ComboboxComponent {
  protected selectedOptionSubject = new BehaviorSubject<ComboboxOption | null>(
    null
  );
  protected selectedOption$ = this.selectedOptionSubject.asObservable();
  @Output() valueChange = new EventEmitter<ComboboxOption>();
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

  select(option: ComboboxOption) {
    this.selectedOptionSubject.next(option);
    this.valueChange.emit(option);
    this.popover.hide();
  }

  getOpenState() {
    return this.popover.isOpen;
  }
}
