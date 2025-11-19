import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'div[qui-carousel-content]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-carousel-content',
  },
  styles: [
    `
      :host {
        display: flex;
        transition: transform 0.3s ease;
        width: 100%;
      }
    `,
  ],
  standalone: true,
})
export class CarouselContentComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  private currentIndex$ = new BehaviorSubject<number>(0);

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  scrollPrev() {
    const currentIndex = this.currentIndex$.getValue();
    if (currentIndex > 0) {
      this.currentIndex$.next(currentIndex - 1);
      this.updateCarouselPosition();
    }
  }

  scrollNext() {
    const currentIndex = this.currentIndex$.getValue();
    const maxIndex = this.el.nativeElement.children.length - 1;
    if (currentIndex < maxIndex) {
      this.currentIndex$.next(currentIndex + 1);
      this.updateCarouselPosition();
    }
  }

  private updateCarouselPosition() {
    const currentIndex = this.currentIndex$.getValue();
    const offset =
      this.orientation === 'horizontal' ? 'translateX' : 'translateY';
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `${offset}(-${currentIndex * 100}%)`
    );
  }
}
