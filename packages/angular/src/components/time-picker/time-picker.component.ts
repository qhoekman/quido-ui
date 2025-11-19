import { Component, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { TimeSelectComponent } from '../time-select/time-select.component';

@Component({
  selector: 'pui-time-picker',
  standalone: true,
  host: {
    'data-testid': 'pui-time-picker',
  },
  imports: [InputComponent, PopoverComponent, PopoverTriggerDirective, TimeSelectComponent],
  template: `
    <pui-popover #popover [popoverContent]="popoverContent">
      <input pui-input puiPopoverTrigger data-testid="pui-time-picker-input" [value]="formattedTime" readonly />
      <ng-template #popoverContent>
        <pui-time-select
          [selectedHour]="selectedHour"
          [selectedMinute]="selectedMinute"
          (onChange)="handleTimeChange($event)"
        ></pui-time-select>
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
export class TimePickerComponent {
  @ViewChild('popover') popover!: PopoverComponent;
  selectedHour = '12';
  selectedMinute = '00';
  formattedTime: string = this.formatTime(this.selectedHour, this.selectedMinute);

  handleTimeChange(time: string) {
    const [hour, minute] = time.split(':');
    this.selectedHour = hour;
    this.selectedMinute = minute;
    this.formattedTime = this.formatTime(hour, minute);
    this.popover.hide();
  }

  formatTime(hour: string, minute: string): string {
    return `${hour}:${minute}`;
  }
}
