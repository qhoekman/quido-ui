import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type StrengthLevel = 'weak' | 'medium' | 'strong' | '';

interface Requirement {
  regex: RegExp;
  description: string;
}

@Component({
  selector: 'div[pui-password-strength]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'password-strength',
  },
  template: `
    <div
      class="bar"
      data-testid="password-strength-bar"
      *ngFor="let bar of [0, 1, 2]; let index = index"
      [ngStyle]="getBarStyle(index)"
    ></div>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: var(--spacing-2);
        height: var(--spacing-2);
        margin: var(--spacing-2) 0;
      }

      :host .bar {
        height: var(--spacing-2);
        width: var(--span-1-3);
        border-radius: var(--radius-full);
        transition: background-color 0.2s ease-in-out;
      }
    `,
  ],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() value = '';
  @Input() requirements: Requirement[] = [
    { regex: /.{8,}/, description: 'At least 8 characters' },
    { regex: /[a-z]/, description: 'At least one lowercase letter' },
    { regex: /[A-Z]/, description: 'At least one uppercase letter' },
    { regex: /[0-9]/, description: 'At least one number' },
    { regex: /[^A-Za-z0-9]/, description: 'At least one special character' },
  ];
  @Input() thresholds: [number, number] = [2, 4]; // minimum and maximum number of requirements met

  strength: StrengthLevel = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.evaluateStrength();
    }
  }

  evaluateStrength(): void {
    const metRequirements = this.requirements.filter((req) => req.regex.test(this.value));

    if (metRequirements.length <= this.thresholds[0]) {
      this.strength = 'weak';
    } else if (metRequirements.length <= this.thresholds[1]) {
      this.strength = 'medium';
    } else {
      this.strength = 'strong';
    }
  }

  getBarStyle(index: number): Record<string, string> {
    if (this.strength === 'weak' && index === 0) {
      return { backgroundColor: 'var(--color-red-500)' };
    } else if (this.strength === 'medium' && index <= 1) {
      return { backgroundColor: 'var(--color-orange-400)' };
    } else if (this.strength === 'strong') {
      return { backgroundColor: 'var(--color-emerald-500)' };
    } else {
      return { backgroundColor: 'var(--color-muted)' };
    }
  }
}
