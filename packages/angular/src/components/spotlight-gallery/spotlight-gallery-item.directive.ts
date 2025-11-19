import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[puiSpotlightGalleryItem]',
  standalone: true,
  host: {
    'data-testid': 'pui-spotlight-gallery-item',
  },
})
export class SpotlightGalleryItemDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
