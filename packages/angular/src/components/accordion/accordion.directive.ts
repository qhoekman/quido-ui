import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[quiAccordion]',
  standalone: true,
  providers: [{ provide: CdkAccordion, useExisting: AccordionDirective }],
})
export class AccordionDirective extends CdkAccordion {
  @Input() type: 'single' = 'single';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    super();
  }

  ngOnInit() {}
}

@Directive({
  selector: '[quiAccordionItem]',
  standalone: true,
  providers: [
    { provide: CdkAccordionItem, useExisting: AccordionItemDirective },
  ],
})
export class AccordionItemDirective extends CdkAccordionItem implements OnInit {
  @Input() value: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    accordion: CdkAccordion,
    _changeDetectorRef: ChangeDetectorRef,
    _uniqueSelectionDispatcher: UniqueSelectionDispatcher,
  ) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
  }

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      'border-t border-gray-200',
    );
  }
}

@Directive({
  selector: '[quiAccordionTrigger]',
  standalone: true,
})
export class AccordionTriggerDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdkAccordionItem: CdkAccordionItem,
  ) {}

  ngOnInit() {
    // set role to button to make it accessible
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      'flex flex-1 items-center justify-between px-3 py-2 text-sm font-medium transition-all hover:bg-gray-50',
    );
    this.renderer.listen(this.el.nativeElement, 'click', () =>
      this.cdkAccordionItem.toggle(),
    );
  }
}

@Directive({
  selector: '[quiAccordionContent]',
  standalone: true,
})
export class AccordionContentDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdkAccordionItem: CdkAccordionItem,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      'overflow-hidden px-3 py-2 text-sm data-[state=closed]:hidden data-[state=open]:block',
    );
    this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'closed');
    this.cdkAccordionItem.opened.pipe().subscribe(() => {
      this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'open');
    });

    this.cdkAccordionItem.closed.pipe().subscribe(() => {
      this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'closed');
    });
  }
}

@Directive({
  selector: '[quiAccordionIcon]',
  standalone: true,
  exportAs: 'quiAccordionIcon',
})
export class AccordionIconDirective implements OnInit {
  @Input() name: string = 'chevron-down';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdkAccordionItem: CdkAccordionItem,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'class',
      '[&>svg]:size-4',
    );

    this.cdkAccordionItem.opened.pipe().subscribe(() => {
      this.name = 'chevron-up';
    });

    this.cdkAccordionItem.closed.pipe().subscribe(() => {
      this.name = 'chevron-down';
    });
  }
}
