import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'qui-signature-pad',
  standalone: true,
  host: {
    'data-testid': 'qui-signature-pad',
  },
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
      }

      canvas {
        border: 1px solid var(--color-border);
        width: 100%;
        height: 100%;
      }
    `,
  ],
  template: ` <canvas #canvas></canvas> `,
})
export class SignaturePadComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initDrawingEvents();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  private initDrawingEvents() {
    const canvas = this.canvasRef.nativeElement;
    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.addEventListener('mouseleave', this.stopDrawing.bind(this));
  }

  private startDrawing(event: MouseEvent) {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
  }

  private draw(event: MouseEvent) {
    if (!this.drawing) return;
    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.stroke();
  }

  private stopDrawing() {
    this.drawing = false;
    this.ctx.closePath();
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.canvasRef.nativeElement.width,
      this.canvasRef.nativeElement.height
    );
  }

  getDataURL() {
    const canvas = this.canvasRef.nativeElement;
    return canvas.toDataURL('image/png');
  }

  download() {
    const dataURL = this.getDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
  }
}
