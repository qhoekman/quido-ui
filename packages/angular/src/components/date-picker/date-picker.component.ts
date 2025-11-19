import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { InputComponent } from '../input/input.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'pui-date-picker',
  standalone: true,
  imports: [InputComponent, PopoverComponent, PopoverTriggerDirective, CalendarComponent],
  host: {
    'data-testid': 'pui-date-picker',
  },
  template: `
    <pui-popover #popover [popoverContent]="popoverContent">
      <input pui-input puiPopoverTrigger [value]="formattedDate" readonly data-testid="pui-date-picker-input" />
      <ng-template #popoverContent>
        <pui-calendar [currentDate]="selectedDate" (onChange)="handleChange($event)"></pui-calendar>
      </ng-template>
    </pui-popover>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        position: relative;
      }
    `,
  ],
})
export class DatePickerComponent {
  @ViewChild('popover') popover!: PopoverComponent;
  selectedDate: Date = new Date();
  formattedDate: string = this.formatDate(this.selectedDate);

  handleChange(date: Date) {
    this.selectedDate = date;
    this.formattedDate = this.formatDate(date);
    this.popover.hide();
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
}
