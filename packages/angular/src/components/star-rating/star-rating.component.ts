import { Component, Input } from '@angular/core';
import { IconStarComponent } from '../../icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[qui-star-rating]',
  imports: [CommonModule, IconStarComponent],
  standalone: true,
  host: {
    'data-testid': 'qui-star-rating',
  },
  template: `
    <i
      data-testid="qui-star-rating-star"
      qui-icon
      name="star"
      [ngClass]="getStarClassList(star)"
      *ngFor="let star of total; track: star"
    >
    </i>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: var(--spacing-1);
      }

      .star {
        width: var(--spacing-4);
        height: var(--spacing-4);
      }

      .star.variant--filled {
        fill: var(--color-yellow-500);
      }

      .star.variant--unfilled {
        fill: var(--color-gray-300);
      }
    `,
  ],
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() stars = 5;

  get total() {
    return Array.from({ length: this.stars }, (_, i) => i + 1);
  }

  getStarClassList(index: number) {
    return {
      star: true,
      [`variant--filled`]: index <= this.rating,
      [`variant--unfilled`]: index > this.rating,
    };
  }
}
