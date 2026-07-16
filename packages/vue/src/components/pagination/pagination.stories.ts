import PaginationComponent from '@/components/pagination/pagination.vue'
import PaginationContentComponent from '@/components/pagination/pagination-content.vue'
import PaginationItemComponent from '@/components/pagination/pagination-item.vue'
import PaginationLinkComponent from '@/components/pagination/pagination-link.vue'
import PaginationPreviousComponent from '@/components/pagination/pagination-previous.vue'
import PaginationNextComponent from '@/components/pagination/pagination-next.vue'
import PaginationEllipsisComponent from '@/components/pagination/pagination-ellipsis.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Website/Components/Pagination',
  component: PaginationComponent,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: {
      PaginationComponent,
      PaginationContentComponent,
      PaginationItemComponent,
      PaginationLinkComponent,
      PaginationPreviousComponent,
      PaginationNextComponent,
      PaginationEllipsisComponent
    },
    setup() {
      return { args }
    },
    template: `
      <PaginationComponent aria-label="pagination">
        <PaginationContentComponent>
          <PaginationItemComponent>
            <PaginationPreviousComponent />
          </PaginationItemComponent>
          <PaginationItemComponent>
            <PaginationLinkComponent :is-active="true">1</PaginationLinkComponent>
          </PaginationItemComponent>
          <PaginationItemComponent>
            <PaginationLinkComponent>2</PaginationLinkComponent>
          </PaginationItemComponent>
          <PaginationItemComponent>
            <PaginationEllipsisComponent />
          </PaginationItemComponent>
          <PaginationItemComponent>
            <PaginationLinkComponent>10</PaginationLinkComponent>
          </PaginationItemComponent>
          <PaginationItemComponent>
            <PaginationNextComponent />
          </PaginationItemComponent>
        </PaginationContentComponent>
      </PaginationComponent>
    `
  })
} satisfies Meta<typeof PaginationComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
