import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { IconDragHandleDots2Component } from '../../icons';

@Component({
  selector: 'pui-draggable-list',
  standalone: true,
  imports: [CommonModule, IconDragHandleDots2Component],
  template: `
    <ul class="draggable-list" role="list" data-testid="pui-draggable-list">
      <li
        data-testid="pui-draggable-list-item"
        *ngFor="let item of list; let i = index"
        class="draggable-item"
        [class.dragging]="draggedIndex === i"
        draggable="true"
        (dragstart)="handleDragStart($event, i)"
        (dragover)="handleDragOver($event, i)"
        (dragend)="handleDragEnd()"
        role="listitem"
        [attr.aria-grabbed]="draggedIndex === i"
      >
        <div class="drag-handle" aria-hidden="true">
          <i pui-icon name="drag-handle-dots-2" size="md"></i>
        </div>
        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
      </li>
    </ul>
  `,
  styles: [
    `
      .draggable-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .draggable-item {
        position: relative;
        border: 1px solid var(--color-border);
        background-color: var(--color-card);
        padding: var(--spacing-4) var(--spacing-8);
        transition: all 0.2s;
        cursor: move;
      }

      .dragging {
        opacity: 0.5;
      }

      .drag-handle {
        position: absolute;
        left: var(--spacing-2);
        top: 50%;
        transform: translateY(-50%);
        cursor: move;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .draggable-item:hover .drag-handle {
        opacity: 1;
      }
    `,
  ],
})
export class DraggableListComponent<T = unknown> implements OnInit {
  @Input() items: T[] = [];
  @Input() itemTemplate!: TemplateRef<{ $implicit: T; index: number }>;
  @Output() reorder = new EventEmitter<T[]>();

  list: T[] = [];
  draggedIndex: number | null = null;

  ngOnInit() {
    this.list = [...this.items];
  }

  handleDragStart(event: DragEvent, index: number) {
    this.draggedIndex = index;
    event.dataTransfer?.setData('text/plain', index.toString());
    event.dataTransfer!.effectAllowed = 'move';
  }

  handleDragOver(event: DragEvent, index: number) {
    event.preventDefault();
    if (this.draggedIndex === null || this.draggedIndex === index) return;

    const newList = [...this.list];
    const [reorderedItem] = newList.splice(this.draggedIndex, 1);
    newList.splice(index, 0, reorderedItem);

    this.list = newList;
    this.draggedIndex = index;
  }

  handleDragEnd() {
    this.draggedIndex = null;
    this.reorder.emit(this.list);
  }
}
