import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { InputComponent } from '../input/input.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'qui-date-picker',
  standalone: true,
  imports: [
    InputComponent,
    PopoverComponent,
    PopoverTriggerDirective,
    CalendarComponent,
  ],
  host: {
    'data-testid': 'date-picker',
  },
  template: `
    <qui-popover #popover [popoverContent]="popoverContent">
      <input
        qui-input
        puiPopoverTrigger
        [value]="formattedDate"
        readonly
        data-testid="date-picker__input"
      />
      <ng-template #popoverContent>
        <qui-calendar
          [currentDate]="selectedDate"
          (valueChange)="handleChange($event)"
        ></qui-calendar>
      </ng-template>
    </qui-popover>
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
export class DatePickerComponent implements OnChanges {
  @ViewChild('popover') popover!: PopoverComponent;
  @Input() selectedDate: Date = new Date();
  formattedDate: string = this.formatDate(this.selectedDate);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDate']) {
      this.formattedDate = this.formatDate(this.selectedDate);
    }
  }

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
