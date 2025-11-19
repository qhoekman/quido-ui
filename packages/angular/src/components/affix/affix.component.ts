import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: '[qui-affix]',
  host: {
    'data-testid': 'qui-affix',
    '[class]': 'getClassList()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        z-index: 10;
      }

      :host-context(.position-top) {
        top: var(--affix-top, 0);
      }

      :host-context(.position-bottom) {
        bottom: var(--affix-bottom, 0);
      }

      :host-context(.sticky.position-top) {
        top: 0;
      }

      :host-context(.sticky.position-bottom) {
        bottom: 0;
      }

      :host-context(.sticky) {
        position: sticky;
      }
    `,
  ],
  standalone: true,
})
export class AffixComponent implements OnDestroy {
  @Input() offsetTop: number | null = null;
  @Input() offsetBottom: number | null = null;
  private isSticky$ = new BehaviorSubject<boolean>(false);
  private hasIntersected$ = new BehaviorSubject<boolean>(false);
  private intersectionObserver: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
  }

  setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.hasIntersected$.next(true);
          this.intersectionObserver?.disconnect();
        }
      });
    });

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  getClassList() {
    return {
      sticky: this.isSticky$.value && this.hasIntersected$.value,
      'position-top': this.getDirection() === 'top',
      'position-bottom': this.getDirection() === 'bottom',
    };
  }

  getDirection() {
    if (this.offsetTop !== null) {
      return 'top';
    } else if (this.offsetBottom !== null) {
      return 'bottom';
    }
    return 'top';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.hasIntersected$.value) return;

    const scrollTop = document.documentElement.scrollTop;
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    let isSticky = rect.top < scrollTop;
    if (this.getDirection() === 'bottom') {
      isSticky = rect.bottom > scrollTop;
    }

    this.isSticky$.next(isSticky);
  }
}
