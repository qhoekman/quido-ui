import BreadcrumbComponent from '@/components/breadcrumb/breadcrumb.vue'
import BreadcrumbListComponent from '@/components/breadcrumb/breadcrumb-list.vue'
import BreadcrumbItemComponent from '@/components/breadcrumb/breadcrumb-item.vue'
import BreadcrumbSeparatorComponent from '@/components/breadcrumb/breadcrumb-separator.vue'
import BreadcrumbLinkComponent from '@/components/breadcrumb/breadcrumb-link.vue'
import BreadcrumbPageComponent from '@/components/breadcrumb/breadcrumb-page.vue'
import BreadcrumbEllipsisComponent from '@/components/breadcrumb/breadcrumb-ellipsis.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ChevronRight } from 'lucide-vue-next'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: BreadcrumbComponent,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: {
      BreadcrumbComponent,
      BreadcrumbListComponent,
      BreadcrumbItemComponent,
      BreadcrumbSeparatorComponent,
      BreadcrumbLinkComponent,
      BreadcrumbPageComponent,
      BreadcrumbEllipsisComponent,
      ChevronRight,
    },
    setup() {
      return { args }
    },
    template: `
      <BreadcrumbComponent v-bind="args">
        <BreadcrumbListComponent>
          <BreadcrumbItemComponent>
            <BreadcrumbEllipsisComponent />
          </BreadcrumbItemComponent>
          <BreadcrumbSeparatorComponent />
          <BreadcrumbItemComponent>
            <BreadcrumbLinkComponent href="#">Library</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>
          <BreadcrumbSeparatorComponent />
          <BreadcrumbItemComponent>
            <BreadcrumbLinkComponent href="#">Media</BreadcrumbLinkComponent>
          </BreadcrumbItemComponent>
          <BreadcrumbSeparatorComponent>
            <ChevronRight :size="16" />
          </BreadcrumbSeparatorComponent>
          <BreadcrumbItemComponent>
            <BreadcrumbPageComponent>Videos</BreadcrumbPageComponent>
          </BreadcrumbItemComponent>
        </BreadcrumbListComponent>
      </BreadcrumbComponent>
    `
  })
} satisfies Meta<typeof BreadcrumbComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      BreadcrumbComponent,
      BreadcrumbListComponent,
      BreadcrumbItemComponent,
      BreadcrumbLinkComponent,
      BreadcrumbPageComponent,
      BreadcrumbSeparatorComponent
    },
    template: `
      <div>
        <BreadcrumbComponent style="margin-bottom: var(--spacing-2);">
          <BreadcrumbListComponent>
            <BreadcrumbItemComponent>
              <BreadcrumbLinkComponent href="#">Projects</BreadcrumbLinkComponent>
            </BreadcrumbItemComponent>
            <BreadcrumbSeparatorComponent />
            <BreadcrumbItemComponent>
              <BreadcrumbLinkComponent href="#">Website Redesign</BreadcrumbLinkComponent>
            </BreadcrumbItemComponent>
            <BreadcrumbSeparatorComponent />
            <BreadcrumbItemComponent>
              <BreadcrumbPageComponent>Tasks</BreadcrumbPageComponent>
            </BreadcrumbItemComponent>
          </BreadcrumbListComponent>
        </BreadcrumbComponent>
        <h3 style="margin: 0;">Tasks</h3>
      </div>
    `
  })
}
