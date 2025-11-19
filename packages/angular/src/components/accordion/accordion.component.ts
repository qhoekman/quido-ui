import { Component } from '@angular/core';

@Component({
  selector: '[pui-accordion]',
  host: {
    'data-testid': 'pui-accordion',
  },
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class AccordionComponent {}
