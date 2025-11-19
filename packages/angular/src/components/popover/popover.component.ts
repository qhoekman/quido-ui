import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'qui-popover',
  standalone: true,
  host: {
    'data-testid': 'qui-popover',
  },
  template: `<ng-content></ng-content> `,
})
export class PopoverComponent implements OnDestroy, OnInit {
  @Input() popoverContent!: TemplateRef<unknown>;
  @Input() autoSize = false;
  public overlayRef!: OverlayRef;
  private intersectionObserver!: IntersectionObserver;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 16,
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -16,
        },
      ])
      .withFlexibleDimensions(true)
      .withGrowAfterOpen();

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.hide();
          }
        });
      },
      { threshold: 0.1 }
    );

    this.intersectionObserver.observe(this.elementRef.nativeElement);

    // Listen for clicks outside the popover
    document.addEventListener('click', this.onDocumentClick.bind(this), true);
  }

  show() {
    if (!this.overlayRef.hasAttached()) {
      const popoverPortal = new TemplatePortal(
        this.popoverContent,
        this.viewContainerRef
      );
      this.overlayRef.attach(popoverPortal);

      if (this.autoSize) {
        const triggerWidth = this.elementRef.nativeElement.offsetWidth;
        this.overlayRef.overlayElement.style.width = `${triggerWidth}px`;
      }
    }
  }

  hide() {
    this.overlayRef.detach();
  }

  toggle() {
    if (this.overlayRef.hasAttached()) {
      this.hide();
    } else {
      this.show();
    }
  }

  get isOpen() {
    return this.overlayRef.hasAttached();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(_event: KeyboardEvent) {
    this.hide();
  }

  private onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const popoverElement = this.overlayRef.overlayElement;

    if (
      !this.elementRef.nativeElement.contains(target) &&
      !popoverElement.contains(target)
    ) {
      this.hide();
    }
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    document.removeEventListener(
      'click',
      this.onDocumentClick.bind(this),
      true
    );
  }
}
