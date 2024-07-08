import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'
import { ButtonDirective, ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Actions/Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonDirective]
    })
  ],
  args: {
    variant: 'default',
    size: 'default',
    type: 'button',
    disabled: false
  },
  render: (args: ButtonProps) => ({
    props: args,
    template: `<button quiButton
      [attr.type]="type"
      [disabled]="disabled"
      [variant]="variant"
      [size]="size"
    >Button</button>`
  })
}

export const Default: Story = {}

export default meta
