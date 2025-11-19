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
     <pui-story>
      <div [pui-accordion]>
        <div [pui-accordion-item] #item1>
          <button pui-button pui-accordion-trigger [item]="item1" variant="ghost" size="sm" fullWidth="true">
            <span>Toggle item 1</span>
            <i pui-icon name="caret-sort"></i>
          </button>
          <div pui-accordion-content [item]="item1">Content 1</div>
        </div>
        <div [pui-accordion-item] #item2>
          <button pui-button pui-accordion-trigger [item]="item2" variant="ghost" size="sm" fullWidth="true">
            <span>Toggle item 2</span>
            <i pui-icon name="caret-sort"></i>
          </button>
          <div pui-accordion-content [item]="item2">Content 2</div>
        </div>
      </div>
     </pui-story>
    `,
  }),
};
