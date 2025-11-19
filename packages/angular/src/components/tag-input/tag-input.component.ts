import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: '[qui-tag-input]',
  standalone: true,
  host: {
    role: 'textbox',
  },
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    TagComponent,
    InputComponent,
  ],
  template: `
    <div
      class="tag-input-container"
      data-testid="qui-tag-input"
      (click)="handleClick()"
      (keydown)="handleKeydown($event)"
      tabindex="0"
    >
      <input
        #tagInput
        qui-input
        data-testid="qui-tag-input-input"
        type="text"
        placeholder="Enter tags (comma-separated)..."
        [(ngModel)]="inputValue"
        (keydown)="handleInputKeyDown($event)"
        (blur)="handleInputBlur()"
        class="tag-input"
        aria-label="Enter tags"
      />
      <input
        type="hidden"
        [attr.name]="name"
        [attr.id]="elementRef.nativeElement.id"
        [ngModel]="tags"
      />

      <div
        *ngIf="tags.length > 0"
        class="tags-container"
        role="list"
        aria-live="polite"
      >
        <div
          qui-tag
          size="sm"
          data-testid="qui-tag-input-tag"
          *ngFor="let tag of tags; let i = index"
          class="tag"
          role="listitem"
        >
          <span>{{ tag }}</span>
          <button
            qui-button
            size="icon"
            (click)="removeTag(i)"
            class="remove-tag"
            [attr.aria-label]="'Remove tag ' + tag"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .tag-input-container {
        border: var(--border-width-default) solid var(--color-border);
        border-radius: var(--border-radius-md);
        background-color: var(--color-background);
        padding: var(--spacing-2);
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
      }

      .tag-input {
        border: none;
        outline: none;
        flex: 1;
        background-color: transparent;
      }

      .tag-input.size--md {
        font-size: var(--font-size-base);
        padding: var(--spacing-2) 0;
      }

      .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-2);
        max-height: 100px;
        overflow-y: auto;
      }

      .tag {
        justify-content: space-between;
        width: fit-content;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .tag span {
        flex: 1;
      }

      .remove-tag {
        background: none;
        border: none;
        cursor: pointer;
      }

      .remove-tag.size--icon {
        width: var(--spacing-4);
        height: var(--spacing-4);
      }
    `,
  ],
})
export class TagInputComponent {
  @Input() name?: string;
  @Input() tags: string[] = [];
  @Output() tagsChange = new EventEmitter<string[]>();
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  inputValue = '';

  constructor(protected elementRef: ElementRef) {}

  handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTags(this.inputValue);
    } else if (event.key === 'Backspace' && !this.inputValue) {
      this.removeTag(this.tags.length - 1);
    }
  }

  handleInputBlur() {
    if (this.inputValue) {
      this.addTags(this.inputValue);
    }
  }

  addTags(input: string) {
    const newTags = input
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag && !this.tags.includes(tag));

    if (newTags.length > 0) {
      this.tags = [...this.tags, ...newTags];
      this.inputValue = '';
      this.tagsChange.emit(this.tags);
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
    this.tagsChange.emit(this.tags);
  }

  focusInput() {
    this.tagInput.nativeElement.focus();
  }

  handleClick() {
    this.tagInput.nativeElement.focus();
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.tagInput.nativeElement.focus();
    }
  }
}
