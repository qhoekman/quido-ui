import { Component, Input, ViewEncapsulation } from '@angular/core';

export type IconVariants = {
  size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'auto';
};

@Component({
  selector: 'qui-icon',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styleUrls: ['./icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @Input() size: IconVariants['size'] = 'md';
  @Input() name = '';

  getClassList() {
    return {
      ['qui-icon']: true,
      [`size--${this.size}`]: this.size,
    };
  }
}
