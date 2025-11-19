import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { ComboboxComponent } from './combobox.component';

@Component({
  selector: '[pui-combobox-item]',
  standalone: true,
  host: {
    role: 'option',
    '[attr.aria-selected]': 'isSelected',
    'data-testid': 'pui-combobox-item',
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
export class ComboboxItemComponent implements OnInit {
  @Input() value!: string;
  @Input() label!: string;
  isSelected = false;

  constructor(
    private combobox: ComboboxComponent,
    private el: ElementRef,
  ) {}

  ngOnInit() {
    this.isSelected = this.combobox.getSelectedOption()?.value === this.value;
    this.combobox.getSelectedOption$().subscribe((option) => {
      this.isSelected = option?.value === this.value;
    });
  }

  @HostListener('click')
  handleClick() {
    this.combobox.select({
      value: this.value,
      label: this.label,
    });
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Space') {
      this.combobox.select({
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
