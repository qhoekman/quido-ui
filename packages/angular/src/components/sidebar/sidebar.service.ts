import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointMobileService } from './breakpoint-mobile.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarState = new BehaviorSubject<'expanded' | 'collapsed'>('expanded');
  private open = new BehaviorSubject<boolean>(true);
  private openMobile = new BehaviorSubject<boolean>(false);
  private isMobile = new BehaviorSubject<boolean>(false);

  // Observable streams
  sidebarState$ = this.sidebarState.asObservable();
  open$ = this.open.asObservable();
  openMobile$ = this.openMobile.asObservable();
  isMobile$ = this.isMobile.asObservable();

  constructor(private breakpointMobileService: BreakpointMobileService) {
    this.breakpointMobileService.isMobile$.subscribe((isMobile) => {
      this.isMobile.next(isMobile);
    });

    this.open$.subscribe((open) => {
      this.sidebarState.next(open ? 'expanded' : 'collapsed');
    });
  }

  // Methods to update the state
  setSidebarState(state: 'expanded' | 'collapsed') {
    this.sidebarState.next(state);
  }

  setOpen(open: boolean) {
    this.open.next(open);
  }

  setOpenMobile(open: boolean) {
    this.openMobile.next(open);
  }

  setIsMobile(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }

  toggleSidebar() {
    if (this.isMobile.value) {
      this.openMobile.next(!this.openMobile.value);
    } else {
      this.open.next(!this.open.value);
    }
  }
}
