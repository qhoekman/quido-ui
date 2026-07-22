import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

import { StackComponent } from '../stack/stack.component';
import { HeroActionsComponent } from './hero-actions.component';
import { HeroBodyComponent } from './hero-body.component';
import { HeroSectionComponent } from './hero-section.component';
import { HeroTaglineComponent } from './hero-tagline.component';
import { HeroTitleComponent } from './hero-title.component';
import { HeroBackdropComponent } from './hero-backdrop.component';
import { HeroBackdropImageComponent } from './hero-backdrop-image.component';
import { HeroCoverImageComponent } from './hero-cover-image.component';
import { HeroDiagonalShapeComponent } from './hero-diagonal-shape.component';
import { HeroComponent } from './hero.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselContentComponent } from '../carousel/carousel-content.component';
import { CarouselItemComponent } from '../carousel/carousel-item.component';
import { CarouselButtonComponent } from '../carousel/carousel-button.component';
import { IconChevronLeftComponent, IconChevronRightComponent } from '../../icons';

const meta: Meta<HeroComponent> = {
  title: 'Components/Layout/Hero',
  component: HeroComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        HeroSectionComponent,
        HeroTaglineComponent,
        HeroTitleComponent,
        HeroBodyComponent,
        HeroActionsComponent,
        HeroBackdropComponent,
        HeroBackdropImageComponent,
        HeroCoverImageComponent,
        HeroDiagonalShapeComponent,
        ButtonComponent,
        StackComponent,
        CarouselComponent,
        CarouselContentComponent,
        CarouselItemComponent,
        CarouselButtonComponent,
        IconChevronLeftComponent,
        IconChevronRightComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeroComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div qui-hero>
        <div qui-hero-section style="max-width: 30rem;">
          <div qui-stack direction="column" gap="md">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="order: 1;">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
            alt="Image"
            width="1000"
            height="1000"
            style="border-radius: var(--border-radius-xl);"
          />
        </div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div qui-hero-backdrop>
        <img qui-hero-backdrop-image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" alt="hero image" />
        <div qui-hero style="width: 100%; display: flex; padding: var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6);">
          <div qui-hero-section style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
            <div qui-stack direction="column" gap="md" style="align-items: center; text-align: center;">
              <span qui-hero-tagline style="color: var(--color-muted-fg);">Now in public beta</span>
              <h1 qui-hero-title style="color: var(--color-white);">Introducing Pulse Analytics</h1>
              <p qui-hero-body style="color: var(--color-muted-fg);">
                Real-time insights for your team, wherever you work. Track performance, spot trends, and ship with confidence.
              </p>
              <div qui-hero-actions>
                <button qui-button>Start free trial</button>
                <button qui-button variant="outline" style="color: var(--color-white);">View pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithContentLeft: Story = {
  render: () => ({
    template: `
      <div qui-hero>
        <div qui-hero-section style="max-width: 30rem;">
          <div qui-stack direction="column" gap="md">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="order: 1;">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
            alt="Image"
            width="1000"
            height="1000"
            style="border-radius: var(--border-radius-xl);"
          />
        </div>
      </div>
    `,
  }),
};

export const WithContentCenter: Story = {
  render: () => ({
    template: `
      <div qui-hero style="width: 100%; display: flex; padding-top: var(--spacing-12); padding-bottom: var(--spacing-12);">
        <div qui-hero-section style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
          <div qui-stack direction="column" gap="md" style="align-items: center; text-align: center;">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithContentVertical: Story = {
  render: () => ({
    template: `
      <div qui-hero style="display: block;">
        <div qui-hero-section style="max-width: var(--columns-5xl);">
          <div qui-stack direction="column" gap="md" style="align-items: center; text-align: center;">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="margin-left: auto; margin-right: auto; margin-top: var(--spacing-18); max-width: var(--columns-7xl);">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80"
            alt="Image"
            width="1920"
            height="1200"
            style="border-radius: var(--border-radius-xl); object-fit: cover;"
          />
        </div>
      </div>
    `,
  }),
};

export const WithBackdrop: Story = {
  render: () => ({
    template: `
      <div qui-hero-backdrop>
        <img qui-hero-backdrop-image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" alt="hero image" />
        <div qui-hero style="width: 100%; display: flex; padding: var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6);">
          <div qui-hero-section style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
            <div qui-stack direction="column" gap="md" style="align-items: center; text-align: center;">
              <span qui-hero-tagline style="color: var(--color-white);">Tagline</span>
              <h1 qui-hero-title style="color: var(--color-white);">Medium length hero section title goes in here</h1>
              <p qui-hero-body style="color: var(--color-muted-fg);">
                Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
              </p>
              <div qui-hero-actions>
                <button qui-button>Get started</button>
                <button qui-button variant="outline" style="color: var(--color-white);">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithBackdropIllustration: Story = {
  render: () => ({
    template: `
      <div qui-hero-backdrop>
        <div style="margin-left: auto; margin-right: auto; max-width: var(--columns-7xl); padding-left: var(--spacing-8); padding-right: var(--spacing-8);">
          <div qui-hero>
            <div qui-hero-section style="max-width: var(--columns-3xl); margin-top: var(--spacing-20);">
              <div qui-stack direction="column" gap="md">
                <span qui-hero-tagline>Tagline</span>
                <h1 qui-hero-title>Medium length hero section title goes in here</h1>
                <p qui-hero-body>
                  Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
                </p>
                <div qui-hero-actions>
                  <button qui-button>Get started</button>
                  <button qui-button variant="outline">Learn more</button>
                </div>
              </div>
            </div>
            <div qui-hero-section style="position: relative; background-color: var(--color-muted); display: flex; align-items: center; justify-content: center; height: 400px;">
              <svg qui-hero-diagonal-shape></svg>
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=1800&q=80"
                alt="Image"
                style="aspect-ratio: 2/3; height: 100%; max-height: 600px; width: auto; object-fit: cover;"
              />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithCarousel: Story = {
  render: () => ({
    template: `
      <div qui-hero>
        <div qui-hero-section style="max-width: var(--columns-3xl);">
          <div qui-stack direction="column" gap="md">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="order: 9999;">
          <div qui-carousel style="width: 100%;">
            <div qui-carousel-content #carouselContent>
              <div *ngFor="let i of [0, 1, 2, 3, 4]" qui-carousel-item>
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&h=1000&q=80"
                  alt="Image"
                  style="border-radius: var(--border-radius-xl); width: 100%;"
                />
              </div>
            </div>
            <button qui-carousel-button position="prev" size="icon" style="margin-left: var(--spacing-16); border: none; color: var(--color-primary);" (click)="carouselContent.scrollPrev()">
              <i qui-icon name="chevron-left" size="lg"></i>
            </button>
            <button qui-carousel-button position="next" size="icon" style="margin-right: var(--spacing-16); border: none; color: var(--color-primary);" (click)="carouselContent.scrollNext()">
              <i qui-icon name="chevron-right" size="lg"></i>
            </button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithImages: Story = {
  render: () => ({
    template: `
      <div qui-hero>
        <div qui-hero-section style="max-width: 30rem;">
          <div qui-stack direction="column" gap="md">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="background-color: var(--color-muted); max-height: 800px; overflow: hidden;">
          <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));">
            <div style="margin-left: auto; margin-right: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
              <img *ngFor="let i of [0, 1, 2]" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80" alt="Image" style="object-fit: cover;" aria-hidden="true" />
            </div>
            <div style="margin-top: var(--spacing-6); display: flex; flex-direction: column; gap: var(--spacing-4);">
              <img *ngFor="let i of [0, 1, 2]" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80" alt="Image" style="object-fit: cover;" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithVideo: Story = {
  render: () => ({
    template: `
      <div qui-hero>
        <div qui-hero-section style="max-width: var(--columns-3xl);">
          <div qui-stack direction="column" gap="md">
            <span qui-hero-tagline>Tagline</span>
            <h1 qui-hero-title>Medium length hero section title goes in here</h1>
            <p qui-hero-body>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </p>
            <div qui-hero-actions>
              <button qui-button>Get started</button>
              <button qui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="position: relative; width: 100%; background-color: var(--color-muted); padding-top: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/LXb3EKWsInQ"
            title="Product demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; left: 0; top: 0; height: 100%; width: 100%; border: none;"
          ></iframe>
        </div>
      </div>
    `,
  }),
};

export const WithDiagonalShape: Story = {
  render: () => ({
    template: `
      <div qui-hero-backdrop>
        <div qui-hero style="gap: var(--spacing-14);">
          <div qui-hero-section style="max-width: var(--columns-3xl); margin-top: var(--spacing-40); margin-bottom: var(--spacing-40);">
            <div qui-stack direction="column" gap="md">
              <span qui-hero-tagline>Tagline</span>
              <h1 qui-hero-title>Medium length hero section title goes in here</h1>
              <p qui-hero-body>
                Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
              </p>
              <div qui-hero-actions>
                <button qui-button>Get started</button>
                <button qui-button variant="outline">Learn more</button>
              </div>
            </div>
          </div>
          <div qui-hero-section style="position: relative; background-color: var(--color-muted); width: 50%;">
            <svg qui-hero-diagonal-shape></svg>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
              alt="Image"
              style="height: 100%; width: 100%; object-fit: cover;"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithCover: Story = {
  render: () => ({
    template: `
      <div qui-hero-backdrop>
        <img qui-hero-cover-image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80" alt="hero image" />
        <div style="margin-left: auto; margin-right: auto; margin-top: var(--spacing-14); max-width: var(--columns-7xl); padding-left: var(--spacing-4); padding-right: var(--spacing-4); padding-bottom: var(--spacing-20);">
          <div qui-hero>
            <div qui-hero-section style="max-width: var(--columns-3xl);">
              <div qui-stack direction="column" gap="md">
                <span qui-hero-tagline>Tagline</span>
                <h1 qui-hero-title>Medium length hero section title goes in here</h1>
              </div>
            </div>
            <div qui-hero-section>
              <div qui-stack direction="column" gap="md">
                <p qui-hero-body>
                  Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
                </p>
                <div qui-hero-actions>
                  <button qui-button>Get started</button>
                  <button qui-button variant="outline">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};
