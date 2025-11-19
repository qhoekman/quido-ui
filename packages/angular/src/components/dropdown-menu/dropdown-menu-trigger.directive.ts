import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

type DropdownMenuVariants = {
  side: 'top' | 'bottom' | 'left' | 'right';
};

@Directive({
  selector: '[puiDropdownMenuTrigger]',
  host: {
    'data-testid': 'pui-dropdown-menu-trigger',
  },
  standalone: true,
})
export class DropdownMenuTriggerDirective implements OnInit {
  @Input() dropdownMenuFor!: TemplateRef<unknown>;
  @Input() dropdownMenuSide: DropdownMenuVariants['side'] = 'bottom';
  overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.getOverlayPosition());

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
  }

  @HostListener('click')
  handleClick() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      const dropdownPortal = new TemplatePortal(this.dropdownMenuFor, this.viewContainerRef);
      this.overlayRef.attach(dropdownPortal);
    }
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (
      this.overlayRef.hasAttached() &&
      !this.elementRef.nativeElement.contains(event.target as Node) &&
      !this.overlayRef.overlayElement.contains(event.target as Node)
    ) {
      this.close();
      return;
    }

    if (
      this.overlayRef.hasAttached() &&
      event.target &&
      event.target instanceof HTMLElement &&
      event.target.closest('li[pui-dropdown-menu-item]') &&
      this.overlayRef.overlayElement.contains(event.target as Node)
    ) {
      this.overlayRef.detach();
    }
  }

  @HostListener('keydown.escape')
  handleEscape() {
    this.close();
  }

  open() {
    const dropdownPortal = new TemplatePortal(this.dropdownMenuFor, this.viewContainerRef);
    return this.overlayRef.attach(dropdownPortal);
  }

  close() {
    if (!this.overlayRef.hasAttached()) {
      return;
    }
    this.overlayRef.detach();
  }

  getOverlayPosition(): ConnectedPosition[] {
    if (this.dropdownMenuSide === 'top') {
      return [
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        },
      ];
    }
    if (this.dropdownMenuSide === 'bottom') {
      return [
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ];
    }
    if (this.dropdownMenuSide === 'left') {
      return [
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'top',
        },
      ];
    }
    if (this.dropdownMenuSide === 'right') {
      return [
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        },
      ];
    }

    return [
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      },
      {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
      },
      {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
      },
      {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
      },
    ];
  }
}
