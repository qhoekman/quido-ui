import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { Check } from 'lucide-angular' // Assuming you have lucide-angular installed

@Directive({
  selector: '[quiCheckbox]',
  standalone: true
})
export class CheckboxDirective implements OnInit, OnChanges, OnDestroy {
  @Input() className = ''

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.updateClasses()
    const inputElement = this.findInputCheckbox()
    inputElement.addEventListener('change', () => {
      this.updateClasses()
    })
  }

  ngOnChanges() {
    this.updateClasses()
  }

  ngOnDestroy() {
    const inputElement = this.findInputCheckbox()
    inputElement.removeEventListener('change', () => {
      this.updateClasses()
    })
  }

  private findInputCheckbox() {
    return this.el.nativeElement.parentElement.querySelector('input')
  }

  private updateClasses() {
    const inputElement = this.findInputCheckbox()
    const classes = `group h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-checked:bg-primary peer-checked:text-primary-fg peer-[checked &>*]:hidden ${this.className}`
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'checkbox')
    this.renderer.setAttribute(
      this.el.nativeElement,
      'aria-checked',
      inputElement.checked.toString()
    )
    this.renderer.setAttribute(this.el.nativeElement, 'class', classes)
  }
}
