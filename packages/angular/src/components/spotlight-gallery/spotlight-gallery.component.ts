import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { SpotlightGalleryItemDirective } from './spotlight-gallery-item.directive';
import { CommonModule } from '@angular/common';
import { SpotlightGalleryListComponent } from './spotlight-gallery-list.component';
import { SpotlightGalleryTriggerComponent } from './spotlight-gallery-trigger.component';
import { SpotlightGalleryContentComponent } from './spotlight-gallery-content.component';

@Component({
  selector: 'qui-spotlight-gallery',
  standalone: true,
  imports: [
    CommonModule,
    SpotlightGalleryListComponent,
    SpotlightGalleryTriggerComponent,
    SpotlightGalleryContentComponent,
  ],
  template: `
    <div qui-spotlight-gallery-list>
      <ng-container *ngFor="let item of items; let i = index">
        <div
          qui-spotlight-gallery-trigger
          [active]="i === activeIndex"
          (click)="handleClick(i)"
          (keydown)="handleKeydown(i)"
          tabindex="0"
        >
          <ng-container *ngTemplateOutlet="item.template"></ng-container>
        </div>
      </ng-container>
    </div>
    <div qui-spotlight-gallery-content>
      <ng-container
        *ngTemplateOutlet="items.get(activeIndex)?.template!"
      ></ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
      }
    `,
  ],
})
export class SpotlightGalleryComponent implements AfterContentInit {
  @ContentChildren(SpotlightGalleryItemDirective, { descendants: true })
  items!: QueryList<SpotlightGalleryItemDirective>;
  activeIndex = 0;

  ngAfterContentInit() {
    if (this.items.length > 0) {
      this.setActiveIndex(0);
    }
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  handleClick(index: number) {
    this.setActiveIndex(index);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.setActiveIndex(this.activeIndex + 1);
    }
    if (event.key === 'ArrowLeft') {
      this.setActiveIndex(this.activeIndex - 1);
    }
  }
}
