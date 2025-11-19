import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: '[qui-icon][name="triangle-right"], [qui-icon-triangle-right]',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
  </svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconTriangleRightComponent extends IconComponent {
  override name = 'triangle-right';
}
