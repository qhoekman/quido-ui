import { Directive, HostListener } from '@angular/core';
import { StepsComponent } from './steps.component';

@Directive({
  selector: '[puiStepsPrev]',
  standalone: true,
  host: {
    'data-testid': 'qui-steps-prev',
  },
})
export class StepsPrevDirective {
  constructor(private stepsComponent: StepsComponent) {}

  @HostListener('click')
  prevStep() {
    this.stepsComponent.prevStep();
  }
}
