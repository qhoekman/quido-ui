import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CarouselButtonComponent } from './carousel-button.component';
import { CarouselContentComponent } from './carousel-content.component';
import { CarouselItemComponent } from './carousel-item.component';
import { CarouselComponent } from './carousel.component';
import {
  IconChevronLeftComponent,
  IconChevronRightComponent,
} from '../../icons';

const meta: Meta<CarouselComponent> = {
  title: 'Components/Layout/Carousel',
  component: CarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [
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
type Story = StoryObj<CarouselComponent>;

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // nature
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=80', // city
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', // architecture
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', // landscape
  'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80', // water
];

export const Default: Story = {
  render: (args) => ({
    props: { ...args, images },
    template: `
      <div qui-carousel>
        <div qui-carousel-content #carouselContent>
          <div *ngFor="let image of images; let i = index" qui-carousel-item style="flex-basis: 33.333333%;">
            <img
              [src]="image"
              [alt]="'Image ' + (i + 1)"
              style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9;"
            />
          </div>
        </div>
        <button qui-carousel-button position="prev" size="icon" (click)="carouselContent.scrollPrev()">
          <i qui-icon name="chevron-left" size="lg"></i>
        </button>
        <button qui-carousel-button position="next" size="icon" (click)="carouselContent.scrollNext()">
          <i qui-icon name="chevron-right" size="lg"></i>
        </button>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    props: { images },
    template: `
      <div qui-carousel style="height: 24rem;">
        <div qui-carousel-content #carouselContent orientation="vertical">
          <div *ngFor="let image of images; let i = index" qui-carousel-item style="flex-basis: 33.333333%;">
            <img
              [src]="image"
              [alt]="'Image ' + (i + 1)"
              style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9;"
            />
          </div>
        </div>
        <button qui-carousel-button position="prev" size="icon" (click)="carouselContent.scrollPrev()">
          <i qui-icon name="chevron-left" size="lg"></i>
        </button>
        <button qui-carousel-button position="next" size="icon" (click)="carouselContent.scrollNext()">
          <i qui-icon name="chevron-right" size="lg"></i>
        </button>
      </div>
    `,
  }),
};

const destinations = [
  { src: images[0], label: 'Banff, Canada' },
  { src: images[1], label: 'Tokyo, Japan' },
  { src: images[2], label: 'Barcelona, Spain' },
  { src: images[3], label: 'Reykjavik, Iceland' },
  { src: images[4], label: 'Lake Como, Italy' },
];

export const Composition: Story = {
  render: () => ({
    props: { destinations },
    template: `
      <div qui-carousel style="width: 100%; max-width: 40rem;">
        <div qui-carousel-content #carouselContent>
          <div *ngFor="let destination of destinations" qui-carousel-item>
            <div style="position: relative;">
              <img
                [src]="destination.src"
                [alt]="destination.label"
                style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9; border-radius: var(--border-radius-lg);"
              />
              <span
                style="position: absolute; bottom: var(--spacing-3); left: var(--spacing-3); padding: var(--spacing-1) var(--spacing-3); border-radius: var(--border-radius-md); background-color: hsl(from var(--color-black) h s l / 60%); color: var(--color-white); font-size: var(--font-size-sm);"
              >
                {{ destination.label }}
              </span>
            </div>
          </div>
        </div>
        <button qui-carousel-button position="prev" size="icon" (click)="carouselContent.scrollPrev()">
          <i qui-icon name="chevron-left" size="lg"></i>
        </button>
        <button qui-carousel-button position="next" size="icon" (click)="carouselContent.scrollNext()">
          <i qui-icon name="chevron-right" size="lg"></i>
        </button>
      </div>
    `,
  }),
};
