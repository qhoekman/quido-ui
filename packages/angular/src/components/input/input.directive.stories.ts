import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'
import { ButtonDirective, ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'
import { LabelDirective } from '@/app/label/label.directive'
import { InputDirective } from '@/app/input/input.directive'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Data Manipulation/Input',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, InputDirective, LabelDirective]
    })
  ],
  args: {
    label: 'Label',
    disabled: false
  },
  render: (args: ButtonProps) => ({
    props: args,
    template: `
  <div className="max-w-sm">
    <label quiLabel for="input">{{label}}</label>
    <input quiInput id="input" type="text" [disabled]="disabled" />
  </div>`
  })
}

export const Default: Story = {}

export default meta
