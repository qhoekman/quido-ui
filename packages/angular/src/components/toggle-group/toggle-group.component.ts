import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { BehaviorSubject } from 'rxjs';

export type ToggleGroupVariants = {
  variant: 'default' | 'outline';
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'div[qui-toggle-group]',
  standalone: true,
  imports: [CommonModule, ToggleComponent],
  host: {
    'data-testid': 'qui-toggle-group',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-default);
      }

      :host ::ng-deep a,
      :host ::ng-deep button {
        position: relative;
        border-radius: 0;
        border-left: 1px solid var(--color-border);
        margin: 0;
      }

      :host ::ng-deep a:first-child,
      :host ::ng-deep button:first-child {
        border-top-left-radius: var(--border-radius-md);
        border-bottom-left-radius: var(--border-radius-md);
        border-left: none;
      }

      :host ::ng-deep a:last-child,
      :host ::ng-deep button:last-child {
        border-top-right-radius: var(--border-radius-md);
        border-bottom-right-radius: var(--border-radius-md);
        border-left: none;
      }
    `,
  ],
})
export class ToggleGroupComponent implements AfterContentInit {
  @Input() strategy: 'single' | 'multiple' = 'single';
  @Input() variant: ToggleGroupVariants['variant'] = 'default';
  @Input() size: ToggleGroupVariants['size'] = 'md';
  @ContentChildren(ToggleComponent, { descendants: true })
  toggles!: QueryList<ToggleComponent>;
  selectedOptions$ = new BehaviorSubject<string[]>([]);

  ngAfterContentInit() {
    this.selectedOptions$.subscribe((value) => {
      if (value.length === 0) {
        this.toggles.forEach((toggle) => {
          toggle.selected = false;
        });
        return;
      }

      this.toggles.forEach((toggle) => {
        toggle.selected = value.includes(toggle.value);
      });
    });

    this.toggles.forEach((toggle) => {
      toggle.variant = this.variant;
      toggle.size = this.size;
      toggle.valueChange.subscribe((selected) => {
        if (this.strategy === 'single') {
          if (selected) {
            this.selectedOptions$.next([toggle.value]);
          } else {
            this.selectedOptions$.next([]);
          }
        } else if (this.strategy === 'multiple') {
          const current = this.selectedOptions$.getValue();
          if (!selected) {
            this.selectedOptions$.next(
              current.filter((v) => v !== toggle.value)
            );
            return;
          }
          this.selectedOptions$.next([...current, toggle.value]);
        }
      });
    });
  }
}
