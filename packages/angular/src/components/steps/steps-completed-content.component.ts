import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StepsComponent } from './steps.component';

@Component({
  selector: 'qui-steps-completed-content',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-steps-completed-content',
  },
  template: `
    <ng-container *ngIf="allStepsCompleted">
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class StepsCompletedContentComponent implements OnInit {
  allStepsCompleted = false;

  constructor(private stepsComponent: StepsComponent) {}

  ngOnInit() {
    this.stepsComponent.completedSteps$.subscribe((completedSteps) => {
      this.allStepsCompleted =
        completedSteps.size === this.stepsComponent.count;
    });
  }
}
