import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[puiSpotlightGalleryItem]',
  standalone: true,
  host: {
    'data-testid': 'spotlight-gallery__item',
  },
})
export class SpotlightGalleryItemDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
