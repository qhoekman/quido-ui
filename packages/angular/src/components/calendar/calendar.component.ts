import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';
import { ButtonComponent } from '../button/button.component';
import { IconArrowLeftComponent, IconArrowRightComponent } from '../../icons';

@Component({
  selector: 'qui-calendar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    IconArrowLeftComponent,
    IconArrowRightComponent,
  ],
  template: `
    <div
      class="calendar"
      data-testid="qui-calendar"
      role="application"
      aria-label="Calendar"
    >
      <div class="header" data-testid="qui-calendar-header">
        <button
          qui-button
          data-testid="qui-calendar-header-prev"
          variant="ghost"
          size="icon"
          (click)="prevMonth()"
          aria-label="Previous month"
        >
          <i qui-icon name="arrow-left" size="sm"></i>
        </button>
        <span
          aria-live="polite"
          aria-atomic="true"
          data-testid="qui-calendar-header-month"
          >{{ format(currentMonth, 'MMMM yyyy') }}</span
        >
        <button
          qui-button
          data-testid="qui-calendar-header-next"
          variant="ghost"
          size="icon"
          (click)="nextMonth()"
          aria-label="Next month"
        >
          <i qui-icon name="arrow-right" size="sm"></i>
        </button>
      </div>
      <div class="weekdays" role="row" data-testid="qui-calendar-weekdays">
        <div *ngFor="let day of weekdays" role="columnheader">{{ day }}</div>
      </div>
      <div class="days" role="grid" data-testid="qui-calendar-days">
        <div
          role="gridcell"
          data-testid="qui-calendar-day"
          (click)="handleDayClick(day)"
          (keydown)="handleDayKeydown(day)"
          tabindex="0"
          *ngFor="let day of days"
          [class.outside]="!isSameMonth(day, currentMonth)"
          [class.today]="isToday(day)"
          [class.selected]="isSameDay(day, currentDate)"
          [attr.aria-selected]="isSameDay(day, currentDate)"
          [attr.aria-label]="format(day, 'EEEE, MMMM d, yyyy')"
        >
          {{ format(day, 'd') }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .calendar {
        display: inline-block;
        border: var(--border-width-default) solid var(--color-border);
        background-color: var(--color-background);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-4);
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-2);
      }

      .weekdays,
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: var(--spacing-1);
      }

      .weekdays div {
        font-weight: var(--font-weight-bold);
        text-align: center;
      }

      .days div {
        text-align: center;
        padding: var(--spacing-2);
        border-radius: var(--border-radius-sm);
        cursor: pointer;
      }

      .days div.outside {
        color: var(--color-muted-fg);
      }

      .days div.today {
        background-color: hsl(from var(--color-primary) h s l / 33%);
        color: var(--color-muted-fg);
      }

      .days div.selected {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }
    `,
  ],
})
export class CalendarComponent {
  @Input() currentDate: Date = new Date();
  @Input() currentMonth: Date = startOfMonth(this.currentDate);
  @Output() valueChange = new EventEmitter<Date>();
  weekdays: string[] = [];
  days: Date[] = [];

  constructor() {
    this.setWeekdays();
    this.updateCalendar();
  }

  setWeekdays() {
    const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'short' });
    const start = new Date(Date.UTC(2021, 5, 6)); // A known Sunday
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setUTCDate(start.getUTCDate() + i);
      this.weekdays.push(formatter.format(day));
    }
  }

  updateCalendar() {
    const start = startOfWeek(startOfMonth(this.currentMonth));
    const end = endOfWeek(endOfMonth(this.currentMonth));
    this.days = eachDayOfInterval({ start, end });
  }

  prevMonth() {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.updateCalendar();
  }

  nextMonth() {
    this.currentMonth = addMonths(this.currentMonth, 1);
    this.updateCalendar();
  }

  handleDayClick(day: Date) {
    this.currentDate = day;
    this.valueChange.emit(this.currentDate);
  }

  handleDayKeydown(day: Date) {
    this.currentDate = day;
    this.valueChange.emit(this.currentDate);
  }

  format(date: Date, dateFormat: string): string {
    const options: Intl.DateTimeFormatOptions = {};

    if (dateFormat.includes('MMMM')) {
      options.month = 'long';
    }
    if (dateFormat.includes('yyyy')) {
      options.year = 'numeric';
    }
    if (dateFormat.includes('d')) {
      options.day = 'numeric';
    }

    return new Intl.DateTimeFormat(undefined, options).format(date);
  }

  isSameMonth(date: Date, month: Date): boolean {
    return isSameMonth(date, month);
  }

  isSameDay(date: Date, day: Date): boolean {
    return isSameDay(date, day);
  }

  isToday(date: Date): boolean {
    return isToday(date);
  }
}
