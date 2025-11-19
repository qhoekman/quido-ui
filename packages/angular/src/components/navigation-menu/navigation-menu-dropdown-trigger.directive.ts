import { CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[pui-navigation-menu-dropdown-trigger]',
  hostDirectives: [CdkMenuItem],
  host: {
    'data-testid': 'pui-navigation-menu-dropdown-trigger',
  },
  standalone: true,
})
export class NavigationMenuDropdownTriggerDirective {
  constructor(private menuTrigger: CdkMenuTrigger) {}

  @HostListener('mouseenter')
  handleMouseEnter() {
    this.menuTrigger.open();
  }
}
