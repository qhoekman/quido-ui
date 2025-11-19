import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: '[pui-icon][name="triangle-left"], [pui-icon-triangle-left]',
  standalone: true,
  template: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor" /></svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconTriangleLeftComponent extends IconComponent {
  override name = 'triangle-left';
}

