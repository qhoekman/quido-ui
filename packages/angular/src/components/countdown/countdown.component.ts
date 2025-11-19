import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'div[pui-countdown]',
  host: {
    'data-testid': 'pui-countdown',
  },
  template: `
    <ng-content #countdown>
      <span pui-countdown-element data-testid="pui-countdown-days">{{
        days
      }}</span>
      <span pui-countdown-element data-testid="pui-countdown-hours">{{
        hours
      }}</span>
      <span pui-countdown-element data-testid="pui-countdown-minutes">{{
        minutes
      }}</span>
      <span pui-countdown-element data-testid="pui-countdown-seconds">{{
        seconds
      }}</span>
    </ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class CountdownComponent implements OnInit, OnDestroy {
  // default date over 10 days from now
  @Input() date = new Date(
    new Date().getTime() + 10 * 24 * 60 * 60 * 1000
  ).getTime();
  private intervalId: any;

  years = '00';
  months = '00';
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  ngOnInit() {
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const dateNow = new Date().getTime();
    const dateDiff = this.date - dateNow;

    if (dateDiff <= 0) {
      clearInterval(this.intervalId);
      return;
    }

    const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    this.years = years < 10 ? `0${years}` : `${years}`;
    this.months = months < 10 ? `0${months}` : `${months}`;
    this.days = days < 10 ? `0${days}` : `${days}`;
    this.hours = hours < 10 ? `0${hours}` : `${hours}`;
    this.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  }
}
