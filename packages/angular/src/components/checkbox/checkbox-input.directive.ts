import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[quiCheckboxInput]',
  standalone: true,
})
export class CheckboxInputDirective implements OnInit, OnChanges {
  @Input() checked = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
  }

  ngOnChanges() {
    this.updateClasses();
  }

  private updateClasses() {
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'checkbox');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      'peer sr-only invisible',
    );
  }
}
