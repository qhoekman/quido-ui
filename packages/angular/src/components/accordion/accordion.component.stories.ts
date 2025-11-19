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
            <span>Toggle item 1</span>
            <i qui-icon name="caret-sort"></i>
          </button>
          <div qui-accordion-content [item]="item1">Content 1</div>
        </div>
        <div [qui-accordion-item] #item2>
          <button qui-button qui-accordion-trigger [item]="item2" variant="ghost" size="sm" fullWidth="true">
            <span>Toggle item 2</span>
            <i qui-icon name="caret-sort"></i>
          </button>
          <div qui-accordion-content [item]="item2">Content 2</div>
        </div>
      </div>
     </qui-story>
    `,
  }),
};
