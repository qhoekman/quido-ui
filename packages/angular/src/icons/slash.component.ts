import { Component, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: '[qui-icon][name="slash"], [qui-icon-slash]',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
      fill="currentColor"
    />
  </svg>`,
  styleUrls: ['../components/icon/icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconSlashComponent extends IconComponent {
  override name = 'slash';
}
