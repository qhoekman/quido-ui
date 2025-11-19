import { Component, Input, OnChanges } from '@angular/core';
import { QRCodeSVG } from '@akamfoad/qrcode';

@Component({
  selector: 'img[pui-qr-code]',
  host: {
    '[attr.src]': 'qrCodeSVG',
  },
  template: ``,
  styles: [
    `
      :host {
        display: inline-block;
        border-radius: var(--border-radius-md);
        background-color: hsl(from var(--color-background-fg) h s l / 10%);
      }
    `,
  ],
  standalone: true,
})
export class QrCodeComponent implements OnChanges {
  @Input() value = '';
  qrCodeSVG: string | null = null;

  ngOnChanges() {
    this.generateQRCode();
  }

  private generateQRCode() {
    if (this.value) {
      const qrCode = new QRCodeSVG(this.value);
      this.qrCodeSVG = qrCode.toDataUrl();
    }
  }
}
