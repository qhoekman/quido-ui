import {
  Component,
  Input,
  OnInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';

@Component({
  selector: '[qui-autocomplete-item]',
  standalone: true,
  host: {
    role: 'option',
    '[attr.aria-selected]': 'isSelected',
    'data-testid': 'qui-autocomplete-item',
    tabindex: '0',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: var(--spacing-2) var(--spacing-4);
        cursor: pointer;
      }

      :host:hover {
        background-color: var(--color-muted);
      }

      :host[aria-selected='true'] {
        background-color: hsl(from var(--color-primary) h s l / 33%);
      }
    `,
  ],
})
export class AutocompleteItemComponent implements OnInit {
  @Input() value!: string;
  @Input() label!: string;
  isSelected = false;

  constructor(
    private autocomplete: AutocompleteComponent,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.isSelected =
      this.autocomplete.getSelectedOption()?.value === this.value;
    this.autocomplete.getSelectedOption$().subscribe((option) => {
      this.isSelected = option?.value === this.value;
    });
  }

  @HostListener('click')
  handleClick() {
    this.autocomplete.select({
      value: this.value,
      label: this.label,
    });
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Space') {
      this.autocomplete.select({
        value: this.value,
        label: this.label,
      });
    }

    if (event.key === 'ArrowDown') {
      const nextSibling = this.el.nativeElement.nextElementSibling;
      if (nextSibling) {
        nextSibling.focus();
      }
    }

    if (event.key === 'ArrowUp') {
      const previousSibling = this.el.nativeElement.previousElementSibling;
      if (previousSibling) {
        previousSibling.focus();
      }
    }
  }
}
