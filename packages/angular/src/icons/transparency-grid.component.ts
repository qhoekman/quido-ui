import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: '[pui-icon][name="transparency-grid"], [pui-icon-transparency-grid]',
  standalone: true,
  template: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">  <path    opacity=".25"    fill-rule="evenodd"    clip-rule="evenodd"    d="M0 0H3V3H0V0ZM6 3H3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3ZM6 6V3H9V6H6ZM6 9H3V6H6V9ZM9 9V6H12V9H9ZM9 9H6V12H9V9Z"    fill="currentColor"  /></svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconTransparencyGridComponent extends IconComponent {
  override name = 'transparency-grid';
}

