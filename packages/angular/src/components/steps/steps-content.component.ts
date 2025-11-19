import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StepsComponent } from './steps.component';

@Component({
  selector: 'pui-steps-content',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-steps-content',
  },
  template: `
    <ng-container *ngIf="isCurrent && !allStepsCompleted">
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class StepsContentComponent implements OnInit {
  @Input() index = 0;
  isCurrent = false;
  allStepsCompleted = false;

  constructor(private stepsComponent: StepsComponent) {}

  ngOnInit() {
    this.stepsComponent.currentStep$.subscribe((step) => {
      this.isCurrent = step === Number(this.index);
    });

    this.stepsComponent.completedSteps$.subscribe((completedSteps) => {
      this.allStepsCompleted = completedSteps.size === this.stepsComponent.count;
    });
  }
}
