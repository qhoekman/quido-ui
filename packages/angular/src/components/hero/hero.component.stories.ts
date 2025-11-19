import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

import { StackComponent } from '../stack/stack.component';
import { HeroActionsComponent } from './hero-actions.component';
import { HeroBodyComponent } from './hero-body.component';
import { HeroSectionComponent } from './hero-section.component';
import { HeroTaglineComponent } from './hero-tagline.component';
import { HeroTitleComponent } from './hero-title.component';
import { HeroComponent } from './hero.component';

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
        ButtonComponent,
        StackComponent,
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
              tempora delectus et. Iusto tempora accusantium suscipit labore, iure
              exercitationem autem quasi odit aut temporibus rem expedita maxime at.
              Laudantium?
            </p>
            <div qui-hero-actions>
              <button qui-button>Button</button>
              <button qui-button variant="outline">Button</button>
            </div>
          </div>
        </div>
        <div qui-hero-section style="order: 1;">
          <img
            src="https://dummyimage.com/1000x1000/d4d4d4/171717"
            alt="Image"
            width="1000"
            height="1000"
            class="rounded-xl"
          />
        </div>
      </div>
    `,
  }),
};
