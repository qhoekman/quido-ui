import {
  AccordionContentDirective,
  AccordionDirective,
  AccordionIconDirective,
  AccordionItemDirective,
  AccordionTriggerDirective,
} from '@/components/accordion/accordion.directive';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  LucideAngularModule,
} from 'lucide-angular';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Disclosure/Accordion',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        CdkAccordionModule,
        AccordionDirective,
        AccordionItemDirective,
        AccordionContentDirective,
        AccordionTriggerDirective,
        AccordionIconDirective,
        LucideAngularModule.pick({ ChevronsUpDown, ChevronUp, ChevronDown }),
      ],
    }),
  ],
  args: {
    type: 'single',
  },
  render: (args) => ({
    props: args,
    template: `
<div quiAccordion [type]="type" class="max-w-sm">
  <div quiAccordionItem value="item-1">
    <div quiAccordionTrigger>
      Lorem ipsum dolor sit amet
      <lucide-angular quiAccordionIcon #t1="quiAccordionIcon" [name]="t1.name"></lucide-angular>
    </div>
    <div quiAccordionContent>
      Aliquam erat volutpat. Vivamus ornare scelerisque elementum. Vestibulum erat nibh, interdum
      sed consequat at, dapibus id leo. Etiam eu velit eget lorem iaculis malesuada ut a nibh.
    </div>
  </div>
  <div quiAccordionItem value="item-2">
    <div quiAccordionTrigger>
      Sed quis velit et ligula luctus efficitur
      <lucide-angular quiAccordionIcon #t2="quiAccordionIcon" [name]="t2.name"></lucide-angular>
    </div>
    <div quiAccordionContent>
      Phasellus efficitur massa id arcu faucibus ornare. Etiam viverra ex eget finibus rutrum. Proin
      accumsan lacus eget tellus finibus, at maximus augue varius.
    </div>
  </div>
</div>

`,
  }),
};

export const Default: Story = {};

export default meta;
