import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StepsComponent } from './steps.component';
import { IconCheckComponent } from '../../icons';

@Component({
  selector: 'qui-steps-item',
  standalone: true,
  imports: [CommonModule, IconCheckComponent],
  host: {
    'data-testid': 'qui-steps-item',
  },
  template: `
    <div
      class="steps-item-trigger"
      (click)="handleClick(getIndex())"
      (keydown)="handleKeyDown($event)"
      data-testid="qui-steps-item-trigger"
      tabindex="0"
    >
      <div
        [class.steps-item--completed]="isCompleted"
        [class.steps-item--completed-fg]="isCompleted"
        [class.steps-item--current-fg]="isCurrent && !isCompleted"
        [class.steps-item--undefined]="!isCurrent && !isCompleted"
        data-testid="qui-steps-item-circle"
        class="steps-item-circle"
      >
        <ng-container *ngIf="isCompleted; else stepNumber">
          <i
            [class.steps-item--circle-completed]="isCompleted"
            qui-icon
            name="check"
          >
          </i>
        </ng-container>
        <ng-template #stepNumber>
          <span>{{ getIndex() + 1 }}</span>
        </ng-template>
      </div>
      <span
        data-testid="qui-steps-item-title"
        [class.steps-item--completed-fg]="isCompleted"
        [class.steps-item--current-fg]="isCurrent && !isCompleted"
        [class.steps-item--undefined]="!isCurrent && !isCompleted"
        class="steps-item-title"
      >
        <ng-content></ng-content>
      </span>
    </div>
    <div
      *ngIf="getIndex() < count - 1"
      data-testid="qui-steps-item-line"
      class="steps-item-line"
    >
      <div
        data-testid="qui-steps-item-line-fill"
        [style.width]="isCompleted ? '100%' : '0'"
        class="steps-item-line-fill"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        flex: 1;
        display: flex;
        align-items: center;
        position: relative;
        padding-right: 1rem;
      }

      .steps-item-trigger {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: var(--spacing-2);
      }

      .steps-item-circle {
        width: var(--spacing-8);
        height: var(--spacing-8);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-border);
        color: var(--color-primary-fg);
        transition: background-color 0.3s, border-color 0.3s;
      }

      .steps-item-circle svg {
        fill: currentcolor;
      }

      .steps-item-title {
        font-size: var(--font-size-sm);
        font-weight: 500;
        white-space: nowrap;
      }

      .steps-item-line {
        z-index: 10;
        height: 2px;
        width: 100%;
        margin-left: var(--spacing-2);
        background-color: var(--color-muted);
      }

      .steps-item-line-fill {
        height: 100%;
        background-color: var(--color-primary);
        transition: width 0.3s;
      }

      .steps-item--completed-fg {
        color: var(--color-background-fg);
      }

      .steps-item--circle-completed {
        color: var(--color-primary-fg);
      }

      .steps-item--completed {
        border-color: var(--color-primary);
        background-color: var(--color-primary);
      }

      .steps-item--current-fg {
        color: var(--color-primary);
      }

      .steps-item--start {
        color: var(--color-muted-foreground);
      }

      .steps-item--undefined {
        color: var(--color-muted-foreground);
      }
    `,
  ],
})
export class StepsItemComponent implements OnInit {
  @Input() index = 0;
  @Input() title = '';
  isCompleted = false;
  isCurrent = false;
  allStepsCompleted = false;
  count = 0;

  constructor(private stepsComponent: StepsComponent) {}

  ngOnInit() {
    this.stepsComponent.currentStep$.subscribe((step) => {
      this.isCurrent = step === this.getIndex();
    });
    this.stepsComponent.completedSteps$.subscribe((completedSteps) => {
      this.isCompleted = completedSteps.has(this.getIndex());
      this.allStepsCompleted =
        completedSteps.size === this.stepsComponent.count;
      this.count = this.stepsComponent.count;
    });
  }

  getIndex() {
    return Number(this.index);
  }

  setStep(index: number) {
    this.stepsComponent.setStep(index);
  }

  handleClick(index: number) {
    this.setStep(index);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.setStep(this.getIndex());
    }
  }
}
