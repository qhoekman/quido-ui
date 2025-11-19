import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastVariants } from './toast.component';

export type ToastOptions = {
  title: string;
  description?: string;
  action?: unknown;
  variant: ToastVariants['variant'];
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<ToastOptions>();
  private dismissSubject = new Subject<ToastOptions>();
  toastState$ = this.toastSubject.asObservable();
  dismissState$ = this.dismissSubject.asObservable();

  showToast(options: ToastOptions) {
    this.toastSubject.next(options);
  }

  dismissToast(options: ToastOptions) {
    this.dismissSubject.next(options);
  }
}
