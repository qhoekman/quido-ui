import { moduleMetadata, Meta, StoryObj } from '@storybook/angular'
import { ButtonDirective, ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'
import { BadgeDirective } from '@/app/badge/badge.directive'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Data Display/Badge',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BadgeDirective]
    })
  ],
  args: {
    variant: 'default',
    size: 'default',
    content: '1'
  },
  render: (args) => ({
    props: args,
    template: `<div quiBadge [variant]="variant" [size]="size">{{content}}</div>`
  })
}

export const Default: Story = {}

export default meta
