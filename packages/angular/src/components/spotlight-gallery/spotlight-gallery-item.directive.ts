import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[puiSpotlightGalleryItem]',
  standalone: true,
  host: {
    'data-testid': 'qui-spotlight-gallery-item',
  },
})
export class SpotlightGalleryItemDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
