import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastOptions, ToastService } from './toast.service';

import { CommonModule } from '@angular/common';
import { IconCross1Component } from '../../icons/cross-1.component';
import { ToastCloseComponent } from './toast-close.component';
import { ToastDescriptionComponent } from './toast-description.component';
import { ToastTitleComponent } from './toast-title.component';
import { ToastViewportComponent } from './toast-viewport.component';
import { ToastComponent } from './toast.component';

@Component({
  selector: 'pui-toaster',
  standalone: true,
  imports: [
    CommonModule,
    ToastComponent,
    ToastTitleComponent,
    ToastDescriptionComponent,
    ToastViewportComponent,
    ToastCloseComponent,
    IconCross1Component,
  ],
  template: `
    <pui-toast-viewport>
      <pui-toast
        *ngFor="let toast of toasts"
        [variant]="toast.variant"
        (click)="removeToast(toast)"
      >
        <div class="vstack">
          <h3 pui-toast-title>{{ toast.title }}</h3>
          <p pui-toast-description *ngIf="toast.description">
            {{ toast.description }}
          </p>
          <ng-container *ngComponentOutlet="toast.action"></ng-container>
        </div>
        <button pui-toast-close (close)="removeToast(toast)">
          <i pui-icon-cross-1 size="sm"></i>
        </button>
      </pui-toast>
    </pui-toast-viewport>
  `,
  styles: [
    `
      pui-toast {
        margin-bottom: var(--spacing-4);
      }

      .vstack {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }
    `,
  ],
})
export class ToasterComponent implements OnInit, OnDestroy {
  private DEFAULT_TOAST_DURATION = 5000;
  toasts: ToastOptions[] = [];
  private toastSubscription: Subscription = new Subscription();
  private dismissSubscription: Subscription = new Subscription();
  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastSubscription = this.toastService.toastState$.subscribe(
      (toast) => {
        this.toasts.push(toast);
        setTimeout(() => this.removeToast(toast), this.DEFAULT_TOAST_DURATION);
      }
    );

    this.dismissSubscription = this.toastService.dismissState$.subscribe(
      (toast) => this.removeToast(toast)
    );
  }

  removeToast(toast: ToastOptions) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
    this.dismissSubscription.unsubscribe();
  }
}
