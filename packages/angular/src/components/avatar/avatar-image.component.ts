import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'img[pui-avatar-image]',
  standalone: true,
  host: {
    'data-testid': 'pui-avatar-image',
  },
  template: ``,
  styles: [
    `
      :host {
        width: var(--size-full);
        height: var(--size-full);
        object-fit: cover;
        border-radius: var(--border-radius-full);
        aspect-ratio: 1 / 1;
      }
    `,
  ],
})
export class AvatarImageComponent implements OnInit, OnChanges, OnDestroy {
  @Output() fallback = new EventEmitter<boolean>();
  private subscription!: Subscription;
  private imgStatus$ = new BehaviorSubject<string>('idle');

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    this.subscription = this.imgStatus$.subscribe((status) => {
      this.fallback.emit(status !== 'loaded');
    });
    this.loadImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['src'] || (changes['elementRef'] && !changes['elementRef'].firstChange)) {
      this.loadImage();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadImage() {
    if (!this.elementRef.nativeElement.src) {
      this.imgStatus$.next('error');
      return;
    }

    const image = new window.Image();
    const updateStatus = (status: string) => () => {
      this.imgStatus$.next(status);
    };

    this.imgStatus$.next('loading');
    image.onload = updateStatus('loaded');
    image.onerror = updateStatus('error');
    image.src = this.elementRef.nativeElement.src;
    if (this.elementRef.nativeElement.referrerPolicy) {
      image.referrerPolicy = this.elementRef.nativeElement.referrerPolicy;
    }

    return this.imgStatus$;
  }
}
