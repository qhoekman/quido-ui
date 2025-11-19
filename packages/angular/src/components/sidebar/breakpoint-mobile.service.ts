import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject, takeUntil } from 'rxjs';

const MOBILE_BREAKPOINT = 768;

@Injectable({
  providedIn: 'root',
})
export class BreakpointMobileService implements OnDestroy {
  private isMobileSubject = new BehaviorSubject<boolean>(this.checkIsMobile());
  private destroy$ = new Subject<void>();
  isMobile$ = this.isMobileSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.setupResizeListener();
  }

  private setupResizeListener(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.ngZone.run(() => {
            this.isMobileSubject.next(this.checkIsMobile());
          });
        });
    });
  }

  private checkIsMobile(): boolean {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
