import { Component, HostBinding, Input } from '@angular/core';

type AspectRatioVariants = {
  ratio: `${number} / ${number}`;
};

@Component({
  selector: '[pui-aspect-ratio]',
  host: {
    'data-testid': 'pui-aspect-ratio',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        overflow: hidden;
      }
    `,
  ],
  standalone: true,
})
export class AspectRatioComponent {
  @Input('pui-aspect-ratio') aspectRatio: AspectRatioVariants['ratio'] = '1 / 1';

  @HostBinding('style.aspect-ratio') get aspectRatioStyle() {
    return this.aspectRatio;
  }
}
