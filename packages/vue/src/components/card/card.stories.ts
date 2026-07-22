import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardDescriptionComponent from '@/components/card/card-description.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import CardFooterComponent from '@/components/card/card-footer.vue'
import ButtonComponent from '@/components/button/button.vue'
import InputComponent from '@/components/input/input.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Card',
  component: CardComponent,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: {
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardDescriptionComponent,
      CardContentComponent,
      CardFooterComponent,
      ButtonComponent,
      InputComponent
    },
    setup() {
      return { args }
    },
    template: `
      <CardComponent
        style="width: 350px;"
        v-bind="args"
      >
        <CardHeaderComponent>
          <CardTitleComponent>Create project</CardTitleComponent>
          <CardDescriptionComponent>Deploy your new project in one-click.</CardDescriptionComponent>
        </CardHeaderComponent>
        <CardContentComponent>
          <form>
            <div
              style="display: grid; width: 100%; align-items: center; gap: var(--spacing-4);"
            >
              <div
                style="display: flex; flex-direction: column; gap: var(--spacing-1-5);"
              >
                <label for="name" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Name</label>
                <InputComponent id="name" placeholder="Name of your project" />
              </div>
              <div
                style="display: flex; flex-direction: column; gap: var(--spacing-1-5);"
              >
                <label for="framework" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Framework</label>
                <InputComponent id="framework" placeholder="..." />
              </div>
            </div>
          </form>
        </CardContentComponent>
        <CardFooterComponent style="display: flex; justify-content: space-between;">
          <ButtonComponent variant="outline">Cancel</ButtonComponent>
          <ButtonComponent>Deploy</ButtonComponent>
        </CardFooterComponent>
      </CardComponent>
    `
  })
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardDescriptionComponent,
      CardContentComponent,
      CardFooterComponent,
      ButtonComponent
    },
    template: `
      <CardComponent style="width: 350px;">
        <CardHeaderComponent>
          <CardTitleComponent>Team members</CardTitleComponent>
          <CardDescriptionComponent>Invite your team to collaborate on this project.</CardDescriptionComponent>
        </CardHeaderComponent>
        <CardContentComponent>
          <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
            <div style="display: flex; justify-content: space-between;">
              <span>Jane Doe</span>
              <span style="color: var(--color-muted-fg);">Owner</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Marcus Lee</span>
              <span style="color: var(--color-muted-fg);">Editor</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Priya Nair</span>
              <span style="color: var(--color-muted-fg);">Viewer</span>
            </div>
          </div>
        </CardContentComponent>
        <CardFooterComponent>
          <ButtonComponent variant="outline" style="width: 100%;">Invite member</ButtonComponent>
        </CardFooterComponent>
      </CardComponent>
    `
  })
}
