import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { InputComponent, InputVariants } from '../input/input.component';

@Component({
  selector: 'pui-pin-input',
  standalone: true,
  imports: [CommonModule, InputComponent],
  host: {
    'data-testid': 'pui-pin-input',
  },
  template: `
    <input
      pui-input
      data-testid="pui-pin-input-input"
      [name]="name + '-' + (i + 1)"
      *ngFor="let pin of [].constructor(length); let i = index"
      [attr.maxlength]="1"
      (input)="onInput($event, i)"
      (keydown)="onKeyDown($event, i)"
      [size]="size"
      [attr.aria-label]="'Digit ' + (i + 1) + ' of ' + length"
      [attr.aria-invalid]="isInvalid(i) ? 'true' : null"
      [attr.aria-required]="true"
    />
  `,
  styles: [
    `
      :host [pui-input].size--md {
        margin-inline: var(--spacing-2);
        width: var(--spacing-8);
        height: var(--spacing-8);
      }

      :host [pui-input].size--sm {
        margin-inline: var(--spacing-1);
        width: var(--spacing-6);
        height: var(--spacing-6);
      }

      :host [pui-input].size--lg {
        margin-inline: var(--spacing-3);
        width: var(--spacing-10);
        height: var(--spacing-8);
      }
    `,
  ],
})
export class PinInputComponent implements AfterViewInit {
  @Input() name = '';
  @Input() length = 4;
  @Input() size: InputVariants['size'] = 'md';
  @Output() valueChange = new EventEmitter<string>();
  @Output() valueBlur = new EventEmitter<string>();
  @Output() valueComplete = new EventEmitter<string>();
  @ViewChildren(InputComponent, { read: ElementRef })
  inputs!: QueryList<ElementRef>;

  pins: string[] = [];

  ngAfterViewInit() {
    this.pins = new Array(this.length).fill('');
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    this.pins[index] = input.value;
    this.valueChange.emit(input.value);
    this.valueBlur.emit(input.value);
    if (this.pins.length === this.length) {
      this.valueComplete.emit(this.pins.join(''));
    }

    if (input.value.length === 1 && index < this.length - 1) {
      this.focusNextInput(index);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.pins[index] && index > 0) {
      this.focusPreviousInput(index);
    }
  }

  private focusNextInput(index: number) {
    const nextInput = this.inputs.toArray()[index + 1];
    if (nextInput) {
      nextInput.nativeElement.focus();
    }
  }

  private focusPreviousInput(index: number) {
    const prevInput = this.inputs.toArray()[index - 1];
    if (prevInput) {
      prevInput.nativeElement.focus();
    }
  }

  isInvalid(_index: number): boolean {
    return false;
  }
}
