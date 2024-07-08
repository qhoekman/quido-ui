import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[quiCheckboxIndicator]',
  standalone: true,
})
export class CheckboxIndicatorDirective implements OnInit {
  @Input() className = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.updateClasses();
    // add event listener to parent element if data-state attribute changes
    const observer = new MutationObserver(() => {
      this.updateClasses();
    });
    observer.observe(this.el.nativeElement.parentElement, { attributes: true });
  }

  private updateClasses() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `items-center justify-center text-current group-aria-[checked=false]:hidden group-aria-[checked=true]:flex [&>svg]:size-4 ${this.className}`,
    );
  }
}
