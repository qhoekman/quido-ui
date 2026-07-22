import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconCaretSortComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { ButtonComponent } from '../button/button.component';
import { AccordionContentComponent } from './accordion-content.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionTriggerDirective } from './accordion-trigger.directive';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Disclosure/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AccordionComponent,
        AccordionItemComponent,
        AccordionTriggerDirective,
        AccordionContentComponent,
        StoryComponent,
        ButtonComponent,
        IconCaretSortComponent,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  render: () => ({
    template: `
     <qui-story>
      <div [qui-accordion]>
        <div [qui-accordion-item] #item1>
          <button qui-button qui-accordion-trigger [item]="item1" variant="ghost" size="sm" fullWidth="true">
            <span>What is your refund policy?</span>
            <i qui-icon name="caret-sort"></i>
          </button>
          <div qui-accordion-content [item]="item1">You can request a full refund within 30 days of purchase, no questions asked.</div>
        </div>
        <div [qui-accordion-item] #item2>
          <button qui-button qui-accordion-trigger [item]="item2" variant="ghost" size="sm" fullWidth="true">
            <span>Do you offer team plans?</span>
            <i qui-icon name="caret-sort"></i>
          </button>
          <div qui-accordion-content [item]="item2">Yes, team plans start at 5 seats and include centralized billing and admin controls.</div>
        </div>
      </div>
     </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
     <qui-story>
      <div style="max-width: 32rem;">
        <h3 style="margin: 0 0 var(--spacing-4);">Frequently Asked Questions</h3>
        <div [qui-accordion] style="width: 100%;">
          <div [qui-accordion-item] #item1>
            <button qui-button qui-accordion-trigger [item]="item1" variant="ghost" size="sm" fullWidth="true">
              <span>What is your refund policy?</span>
              <i qui-icon name="caret-sort"></i>
            </button>
            <div qui-accordion-content [item]="item1">You can request a full refund within 30 days of purchase, no questions asked.</div>
          </div>
          <div [qui-accordion-item] #item2>
            <button qui-button qui-accordion-trigger [item]="item2" variant="ghost" size="sm" fullWidth="true">
              <span>Do you offer team plans?</span>
              <i qui-icon name="caret-sort"></i>
            </button>
            <div qui-accordion-content [item]="item2">Yes, team plans start at 5 seats and include centralized billing and admin controls.</div>
          </div>
          <div [qui-accordion-item] #item3>
            <button qui-button qui-accordion-trigger [item]="item3" variant="ghost" size="sm" fullWidth="true">
              <span>Can I cancel anytime?</span>
              <i qui-icon name="caret-sort"></i>
            </button>
            <div qui-accordion-content [item]="item3">Absolutely. Cancel your subscription anytime from your account settings — no cancellation fees.</div>
          </div>
        </div>
      </div>
     </qui-story>
    `,
  }),
};
