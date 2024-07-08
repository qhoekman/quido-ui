import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[quiAvatarImage]'
})
export class AvatarImageDirective implements OnInit, OnDestroy {
  @Input() className = ''
  @Input() src = ''
  private imgElement!: HTMLImageElement

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setupImage()
  }

  ngOnDestroy() {
    this.imgElement.onerror = null
    this.imgElement.onload = null
  }

  private setupImage() {
    // Cleanup existing event handlers to prevent memory leaks
    if (this.imgElement) {
      this.imgElement.onerror = null
      this.imgElement.onload = null
    }

    this.imgElement = new Image()
    this.imgElement.src = this.src
    this.imgElement.onerror = this.handleError.bind(this)
    this.imgElement.onload = this.handleLoad.bind(this)
  }

  private handleError() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
  }

  private handleLoad() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.src)
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      `aspect-square h-full w-full bg-black ${this.className}`
    )
  }
}
