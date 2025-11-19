import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { ScrollBarComponent } from './scroll-bar.component';

@Component({
  selector: 'pui-scroll-area',
  standalone: true,
  imports: [CommonModule, ScrollBarComponent],
  host: {
    'data-testid': 'pui-scroll-area',
  },
  template: `
    <div
      #container
      class="scroll-area-container"
      [ngStyle]="getContainerStyles()"
      data-testid="pui-scroll-area-container"
    >
      <div #content data-testid="pui-scroll-area-content">
        <ng-content></ng-content>
      </div>
    </div>
    <pui-scroll-bar
      *ngIf="scrollable && (orientation === 'vertical' || orientation === 'both')"
      orientation="vertical"
      [thumbPosition]="thumbPosition.y"
      [thumbSize]="thumbSize.height"
    ></pui-scroll-bar>
    <pui-scroll-bar
      *ngIf="scrollable && (orientation === 'horizontal' || orientation === 'both')"
      orientation="horizontal"
      [thumbPosition]="thumbPosition.x"
      [thumbSize]="thumbSize.width"
    ></pui-scroll-bar>
  `,
  styles: [
    `
      :host {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .scroll-area-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .scroll-area-container::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class ScrollAreaComponent implements AfterViewInit, OnDestroy {
  @Input() orientation: 'vertical' | 'horizontal' | 'both' = 'vertical';
  scrollable = false;
  thumbPosition = { x: 0, y: 0 };
  thumbSize = { width: 0, height: 0 };

  private container!: HTMLElement;
  private content!: HTMLElement;
  private resizeObserver!: ResizeObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.container = this.el.nativeElement.querySelector('.scroll-area-container');
    this.content = this.el.nativeElement.querySelector('div');

    this.resizeObserver = new ResizeObserver(() => this.updateScrollState());
    this.resizeObserver.observe(this.container);
    this.resizeObserver.observe(this.content);

    this.renderer.listen(this.container, 'scroll', () => this.updateScrollState());
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }

  updateScrollState() {
    const { clientHeight, clientWidth, scrollHeight, scrollWidth, scrollTop, scrollLeft } = this.container;

    this.scrollable = scrollHeight > clientHeight || scrollWidth > clientWidth;

    const verticalThumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 20);
    const horizontalThumbWidth = 40;

    this.thumbSize = {
      height: verticalThumbHeight,
      width: horizontalThumbWidth,
    };

    this.thumbPosition = {
      y: (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - verticalThumbHeight),
      x: (scrollLeft / (scrollWidth - clientWidth)) * (clientWidth - horizontalThumbWidth),
    };
  }

  getContainerStyles() {
    return {
      'overflow-y': this.orientation === 'vertical' || this.orientation === 'both' ? 'auto' : 'hidden',
      'overflow-x': this.orientation === 'horizontal' || this.orientation === 'both' ? 'auto' : 'hidden',
    };
  }
}
