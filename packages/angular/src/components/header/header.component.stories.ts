import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { HeaderTaglineComponent } from './header-tagline.component';
import { HeaderTitleComponent } from './header-title.component';
import { HeaderBodyComponent } from './header-body.component';
import { HeaderContentComponent } from './header-content.component';
import { HeaderActionsComponent } from './header-actions.component';
import { HeaderBackdropComponent } from './header-backdrop.component';
import { HeaderBackdropImageComponent } from './header-backdrop-image.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Layout/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HeaderComponent,
        HeaderTaglineComponent,
        HeaderTitleComponent,
        HeaderBodyComponent,
        HeaderContentComponent,
        HeaderActionsComponent,
        HeaderBackdropComponent,
        HeaderBackdropImageComponent,
        ButtonComponent,
        InputComponent,
        LabelComponent,
        VisuallyHiddenComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div qui-header>
        <div qui-header-content>
          <h3 qui-header-tagline>Tagline</h3>
          <h2 qui-header-title>Short heading goes here</h2>
          <p qui-header-body>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </p>
          <div qui-header-actions>
            <button qui-button>Get started</button>
            <button qui-button variant="outline">Learn more</button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div qui-header-backdrop>
        <img qui-header-backdrop-image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <div qui-header style="padding-top: var(--spacing-6); padding-bottom: var(--spacing-6);">
          <div qui-header-content style="text-align: center;">
            <h3 qui-header-tagline style="color: var(--color-muted-fg);">Now in public beta</h3>
            <h2 qui-header-title style="color: var(--color-white);">Introducing Pulse Analytics</h2>
            <p qui-header-body style="color: var(--color-muted-fg);">
              Real-time insights for your team, wherever you work. Track performance, spot trends, and ship with confidence.
            </p>
            <div qui-header-actions style="margin-left: auto; margin-right: auto;">
              <button qui-button>Start free trial</button>
              <button qui-button variant="outline" style="color: var(--color-white);">View pricing</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithCenteredContent: Story = {
  render: () => ({
    template: `
      <div qui-header>
        <div qui-header-content style="text-align: center;">
          <h3 qui-header-tagline>Tagline</h3>
          <h2 qui-header-title>Short heading goes here</h2>
          <p qui-header-body>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </p>
          <div qui-header-actions style="margin-left: auto; margin-right: auto;">
            <button qui-button>Get started</button>
            <button qui-button variant="outline">Learn more</button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithLeftContent: Story = {
  render: () => ({
    template: `
      <div qui-header>
        <div qui-header-content>
          <h3 qui-header-tagline>Tagline</h3>
          <h2 qui-header-title>Short heading goes here</h2>
          <p qui-header-body>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </p>
          <div qui-header-actions>
            <button qui-button>Get started</button>
            <button qui-button variant="outline">Learn more</button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithForm: Story = {
  render: () => ({
    template: `
      <div qui-header>
        <div qui-header-content>
          <h3 qui-header-tagline>Tagline</h3>
          <h2 qui-header-title>Short heading goes here</h2>
          <p qui-header-body>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </p>
          <div qui-header-actions style="flex-direction: column; gap: 0;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <span qui-sr-only><label qui-label for="email-address">Email address</label></span>
              <input qui-input id="email-address" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <button qui-button type="submit">Subscribe</button>
            </div>
            <p style="margin-top: var(--spacing-4); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithBackdrop: Story = {
  render: () => ({
    template: `
      <div qui-header-backdrop>
        <img qui-header-backdrop-image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <div qui-header style="padding-top: var(--spacing-6); padding-bottom: var(--spacing-6);">
          <div qui-header-content style="text-align: center;">
            <h3 qui-header-tagline style="color: var(--color-muted-fg);">Tagline</h3>
            <h2 qui-header-title style="color: var(--color-white);">Short heading goes here</h2>
            <p qui-header-body style="color: var(--color-muted-fg);">
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-header-actions style="margin-left: auto;">
              <button qui-button>Get started</button>
              <button qui-button variant="outline" style="color: var(--color-white);">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithHorizontalContent: Story = {
  render: () => ({
    template: `
      <div qui-header-backdrop>
        <img qui-header-backdrop-image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <div qui-header>
          <div qui-header-content style="max-width: var(--columns-6xl); display: flex; flex-direction: column; padding-top: var(--spacing-24); padding-bottom: var(--spacing-24);">
            <h2 qui-header-title style="color: var(--color-white);">Short heading goes here</h2>
            <p qui-header-body style="color: var(--color-white);">
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};
