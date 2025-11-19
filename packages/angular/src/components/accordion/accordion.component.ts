import { Component } from '@angular/core';

@Component({
  selector: '[qui-accordion]',
  host: {
    'data-testid': 'qui-accordion',
  },
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class AccordionComponent {}
