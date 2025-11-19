import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconCross2Component } from '../../icons';
import { IconFileComponent } from '../../icons';

@Component({
  selector: 'pui-file-input',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconFileComponent, IconCross2Component],
  template: `
    <div
      class="file-input"
      (click)="handleClick()"
      tabindex="0"
      (keydown)="handleKeyDown($event)"
      data-testid="pui-file-input"
    >
      <input
        #input
        data-testid="pui-file-input-input"
        type="file"
        class="hidden"
        (change)="handleChange($event)"
        [attr.multiple]="multiple ? '' : null"
      />
      <i pui-icon name="file" size="sm"></i>
      <span *ngIf="files.length > 0">{{ files.length }} file(s) selected</span>
      <span *ngIf="files.length === 0" class="placeholder">Choose a file...</span>
      <button
        class="clear-button"
        pui-button
        variant="ghost"
        size="icon"
        *ngIf="files.length > 0"
        (click)="handleClear($event)"
      >
        <i pui-icon name="cross-2" size="sm"></i>
      </button>
    </div>
  `,
  styles: [
    `
      .file-input {
        display: inline-flex;
        align-items: center;
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-2);
        cursor: pointer;
      }

      .file-input i {
        margin-right: var(--spacing-1);
        width: var(--spacing-4);
        height: var(--spacing-4);
      }

      .file-input span {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }

      .file-input .placeholder {
        color: var(--color-muted-fg);
      }

      .hidden {
        display: none;
      }

      .clear-button.size--icon {
        margin-left: var(--spacing-2);
        width: var(--spacing-5);
        height: var(--spacing-5);
        cursor: pointer;
      }
    `,
  ],
})
export class FileInputComponent {
  @Input() multiple = false;
  @Output() filesSelected = new EventEmitter<File[]>();
  @ViewChild('input') input!: ElementRef;
  files: File[] = [];

  constructor(private elementRef: ElementRef) {}

  handleClick() {
    this.input.nativeElement.click();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.files = Array.from(input.files);
      this.filesSelected.emit(this.files);
    }
  }

  handleClear(event: Event) {
    event.stopPropagation();
    this.files = [];
    this.input.nativeElement.value = '';
    this.filesSelected.emit(this.files);
  }
}
