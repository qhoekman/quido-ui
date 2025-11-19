import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'div[pui-slider]',
  host: {
    'data-testid': 'pui-slider',
  },
  standalone: true,
  template: `
    <div #track class="slider-track" data-testid="pui-slider-track">
      <div #range class="slider-range" data-testid="pui-slider-range"></div>
      <div #thumb class="slider-thumb" tabindex="0" data-testid="pui-slider-thumb"></div>
    </div>
    <input
      data-testid="pui-slider-input"
      type="hidden"
      [attr.id]="elementRef.nativeElement.id"
      [attr.name]="elementRef.nativeElement.name"
      [value]="value"
    />
  `,
  styles: [
    `
      .slider-track {
        position: relative;
        height: 1rem;
        width: 100%;
        background-color: rgb(0 0 0 / 20%);
        border-radius: 0.75rem;
      }

      .slider-range {
        position: absolute;
        height: 100%;
        border-radius: 0.75rem;
        background-color: #007bff;
      }

      .slider-thumb {
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
export class SliderComponent implements AfterViewInit {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = 50;
  @Output() valueChange = new EventEmitter<number>();

  @ViewChild('track') track!: ElementRef;
  @ViewChild('range') range!: ElementRef;
  @ViewChild('thumb') thumb!: ElementRef;

  constructor(protected elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.updateSlider();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlider();
  }

  private updateSlider() {
    const trackWidth = this.track.nativeElement.offsetWidth;
    const thumbPosition = ((this.value - this.min) / (this.max - this.min)) * trackWidth;
    this.range.nativeElement.style.width = `${thumbPosition}px`;
    this.thumb.nativeElement.style.left = `${thumbPosition}px`;
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

  @HostListener('document:mouseup')
  onMouseUp() {
    // Handle mouse up event
  }

  private updateValueFromEvent(event: MouseEvent) {
    const trackRect = this.track.nativeElement.getBoundingClientRect();
    let newValue = ((event.clientX - trackRect.left) / trackRect.width) * (this.max - this.min) + this.min;

    // Round to nearest step
    const steps = Math.round((newValue - this.min) / this.step);
    newValue = this.min + steps * this.step;

    this.value = Math.min(this.max, Math.max(this.min, newValue));
    this.valueChange.emit(this.value);
    this.updateSlider();
  }
}
