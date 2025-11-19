import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconCross2Component, IconFileComponent } from '../../icons';

@Component({
  selector: 'pui-file-dropzone',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconFileComponent, IconCross2Component],
  template: `
    <div
      class="file-dropzone"
      data-testid="pui-file-dropzone"
      [class.drag-active]="dragActive"
      (click)="handleClick()"
      (keydown)="handleKeyDown($event)"
      tabindex="0"
      (dragenter)="handleDrag($event)"
      (dragleave)="handleDrag($event)"
      (dragover)="handleDrag($event)"
      (drop)="handleDrop($event)"
    >
      <input
        #input
        data-testid="pui-file-dropzone-input"
        type="file"
        class="hidden"
        (change)="handleChange($event)"
        multiple
      />
      <div class="content" data-testid="pui-file-dropzone-content">
        <ng-content></ng-content>
      </div>
    </div>
    <ul *ngIf="files.length > 0" class="file-list" data-testid="pui-file-dropzone-file-list">
      <li *ngFor="let file of files" class="file-item" data-testid="pui-file-dropzone-file-item">
        <p class="file-item-content">
          <i pui-icon name="file" size="sm"></i>
          <span> {{ file.name }}</span>
        </p>
        <button pui-button variant="ghost" size="icon" (click)="removeFile(file)">
          <i pui-icon name="cross-2" size="sm"></i>
        </button>
      </li>
    </ul>
  `,
  styles: [
    `
      .file-dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: var(--spacing-64);
        border: 2px dashed var(--color-border);
        border-radius: var(--border-radius-lg);
        cursor: pointer;
      }

      .drag-active {
        border-color: var(--color-primary);
      }

      .content {
        padding-top: var(--spacing-5);
        padding-bottom: var(--spacing-6);
        text-align: center;
      }

      .file-list {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: var(--spacing-4);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }

      .file-item {
        display: flex;
        justify-content: space-between;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
        background-color: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-lg);
      }

      .file-item-content {
        margin: auto 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 96%;
      }

      .hidden {
        display: none;
      }
    `,
  ],
})
export class FileDropzoneComponent {
  @Input() accept: string[] = [];
  @Output() filesSelected = new EventEmitter<File[]>();
  @ViewChild('input') input!: ElementRef;
  dragActive = false;
  files: File[] = [];

  constructor(private elementRef: ElementRef) {}

  handleClick() {
    this.input.nativeElement.accept = this.accept.join(',');
    this.input.nativeElement.click();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  handleDrag(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive = event.type === 'dragenter' || event.type === 'dragover';
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragActive = false;
    if (event.dataTransfer?.files) {
      const droppedFiles = Array.from(event.dataTransfer.files);
      const validFiles = droppedFiles.filter((file) => this.validate(file));
      this.files = [...this.files, ...validFiles];
      this.input.nativeElement.files = this.createFileList(validFiles);
      this.filesSelected.emit(validFiles);
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const selectedFiles = Array.from(input.files);
      this.files = [...this.files, ...selectedFiles];
      this.filesSelected.emit(selectedFiles);
    }
  }

  validate(file: File) {
    return this.accept.some((accept) => {
      if (accept === '*') {
        return true;
      }

      const [type] = file.type.split('/');
      const [acceptType, acceptSubtype] = accept.split('/');

      if (acceptSubtype === '*') {
        return acceptType === type;
      }

      return accept === file.type;
    });
  }

  removeFile(fileToRemove: File) {
    this.files = this.files.filter((file) => file !== fileToRemove);
  }

  createFileList(files: File[]) {
    const reducer = (dataTransfer: DataTransfer, file: File) => {
      dataTransfer.items.add(file);
      return dataTransfer;
    };

    return files.reduce(reducer, new DataTransfer()).files;
  }
}
