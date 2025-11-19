import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CardContentComponent } from '../card/card-content.component'; // Assuming you have a CardContentComponent
import { CardComponent } from '../card/card.component'; // Assuming you have a CardComponent
import { TextComponent } from '../text/text.component';
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
        TextComponent,
        CardComponent,
        CardContentComponent,
        IconChevronLeftComponent,
        IconChevronRightComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div qui-carousel>
        <div qui-carousel-content #carouselContent>
          <div *ngFor="let item of [0, 1, 2, 3, 4]" qui-carousel-item >
            <div qui-card>
              <div qui-card-content style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <span qui-text size="4xl" weight="bold" >{{ item + 1 }}</span>
              </div>
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
