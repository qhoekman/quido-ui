import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  OnChanges,
  Output,
  ViewChild,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'pui-color-wheel',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-color-wheel',
  },
  template: `
    <svg #svgRef width="200" height="200" viewBox="0 0 200 200">
      <ng-container *ngFor="let segment of colorWheelSegments">
        <path [attr.d]="segment.d" [attr.fill]="segment.fill"></path>
      </ng-container>
      <circle
        [attr.cx]="indicatorPosition.x"
        [attr.cy]="indicatorPosition.y"
        r="5"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        display: block;
        cursor: pointer;
      }
    `,
  ],
})
export class ColorWheelComponent implements OnInit, OnChanges {
  @Input() hue = 0;
  @Input() saturation = 100;
  @Input() lightness = 50;
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('svgRef', { static: true }) svgRef!: ElementRef<SVGSVGElement>;

  isDragging = false;
  colorWheelSegments: { d: string; fill: string }[] = [];
  indicatorPosition = { x: 0, y: 0 };

  ngOnInit() {
    this.generateColorWheel();
    this.updateIndicatorPosition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['hue'] || changes['saturation'] || changes['lightness']) && !this.valueChange.observed) {
      this.generateColorWheel();
      this.updateIndicatorPosition();
    }
  }

  generateColorWheel() {
    for (let angle = 0; angle < 360; angle++) {
      const startAngle = angle * (Math.PI / 180);
      const endAngle = (angle + 1) * (Math.PI / 180);

      const x1 = 100 + 100 * Math.cos(startAngle);
      const y1 = 100 + 100 * Math.sin(startAngle);
      const x2 = 100 + 100 * Math.cos(endAngle);
      const y2 = 100 + 100 * Math.sin(endAngle);

      const saturation = 100;
      const lightness = 50;

      this.colorWheelSegments.push({
        d: `M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`,
        fill: `hsl(${angle}, ${saturation}%, ${lightness}%)`,
      });
    }
  }

  updateIndicatorPosition() {
    this.indicatorPosition = {
      x: 100 + (this.saturation / 100) * 100 * Math.cos((this.hue * Math.PI) / 180),
      y: 100 + (this.saturation / 100) * 100 * Math.sin((this.hue * Math.PI) / 180),
    };
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.handleColorChange(event);
  }

  @HostListener('window:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.handleColorChange(event);
    }
  }

  @HostListener('window:mouseup')
  handleMouseUp() {
    this.isDragging = false;
  }

  handleColorChange(event: MouseEvent) {
    const svg = this.svgRef.nativeElement;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = event.clientX - rect.left - centerX;
    const y = event.clientY - rect.top - centerY;

    let angle = Math.atan2(y, x);
    angle = angle < 0 ? angle + 2 * Math.PI : angle;
    const newHue = (angle / (2 * Math.PI)) * 360;

    const distance = Math.sqrt(x * x + y * y);
    const newSaturation = Math.min(100, (distance / centerX) * 100);

    this.hue = newHue;
    this.saturation = newSaturation;
    this.updateIndicatorPosition();
    this.valueChange.emit(`hsl(${Math.round(newHue)}, ${Math.round(newSaturation)}%, 50%)`);
  }
}
