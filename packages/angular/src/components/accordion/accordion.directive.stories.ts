import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'
import { ButtonDirective, ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'
import { BadgeDirective } from '@/app/badge/badge.directive'
import {
  AccordionContentDirective,
  AccordionDirective,
  AccordionItemDirective,
  AccordionTriggerDirective
} from '@/app/accordion/accordion.directive'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { ChevronDown, ChevronsUpDown, LucideAngularModule } from 'lucide-angular'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Data Display/Accordion',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        CdkAccordionModule,
        AccordionDirective,
        AccordionItemDirective,
        AccordionContentDirective,
        AccordionTriggerDirective,
        LucideAngularModule.pick({ ChevronsUpDown })
      ]
    })
  ],
  args: {
    type: 'single'
  },
  render: (args) => ({
    props: args,
    template: `
<div quiAccordion [type]="type" class="max-w-sm">
  <div quiAccordionItem value="item-1">
    <div quiAccordionTrigger>
      Lorem ipsum dolor sit amet
      <lucide-angular name="chevrons-up-down"></lucide-angular>
    </div>
    <div quiAccordionContent>
      Aliquam erat volutpat. Vivamus ornare scelerisque elementum. Vestibulum erat nibh, interdum
      sed consequat at, dapibus id leo. Etiam eu velit eget lorem iaculis malesuada ut a nibh.
    </div>
  </div>
  <div quiAccordionItem value="item-2">
    <div quiAccordionTrigger>
      Sed quis velit et ligula luctus efficitur
      <lucide-angular name="chevrons-up-down"></lucide-angular>
    </div>
    <div quiAccordionContent>
      Phasellus efficitur massa id arcu faucibus ornare. Etiam viverra ex eget finibus rutrum. Proin
      accumsan lacus eget tellus finibus, at maximus augue varius.
    </div>
  </div>
</div>

`
  })
}

export const Default: Story = {}

export default meta
