import { Directive, HostListener } from '@angular/core';
import { StepsComponent } from './steps.component';

@Directive({
  selector: '[puiStepsNext]',
  standalone: true,
  host: {
    'data-testid': 'steps__next',
  },
})
export class StepsNextDirective {
  constructor(private stepsComponent: StepsComponent) {}

  @HostListener('click')
  nextStep() {
    this.stepsComponent.nextStep();
  }
}
