import { BreadcrumbModule } from '@/app/breadcrumb/breadcrumb.module'
import { ButtonProps } from '@/app/button/button.directive'
import { CommonModule } from '@angular/common'
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular'
import { ChevronRight, LucideAngularModule } from 'lucide-angular'

type Story = StoryObj<any>

const meta: Meta<any> = {
  title: 'Components/Data Display/Breadcrumb',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, LucideAngularModule.pick({ ChevronRight }), BreadcrumbModule]
    })
  ],
  args: {
    variant: 'default',
    size: 'default',
    src: 'https://avatars.githubusercontent.com/u/12592949?s=460&u=jd&v=4',
    fallback: 'JD'
  },
  render: (args) => ({
    props: args,
    template: `
<nav quiBreadcrumb>
  <a quiBreadcrumbItem href="#" >Home</a>
  <lucide-icon quiBreadcrumbSeparator name="chevron-right"></lucide-icon>
  <a quiBreadcrumbItem href="/library">Library</a>
</nav>`
  })
}

export const Default: Story = {}

export default meta
