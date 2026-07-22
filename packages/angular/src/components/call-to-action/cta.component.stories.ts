import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CTAComponent } from './cta.component';
import { CTAContentComponent } from './cta-content.component';
import { CTASectionComponent } from './cta-section.component';
import { CTATitleComponent } from './cta-title.component';
import { CTASubtitleComponent } from './cta-subtitle.component';
import { CTAActionsComponent } from './cta-actions.component';
import { CTABackdropComponent } from './cta-backdrop.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';

const meta: Meta<CTAComponent> = {
  title: 'Components/Layout/Call To Action',
  component: CTAComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CTAComponent,
        CTAContentComponent,
        CTASectionComponent,
        CTATitleComponent,
        CTASubtitleComponent,
        CTAActionsComponent,
        CTABackdropComponent,
        ButtonComponent,
        InputComponent,
        LabelComponent,
        VisuallyHiddenComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<CTAComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <div qui-cta-content>
          <div qui-cta-section>
            <h2 qui-cta-title>Ready to dive in?</h2>
            <p qui-cta-subtitle>
              Start your free trial today and experience the power of our platform.
            </p>
            <div qui-cta-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithLeftContent: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <div qui-cta-content style="background-color: var(--color-muted);">
          <h2 qui-cta-title>Get in touch</h2>
          <p qui-cta-subtitle>
            We are here to help you with any questions you may have
          </p>
          <div qui-cta-actions>
            <a qui-button href="#">Contact us</a>
            <a qui-button variant="outline" href="#">Learn more</a>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithCenteredContent: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <div qui-cta-content style="text-align: center; background-color: var(--color-muted);">
          <h2 qui-cta-title>Get in touch</h2>
          <p qui-cta-subtitle style="margin-left: auto; margin-right: auto;">
            We are here to help you with any questions you may have
          </p>
          <div qui-cta-actions style="justify-content: center;">
            <a qui-button href="#">Contact us</a>
            <a qui-button variant="outline" href="#">Learn more</a>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithBackdrop: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <img
          qui-cta-backdrop
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <div qui-cta-content>
          <h2 qui-cta-title style="color: var(--color-white);">Get in touch</h2>
          <p qui-cta-subtitle style="color: var(--color-muted-fg);">
            We are here to help you with any questions you may have
          </p>
          <div qui-cta-actions>
            <a qui-button href="#">Contact us</a>
            <a qui-button variant="outline" style="color: var(--color-muted-fg);" href="#">Learn more</a>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithFormVertical: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <img
          qui-cta-backdrop
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <div qui-cta-content>
          <h2 qui-cta-title style="color: var(--color-white);">Get in touch</h2>
          <p qui-cta-subtitle style="color: var(--color-muted);">
            We are here to help you with any questions you may have
          </p>
          <div qui-cta-section style="max-width: 28rem;">
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

export const WithFormHorizontal: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <div qui-cta-content style="background-color: hsl(from var(--color-muted) h s l / 10%); gap: var(--spacing-7);">
          <div qui-cta-section style="text-align: center;">
            <h2 qui-cta-title>Get up-to-date</h2>
            <p qui-cta-subtitle>
              Subscribe to our newsletter and be the first to know about our newest projects and resources.
            </p>
          </div>
          <div qui-cta-section style="max-width: 28rem;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <span qui-sr-only><label qui-label for="email-address-h">Email address</label></span>
              <input qui-input id="email-address-h" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <button qui-button type="submit">Subscribe</button>
            </div>
            <p style="margin-top: var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithFormHorizontalBackdrop: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <img
          qui-cta-backdrop
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <div qui-cta-content style="gap: var(--spacing-7);">
          <div qui-cta-section style="text-align: center;">
            <h2 qui-cta-title style="color: var(--color-white);">Get up-to-date</h2>
            <p qui-cta-subtitle style="color: var(--color-muted-fg);">
              Subscribe to our newsletter and be the first to know about our newest projects and resources.
            </p>
          </div>
          <div qui-cta-section style="max-width: 28rem;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <span qui-sr-only><label qui-label for="email-address-hb">Email address</label></span>
              <input qui-input id="email-address-hb" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
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

export const Composition: Story = {
  render: () => ({
    template: `
      <div qui-cta>
        <img
          qui-cta-backdrop
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="Team collaborating in a modern office"
        />
        <div qui-cta-content style="text-align: center;">
          <h2 qui-cta-title style="color: var(--color-white);">Introducing Pulse Analytics</h2>
          <p qui-cta-subtitle style="color: var(--color-muted-fg); margin-left: auto; margin-right: auto;">
            Real-time insights for your team, wherever you work.
          </p>
          <div qui-cta-actions style="justify-content: center;">
            <a qui-button href="#">Start free trial</a>
            <a qui-button variant="outline" style="color: var(--color-muted-fg);" href="#">View pricing</a>
          </div>
        </div>
      </div>
    `,
  }),
};
