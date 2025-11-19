import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'qui-steps',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'qui-steps',
  },
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `,
  ],
})
export class StepsComponent implements OnInit {
  @Input() count = 0;
  private currentStepSubject = new BehaviorSubject<number>(0);
  private completedStepsSubject = new BehaviorSubject<Set<number>>(new Set());

  currentStep$ = this.currentStepSubject.asObservable();
  completedSteps$ = this.completedStepsSubject.asObservable();

  ngOnInit() {
    this.setTotalSteps(this.count);
  }

  setTotalSteps(count: number) {
    this.count = count;
  }

  setStep(step: number) {
    this.currentStepSubject.next(Math.max(0, Math.min(step, this.count - 1)));
  }

  nextStep() {
    const currentStep = this.currentStepSubject.value;
    if (currentStep < this.count - 1) {
      this.setStep(currentStep + 1);
      this.completeStep(currentStep);
    }

    // if last step, complete all steps
    if (currentStep === this.count - 1) {
      this.completeStep(currentStep);
    }
  }

  prevStep() {
    const currentStep = this.currentStepSubject.value;
    this.setStep(currentStep - 1);
  }

  completeStep(step: number) {
    const completedSteps = new Set(this.completedStepsSubject.value);
    completedSteps.add(step);
    this.completedStepsSubject.next(completedSteps);
  }
}
