import { CdkListboxModule } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopoverContentComponent } from '../popover/popover-content.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { PopoverComponent } from '../popover/popover.component';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'pui-select',
  standalone: true,
  host: {
    'data-testid': 'pui-select',
  },
  imports: [CommonModule, CdkListboxModule, PopoverComponent, PopoverTriggerDirective, PopoverContentComponent],
  template: `
    <pui-popover #popover [popoverContent]="popoverContent">
      <ng-content select="[pui-select-trigger]"> </ng-content>

      <ng-template #popoverContent>
        <ng-content select="[pui-select-content]"></ng-content>
      </ng-template>
    </pui-popover>
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
export class SelectComponent {
  protected selectedOptionSubject = new BehaviorSubject<SelectOption | null>(null);
  protected selectedOption$ = this.selectedOptionSubject.asObservable();
  @Output() valueChange = new EventEmitter<SelectOption>();
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

  select(option: SelectOption) {
    this.selectedOptionSubject.next(option);
    this.valueChange.emit(option);
    this.popover.hide();
  }

  getOpenState() {
    return this.popover.isOpen;
  }
}
