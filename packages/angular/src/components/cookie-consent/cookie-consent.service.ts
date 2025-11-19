// src/services/cookie-consent.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly consentKey = 'cookieConsent';

  getConsent(): string | null {
    return localStorage.getItem(this.consentKey);
  }

  setConsent(consent: string): void {
    localStorage.setItem(this.consentKey, consent);
  }

  clearConsent(): void {
    localStorage.removeItem(this.consentKey);
  }
}
