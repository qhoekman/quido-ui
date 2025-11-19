import { AsyncPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import Color from '@thednp/color';
import { BehaviorSubject } from 'rxjs';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { ColorWheelComponent } from '../color-wheel/color-wheel.component';
import { TabsContentComponent } from '../tabs/tabs-content.component';
import { TabsListComponent } from '../tabs/tabs-list.component';
import { TabsTriggerComponent } from '../tabs/tabs-trigger.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'qui-color-picker',
  imports: [
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent,
    ColorWheelComponent,
    ColorPaletteComponent,
    AsyncPipe,
  ],
  standalone: true,
  template: `
    @let selectedColor = selectedColorSubject | async; @let selectedVariable =
    selectedVariableSubject | async; @let displayValues = displayValuesSubject |
    async;
    <div data-testid="qui-color-picker" qui-tabs class="tabs">
      <div data-testid="qui-color-picker-tabs-list" qui-tabs-list>
        <button
          data-testid="qui-color-picker-tabs-trigger"
          qui-tabs-trigger
          [tabContentFor]="colorWheelContent"
        >
          Hue
        </button>
        <button
          data-testid="qui-color-picker-tabs-trigger"
          qui-tabs-trigger
          [tabContentFor]="colorPaletteContent"
        >
          Palette
        </button>
      </div>
      <ng-template #colorWheelContent>
        <div
          data-testid="qui-color-picker-tabs-content"
          qui-tabs-content
          class="tabs-content"
        >
          <qui-color-wheel
            [hue]="selectedColor.toHsl().h * 100"
            [saturation]="selectedColor.toHsl().s * 100"
            [lightness]="selectedColor.toHsl().l * 100"
            (valueChange)="handleColorChange($event)"
          ></qui-color-wheel>
        </div>
      </ng-template>
      <ng-template #colorPaletteContent>
        <div
          data-testid="qui-color-picker-tabs-content"
          qui-tabs-content
          class="tabs-content"
        >
          <qui-color-palette
            [color]="selectedVariable"
            (valueChange)="handleColorChange($event)"
          ></qui-color-palette>
        </div>
      </ng-template>
    </div>
    <div data-testid="qui-color-picker-info" class="info">
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">HEX:</span>
        <pre><code>{{ displayValues?.hex }}</code></pre>
      </div>
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">HSL:</span>
        <pre><code>{{ displayValues?.hsl }}</code></pre>
      </div>
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">RGB:</span>
        <pre><code>{{ displayValues?.rgb }}</code></pre>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: fit-content;
        border: var(--border-width-default) solid var(--color-border);
        border-radius: var(--border-radius-sm);
      }

      :host .tabs {
        background: transparent;
      }

      :host .tabs-content {
        padding: var(--spacing-3) var(--spacing-4);
      }

      :host .info {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-3) var(--spacing-4);
        gap: var(--spacing-1);
      }

      :host .color-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-4);
      }

      :host .color-item .label {
        width: var(--spacing-8);
        font-weight: var(--font-weight-semibold);
        margin: 0;
      }

      :host pre {
        margin: 0;
      }

      :host code {
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
      }
    `,
  ],
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() color = '#000000';
  @Output() valueChange = new EventEmitter<string>();
  protected selectedColorSubject = new BehaviorSubject<Color>(
    new Color('#000000', 'hex')
  );
  protected selectedVariableSubject = new BehaviorSubject<string | null>(null);
  protected displayValuesSubject = new BehaviorSubject<{
    hex: string;
    rgb: string;
    hsl: string;
  }>({
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%)',
  });

  ngOnInit() {
    this.handleColorChange(this.color);

    this.selectedColorSubject.subscribe((color) => {
      this.displayValuesSubject.next({
        hex: this.displayColor('hex', color.toString()),
        rgb: this.displayColor('rgb', color.toString()),
        hsl: this.displayColor('hsl', color.toString()),
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.handleColorChange(changes['color'].currentValue);
    }
  }

  getComputedColor(value: string): string {
    if (!value.startsWith('var(--')) {
      return value;
    }

    const computedStyle = getComputedStyle(document.documentElement);
    const cssVarName = value.slice(4, -1); // Remove var( and )
    return computedStyle.getPropertyValue(cssVarName).trim();
  }

  handleColorChange(color: string) {
    this.selectedVariableSubject.next(null);
    if (color.startsWith('var(--')) {
      this.selectedVariableSubject.next(color);
      color = this.getComputedColor(color);
    }
    const newColor = new Color(color, 'hsl');
    this.selectedColorSubject.next(newColor);
    this.valueChange.emit(this.selectedColorSubject.toString());
  }

  displayColor(format: 'hex' | 'rgb' | 'hsl', color: string) {
    return new Color(color, format).toString();
  }
}
