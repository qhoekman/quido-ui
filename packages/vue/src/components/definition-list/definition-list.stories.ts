import DefinitionListComponent from '@/components/definition-list/definition-list.vue'
import DefinitionListItemComponent from '@/components/definition-list/definition-list-item.vue'
import DefinitionTermComponent from '@/components/definition-list/definition-term.vue'
import DefinitionDescriptionComponent from '@/components/definition-list/definition-description.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Application/Components/Definition List',
  component: DefinitionListComponent,
  argTypes: {
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    asChild: false
  },
  render: (args) => ({
    components: {
      DefinitionListComponent,
      DefinitionListItemComponent,
      DefinitionTermComponent,
      DefinitionDescriptionComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: var(--spacing-2xl); margin: 0 auto;">
        <DefinitionListComponent v-bind="args">
          <DefinitionListItemComponent>
            <DefinitionTermComponent>
              Full name
            </DefinitionTermComponent>
            <DefinitionDescriptionComponent>
              John Doe
            </DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
          <DefinitionListItemComponent>
            <DefinitionTermComponent>
              Phone number
            </DefinitionTermComponent>
            <DefinitionDescriptionComponent>
              +1 (555) 123-4567
            </DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
          <DefinitionListItemComponent>
            <DefinitionTermComponent>
              Email address
            </DefinitionTermComponent>
            <DefinitionDescriptionComponent>
              <a href="mailto:johndoe@example.com">johndoe@example.com</a>
            </DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
        </DefinitionListComponent>
      </div>
    `
  })
} satisfies Meta<typeof DefinitionListComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      DefinitionListComponent,
      DefinitionListItemComponent,
      DefinitionTermComponent,
      DefinitionDescriptionComponent
    },
    template: `
      <div style="max-width: var(--spacing-2xl); padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h4 style="margin: 0 0 var(--spacing-4);">Order #4471</h4>
        <DefinitionListComponent>
          <DefinitionListItemComponent>
            <DefinitionTermComponent>Order date</DefinitionTermComponent>
            <DefinitionDescriptionComponent>June 12, 2026</DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
          <DefinitionListItemComponent>
            <DefinitionTermComponent>Status</DefinitionTermComponent>
            <DefinitionDescriptionComponent>Shipped</DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
          <DefinitionListItemComponent>
            <DefinitionTermComponent>Total</DefinitionTermComponent>
            <DefinitionDescriptionComponent>$128.50</DefinitionDescriptionComponent>
          </DefinitionListItemComponent>
        </DefinitionListComponent>
      </div>
    `
  })
}
