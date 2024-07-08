import {
  Directive,
  Input,
  ElementRef,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  HostListener,
  Component
} from '@angular/core'
import { Overlay, OverlayRef, OverlayPositionBuilder } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'

@Directive({
  selector: '[quiTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('quiTooltip') text = ''
  private overlayRef!: OverlayRef

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
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -4
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 4
        }
      ])

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      maxWidth: 'fit-content'
    })
  }

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(TooltipContentComponent, this.viewContainerRef)
    const tooltipRef = this.overlayRef?.attach(tooltipPortal)
    if (!tooltipRef) return
    tooltipRef.instance.text = this.text
  }

  @HostListener('mouseleave')
  hide() {
    this.overlayRef?.detach()
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose()
    }
  }
}

@Component({
  selector: 'qui-tooltip-content',
  template: `<div
    class="z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-xs shadow animate-in fade-in-0 zoom-in-95"
  >
    {{ text }}
  </div>`
})
export class TooltipContentComponent {
  text = ''
}
