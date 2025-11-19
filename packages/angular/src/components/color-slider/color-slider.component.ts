import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'div[qui-color-slider]',
  standalone: true,
  template: `
    <div #track class="color-slider-track" data-testid="qui-color-slider-track">
      <div
        #range
        class="color-slider-range"
        data-testid="qui-color-slider-range"
      ></div>
      <div
        #thumb
        class="color-slider-thumb"
        tabindex="0"
        data-testid="qui-color-slider-thumb"
      ></div>
    </div>
    <input
      data-testid="qui-color-slider-input"
      type="hidden"
      [attr.id]="elementRef.nativeElement.id"
      [attr.name]="elementRef.nativeElement.name"
      [value]="value"
    />
  `,
  styles: [
    `
      .color-slider-track {
        position: relative;
        height: 1rem;
        width: 100%;
        background-color: rgb(0 0 0 / 20%);
        border-radius: 0.75rem;
      }

      .color-slider-range {
        position: absolute;
        height: 100%;
        background-color: transparent;
      }

      .color-slider-thumb {
        position: absolute;
        top: 0;
        height: 1.5rem;
        width: 1.5rem;
        background-color: #fff;
        border: 1px solid rgb(0 0 0 / 50%);
        border-radius: 50%;
        cursor: pointer;
        transform: translateY(-20%) translateX(-16%);
        transition: transform 0.2s;
      }
    `,
  ],
})
export class ColorSliderComponent implements AfterViewInit, OnChanges {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = 50;
  @Input() mode: 'hue' | 'saturation' | 'lightness' | 'alpha' = 'hue';
  @Input() hue = 0;
  @Input() saturation = 100;
  @Input() lightness = 50;
  @Output() valueChange = new EventEmitter<number>();

  @ViewChild('track') track!: ElementRef;
  @ViewChild('range') range!: ElementRef;
  @ViewChild('thumb') thumb!: ElementRef;

  constructor(protected elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateSlider();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] || changes['mode']) {
      this.updateSlider();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlider();
  }

  private updateSlider() {
    const trackWidth = this.track.nativeElement.offsetWidth;
    const thumbPosition =
      ((this.value - this.min) / (this.max - this.min)) * trackWidth;
    this.range.nativeElement.style.width = `${thumbPosition}px`;
    this.thumb.nativeElement.style.left = `${thumbPosition}px`;

    this.updateBackground();
  }

  private updateBackground() {
    let background = '';
    switch (this.mode) {
      case 'hue':
        background =
          'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)';
        this.max = 360;
        break;
      case 'saturation':
        background = `linear-gradient(to right, hsl(${this.hue}, 0%, 50%), hsl(${this.hue}, 100%, 50%))`;
        this.max = 100;
        break;
      case 'lightness':
        background = `linear-gradient(to right, hsl(${this.hue}, ${this.saturation}%, 0%), hsl(${this.hue}, ${this.saturation}%, 50%), hsl(${this.hue}, ${this.saturation}%, 100%))`;
        this.max = 100;
        break;
      case 'alpha':
        background = `linear-gradient(to right, hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, 0), hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, 1)),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23ccc' d='M0 0h4v4H0zM4 4h4v4H4z'/%3E%3C/svg%3E")`;

        this.max = 100;
        break;
    }
    this.renderer.setStyle(this.track.nativeElement, 'background', background);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.updateValueFromEvent(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.buttons === 1) {
      this.updateValueFromEvent(event);
    }
  }

  private updateValueFromEvent(event: MouseEvent) {
    const trackRect = this.track.nativeElement.getBoundingClientRect();
    let newValue =
      ((event.clientX - trackRect.left) / trackRect.width) *
        (this.max - this.min) +
      this.min;

    // Round to nearest step
    const steps = Math.round((newValue - this.min) / this.step);
    newValue = this.min + steps * this.step;

    this.value = Math.min(this.max, Math.max(this.min, newValue));
    this.valueChange.emit(this.value);
    this.updateSlider();
  }
}
