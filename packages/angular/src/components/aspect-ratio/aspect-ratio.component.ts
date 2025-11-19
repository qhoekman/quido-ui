import { Component, HostBinding, Input } from '@angular/core';

type AspectRatioVariants = {
  ratio: `${number} / ${number}`;
};

@Component({
  selector: '[qui-aspect-ratio]',
  host: {
    'data-testid': 'qui-aspect-ratio',
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
  @Input('qui-aspect-ratio') aspectRatio: AspectRatioVariants['ratio'] =
    '1 / 1';

  @HostBinding('style.aspect-ratio') get aspectRatioStyle() {
    return this.aspectRatio;
  }
}
