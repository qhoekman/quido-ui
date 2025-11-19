import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector:
    '[qui-icon][name="drag-handle-dots-1"], [qui-icon-drag-handle-dots-1]',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="12.498" r=".6" fill="currentColor" />
  </svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconDragHandleDots1Component extends IconComponent {
  override name = 'drag-handle-dots-1';
}
