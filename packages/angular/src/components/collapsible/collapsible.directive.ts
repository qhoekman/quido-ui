import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { CollapsibleContentDirective } from './collapsible-content.directive';
import { CollapsibleTriggerDirective } from './collapsible-trigger.directive';
import { cn } from '@/lib/utils';

@Directive({
  selector: '[quiCollapsible]',
})
export class CollapsibleDirective implements OnInit, AfterContentInit {
  @Input() className = '';
  @Output() onOpenChange: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(CollapsibleTriggerDirective, { descendants: true })
  trigger!: CollapsibleTriggerDirective;
  @ContentChild(CollapsibleContentDirective, { descendants: true })
  content!: CollapsibleContentDirective;

  isOpen = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      cn(this.className),
    );
  }

  ngAfterContentInit() {
    if (!this.trigger) return;
    this.renderer.listen(this.trigger.el.nativeElement, 'click', () =>
      this.toggle(),
    );
    this.updateContentVisibility();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.onOpenChange.emit(this.isOpen);
    this.updateContentVisibility();
  }

  private updateContentVisibility() {
    if (!this.content) return;
    if (this.isOpen) {
      this.renderer.setStyle(this.content.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.content.el.nativeElement, 'display', 'none');
    }
  }
}
