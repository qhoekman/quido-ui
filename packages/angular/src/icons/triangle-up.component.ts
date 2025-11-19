import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: '[pui-icon][name="triangle-up"], [pui-icon-triangle-up]',
  standalone: true,
  template: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor" /></svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconTriangleUpComponent extends IconComponent {
  override name = 'triangle-up';
}

