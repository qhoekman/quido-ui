import { Component, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'pui-maps',
  standalone: true,
  host: {
    '[id]': 'id',
    'data-testid': 'pui-maps',
  },
  styleUrls: ['maps.component.css'],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      pui-maps {
        display: block;
        height: 100%;
        width: 100%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MapsComponent implements AfterViewInit {
  private id = `pui-maps-${Math.random().toString(36).substring(2, 15)}`;
  @Input() center: L.LatLngExpression = [52.370216, 4.895168]; // Default to Amsterdam
  @Input() zoom = 13;
  @Input() options: L.MapOptions = {};
  @Input() layers: L.Layer[] = [];
  @Input() markers: L.Marker[] = [];

  ngAfterViewInit(): void {
    const map = L.map(this.id, this.options).setView(this.center, this.zoom);

    L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/grijs/EPSG:3857/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.pdok.nl">PDOK</a>',
    }).addTo(map);

    this.layers.forEach((layer) => map.addLayer(layer));
    this.markers.forEach((marker) => map.addLayer(marker));
  }
}
