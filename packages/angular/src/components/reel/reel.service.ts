import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReelService {
  private reelRef: ElementRef<HTMLDivElement> | null = null;
  canScrollPrev = false;
  canScrollNext = true;

  setReelRef(ref: ElementRef<HTMLDivElement>) {
    this.reelRef = ref;
    this.updateScrollState();
  }

  scrollPrev() {
    if (this.reelRef) {
      const container = this.reelRef.nativeElement;
      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = Math.floor(container.clientWidth / itemWidth) * itemWidth;
      const targetScrollPosition = Math.max(0, container.scrollLeft - scrollAmount);
      container.scrollTo({ left: targetScrollPosition, behavior: 'smooth' });
      this.updateScrollState();
    }
  }

  scrollNext() {
    if (this.reelRef) {
      const container = this.reelRef.nativeElement;
      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = Math.floor(container.clientWidth / itemWidth) * itemWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const targetScrollPosition = Math.min(maxScrollLeft, container.scrollLeft + scrollAmount);
      container.scrollTo({ left: targetScrollPosition, behavior: 'smooth' });
      this.updateScrollState();
    }
  }

  private updateScrollState() {
    if (this.reelRef) {
      const { scrollLeft, scrollWidth, clientWidth } = this.reelRef.nativeElement;
      this.canScrollPrev = scrollLeft > 0;
      this.canScrollNext = scrollLeft < scrollWidth - clientWidth;
    }
  }
}
