import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'qui-time-select',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-time-select',
  },
  template: `
    <div class="time-select" data-testid="qui-time-select">
      <div
        class="time-column"
        #hourList
        data-testid="qui-time-select-hour-list"
      >
        <div
          *ngFor="let hour of displayHours"
          data-testid="qui-time-select-hour"
          (click)="handleClickHour(hour)"
          (keydown)="handleKeyDownHour($event)"
          tabindex="0"
          [class.selected]="hour === selectedHour"
          [attr.aria-selected]="hour === selectedHour"
        >
          {{ hour }}
        </div>
      </div>

      <div
        class="time-column"
        #minuteList
        data-testid="qui-time-select-minute-list"
      >
        <div
          *ngFor="let minute of displayMinutes"
          data-testid="qui-time-select-minute"
          (click)="handleClickMinute(minute)"
          (keydown)="handleKeyDownMinute($event)"
          tabindex="0"
          [class.selected]="minute === selectedMinute"
          [attr.aria-selected]="minute === selectedMinute"
        >
          {{ minute }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .time-select {
        display: flex;
        border: var(--border-width-default) solid var(--color-border);
        background-color: var(--color-background);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-4);
        width: var(--spacing-32);
      }
      .time-column {
        flex: 1;
        overflow-y: auto;
        height: 200px;
        scrollbar-width: thin;
        scrollbar-color: var(--color-border) transparent;
      }
      .time-column div {
        cursor: pointer;
        border-radius: var(--border-radius-md);
        padding: var(--spacing-2) var(--spacing-3);
        text-align: center;
        font-size: var(--font-size-sm);
      }
      .time-column div.selected {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }
      .time-column div:hover {
        background-color: var(--color-muted);
        color: var(--color-muted-fg);
      }
    `,
  ],
})
export class TimeSelectComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() hours = '00';
  @Input() minutes = '00';
  @Output() valueHourChange = new EventEmitter<string>();
  @Output() valueMinuteChange = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('hourList') hourList!: ElementRef;
  @ViewChild('minuteList') minuteList!: ElementRef;

  displayHours: string[] = this.generateDefaultHours();
  displayMinutes: string[] = this.generateDefaultMinutes();

  private generateDefaultHours(): string[] {
    return Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  }

  private generateDefaultMinutes(): string[] {
    return Array.from({ length: 12 }, (_, i) =>
      (i * 5).toString().padStart(2, '0')
    );
  }

  resetToDefault() {
    this.displayHours = this.generateDefaultHours();
    this.displayMinutes = this.generateDefaultMinutes();
  }

  ngAfterViewInit() {
    this.scrollToSelected(this.hours, this.hourList);
    this.scrollToSelected(this.minutes, this.minuteList);
  }

  ngOnInit() {
    this.addCurrentMinutes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedHour'] || changes['selectedMinute']) {
      this.resetToDefault();
      this.addCurrentMinutes();

      // Debounce scroll to selected
      setTimeout(() => {
        this.scrollToSelected(this.hours, this.hourList);
        this.scrollToSelected(this.minutes, this.minuteList);
      }, 100);
    }
  }

  selectHour(hour: string) {
    this.hours = hour;
    this.valueHourChange.emit(hour);
    this.valueChange.emit(`${hour}:${this.minutes}`);
    this.scrollToSelected(hour, this.hourList);
  }

  selectMinute(minute: string) {
    this.minutes = minute;
    this.valueMinuteChange.emit(minute);
    this.valueChange.emit(`${this.hours}:${minute}`);
    this.scrollToSelected(minute, this.minuteList);
  }

  handleClickHour(hour: string) {
    this.selectHour(hour);
  }

  handleClickMinute(minute: string) {
    this.selectMinute(minute);
  }

  handleKeyDownHour(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.selectHour(this.hours);
    }
  }

  handleKeyDownMinute(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.selectMinute(this.minutes);
    }
  }

  private addCurrentMinutes() {
    // If the selected minute is not in the minutes array, add it
    if (this.displayMinutes.includes(this.minutes)) {
      return;
    }

    this.displayMinutes.push(this.minutes);
    this.displayMinutes.sort((a, b) => parseInt(a) - parseInt(b));
  }

  private scrollToSelected(value: string, list: ElementRef) {
    const element = list.nativeElement.querySelector(`[aria-selected="true"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}
