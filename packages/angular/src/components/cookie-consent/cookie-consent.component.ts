import { Component, Inject, OnInit } from '@angular/core';
import { CookieConsentService } from './cookie-consent.service';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { HeadingComponent } from '../heading/heading.component';
import { IconCross2Component } from '../../icons';

@Component({
  selector: 'pui-cookie-consent',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    VisuallyHiddenComponent,
    TextComponent,
    HeadingComponent,
    IconCross2Component,
  ],
  template: `
    <div *ngIf="showBanner" class="cookie-consent-banner" data-testid="pui-cookie-consent">
      <div class="cookie-consent-header" data-testid="pui-cookie-consent-header">
        <div class="cookie-consent-text">
          <h3 pui-heading variant="h3">Cookie Consent</h3>
        </div>
        <button
          pui-button
          variant="ghost"
          size="icon"
          (click)="handleReject()"
          class="cookie-consent-close"
          data-testid="pui-cookie-consent-close"
        >
          <span aria-hidden="true">
            <i pui-icon name="cross2" size="sm"></i>
          </span>
          <span pui-sr-only>Close</span>
        </button>
      </div>
      <div class="cookie-consent-content">
        <p pui-text variant="body">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent
          to our use of cookies.
        </p>
      </div>
      <div class="cookie-consent-actions">
        <button
          pui-button
          variant="outline"
          (click)="handleReject()"
          class="cookie-consent-button-reject"
          data-testid="pui-cookie-consent-reject"
        >
          Reject
        </button>
        <button
          pui-button
          variant="primary"
          (click)="handleAccept()"
          class="cookie-consent-button-accept"
          data-testid="pui-cookie-consent-accept"
        >
          Accept
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .cookie-consent-banner {
        position: fixed;
        bottom: var(--spacing-4);
        left: var(--spacing-4);
        right: var(--spacing-4);
        max-width: var(--columns-xl);
        margin: 0 auto;
        z-index: var(--z-index-50);
        background-color: var(--color-card);
        box-shadow: var(--box-shadow-lg);
        border-radius: var(--border-radius-lg);
      }

      .cookie-consent-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-3) var(--spacing-4);
      }

      .cookie-consent-content {
        padding: 0 var(--spacing-4);
        display: flex;
        justify-content: space-between;
        align-items: start;
      }

      .cookie-consent-close {
        background: none;
        border: none;
        cursor: pointer;
        font-size: var(--font-size-lg);
        color: var(--color-muted-fg);
      }

      .cookie-consent-actions {
        display: flex;
        justify-content: flex-end;
        padding: var(--spacing-4);
        gap: var(--spacing-4);
      }

      .cookie-consent-button-outline {
        border: var(--border-width-default) solid var(--color-border);
        background-color: transparent;
        color: var(--color-background-fg);
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--border-radius-md);
        cursor: pointer;
      }

      .cookie-consent-button {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--border-radius-md);
        cursor: pointer;
        border: none;
      }
    `,
  ],
})
export class CookieConsentComponent implements OnInit {
  showBanner = false;

  constructor(
    @Inject(CookieConsentService)
    private cookieConsentService: CookieConsentService,
  ) {}

  ngOnInit() {
    const consent = this.cookieConsentService.getConsent();
    if (consent === null) {
      this.showBanner = true;
    }
  }

  handleAccept() {
    this.cookieConsentService.setConsent('accepted');
    this.showBanner = false;
  }

  handleReject() {
    this.cookieConsentService.setConsent('rejected');
    this.showBanner = false;
  }
}
