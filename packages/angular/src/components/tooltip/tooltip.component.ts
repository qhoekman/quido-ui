import {
  ConnectionPositionPair,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayModule,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ContentChild,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TooltipTriggerDirective } from './tooltip-trigger.directive';

type TooltipStrategy = 'always' | 'overflow';

@Component({
  selector: '*[qui-tooltip]',
  standalone: true,
  host: {
    'data-testid': 'qui-tooltip',
  },
  imports: [OverlayModule],
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class TooltipComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() strategy: TooltipStrategy = 'overflow';
  @ContentChild(TooltipTriggerDirective) trigger!: TooltipTriggerDirective;
  private overlayRef!: OverlayRef;
  private observer: IntersectionObserver | undefined;
  private isOverflowing = false;
  private currentPosition: string | null = 'bottom';
  private positionStrategy: FlexibleConnectedPositionStrategy | undefined;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (!this.isStrategyOverflow()) {
      return;
    }

    this.observer = new IntersectionObserver(
      () => {
        this.isOverflowing = this.checkOverflow(
          this.trigger.elementRef.nativeElement
        );
        if (
          this.isStrategyOverflow() &&
          !this.isOverflowing &&
          this.overlayRef?.hasAttached()
        ) {
          this.overlayRef.detach();
        }
      },
      { threshold: 1.0 }
    );
  }

  ngAfterViewInit() {
    if (
      this.isStrategyOverflow() &&
      this.observer &&
      this.trigger?.elementRef?.nativeElement
    ) {
      this.observer.observe(this.trigger.elementRef.nativeElement);
    }
    this.positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.trigger.elementRef.nativeElement)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 2,
        },
        {
          originX: 'start',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
          offsetX: 2,
        },
        {
          originX: 'end',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
          offsetX: -2,
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -2,
        },
      ])
      .withFlexibleDimensions(true)
      .withGrowAfterOpen();

    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy,
      disposeOnNavigation: true,
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.currentPosition = null;

    this.positionStrategy?.positionChanges.subscribe((change) => {
      this.currentPosition = this.getPosition(change.connectionPair);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

  @HostListener('mousemove', ['$event'])
  move(_event: MouseEvent) {
    if (!this.overlayRef) {
      return;
    }
    if (
      this.isStrategyAlways() ||
      (this.isStrategyOverflow() && this.isOverflowing)
    ) {
      this.overlayRef.detach();

      const tooltipPortal = new TemplatePortal(
        this.trigger.tooltipContentFor,
        this.viewContainerRef,
        {
          $implicit: {
            position: this.currentPosition ?? 'none',
          },
        }
      );
      this.overlayRef.attach(tooltipPortal);
    }
  }

  @HostListener('mouseleave')
  hide() {
    if (!this.overlayRef) {
      return;
    }
    this.overlayRef.detach();
  }

  private checkOverflow(element: HTMLElement) {
    return (
      element.scrollWidth > element.clientWidth ||
      element.scrollHeight > element.clientHeight
    );
  }

  private isStrategyOverflow() {
    return this.strategy === 'overflow';
  }

  private isStrategyAlways() {
    return this.strategy === 'always';
  }

  private getPosition(connectionPair: ConnectionPositionPair) {
    let position = connectionPair.overlayY === 'top' ? 'top' : 'bottom';

    if (connectionPair.overlayY === 'center') {
      position = connectionPair.overlayX === 'start' ? 'left' : 'right';
    }

    return position;
  }
}
