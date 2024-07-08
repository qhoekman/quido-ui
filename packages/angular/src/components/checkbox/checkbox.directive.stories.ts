import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'
import { ButtonDirective, ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'
import { LabelDirective } from '@/app/label/label.directive'
import { CheckboxDirective } from '@/app/checkbox/checkbox.directive'
import { CheckboxIndicatorDirective } from '@/app/checkbox/checkbox-indicator.directive'
import { Check, LucideAngularModule } from 'lucide-angular'
import { CheckboxInputDirective } from '@/app/checkbox/checkbox-input.directive'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Data Manipulation/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LabelDirective,
        CheckboxDirective,
        CheckboxIndicatorDirective,
        CheckboxInputDirective,
        LucideAngularModule.pick({ Check })
      ]
    })
  ],
  args: {
    label: 'Accept terms and conditions',
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
<div class="flex items-center space-x-2">
  <input quiCheckboxInput id="terms" checked [disabled]="disabled" />
  <div quiCheckbox>
    <lucide-angular quiCheckboxIndicator name="check"></lucide-angular>
  </div>
  <label
    quiLabel
    for="terms"
  >
    {{label}}
  </label>
</div>
`
  })
}

export const Default: Story = {}

export default meta