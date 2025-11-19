import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'qui-color-palette,[qui-color-palette]',
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-color-palette',
  },
  standalone: true,
  template: `
    <button
      data-testid="color-square"
      *ngFor="let hex of sortedColorHexagons"
      class="color-square"
      [style.background]="hex.value"
      [class.selected]="hex === selectedColor"
      (click)="selectColor(hex)"
    >
      <input
        data-testid="color-square-input"
        type="hidden"
        [value]="selectedColor?.value"
        name="selectedColor"
      />
    </button>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: repeat(11, var(--spacing-4));
        gap: var(--spacing-1);
      }

      :host .color-square {
        width: var(--spacing-4);
        height: var(--spacing-4);
        border: none;
        cursor: pointer;
        box-shadow: inset 0 0 0 1px var(--color-border);
      }

      :host .color-square.selected {
        box-shadow: inset 0 0 0 1px white, 0 0 0 1px black;
      }
    `,
  ],
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input() color: string | null = null;
  @Output() valueChange = new EventEmitter<string>();

  colorFamilies = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];

  shades = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ];

  // Colors without shades
  singleColors = [
    { color: 'primary', value: 'var(--color-primary)' },
    { color: 'secondary', value: 'var(--color-secondary)' },
    { color: 'white', value: 'var(--color-white)' },
    { color: 'black', value: 'var(--color-black)' },
  ];

  colorHexagons = this.colorFamilies.flatMap((color) =>
    this.shades.map((shade) => ({
      color,
      shade,
      value: `var(--color-${color}-${shade})`,
    }))
  );

  sortedColorHexagons = [
    ...this.colorHexagons.sort((a, b) => {
      if (a.color === b.color) {
        return parseInt(a.shade, 10) - parseInt(b.shade, 10);
      }
      return (
        this.colorFamilies.indexOf(a.color) -
        this.colorFamilies.indexOf(b.color)
      );
    }),
    ...this.singleColors,
  ];

  selectedColor: { color: string; shade?: string; value: string } | null = null;

  ngOnInit() {
    this.selectedColor =
      this.colorHexagons.find((hex) => hex.value === this.color) ?? null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.selectedColor =
        this.colorHexagons.find((hex) => hex.value === this.color) ?? null;
    }
  }

  selectColor(hex: { color: string; shade?: string; value: string }) {
    this.selectedColor = hex;
    this.valueChange.emit(hex.value);
  }
}
