import ActionSheet from './action-sheet.vue'
import ActionSheetTrigger from './action-sheet-trigger.vue'
import ActionSheetContent from './action-sheet-content.vue'
import ActionSheetHeader from './action-sheet-header.vue'
import ActionSheetFooter from './action-sheet-footer.vue'
import ActionSheetTitle from './action-sheet-title.vue'
import ActionSheetDescription from './action-sheet-description.vue'
import ActionSheetClose from './action-sheet-close.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Mobile/Components/Action Sheet',
  component: ActionSheet,
  argTypes: {
    shouldScaleBackground: {
      control: 'boolean',
      description: 'Whether the background should scale when the drawer opens'
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The open state of the action sheet when it is initially rendered'
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the action sheet'
    },
    modal: {
      control: 'boolean',
      description: 'Whether the action sheet is modal'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the action sheet can be dismissed by clicking outside or pressing escape'
    }
  },
  args: {
    shouldScaleBackground: true,
    modal: true,
    dismissible: true
  },
  render: (args) => ({
    components: {
      ActionSheet,
      ActionSheetTrigger,
      ActionSheetContent,
      ActionSheetHeader,
      ActionSheetFooter,
      ActionSheetTitle,
      ActionSheetDescription,
      ActionSheetClose,
      ButtonComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ActionSheet v-bind="args">
        <ActionSheetTrigger as-child>
          <ButtonComponent variant="outline">Open ActionSheet</ButtonComponent>
        </ActionSheetTrigger>
        <ActionSheetContent>
          <div style="margin: 0 auto; width: 100%; max-width: var(--spacing-sm);">
            <ActionSheetHeader>
              <ActionSheetTitle>Choose action</ActionSheetTitle>
              <ActionSheetDescription>
                Pick one of the following actions.
              </ActionSheetDescription>
            </ActionSheetHeader>
            <ul>
              <li v-for="action in ['Share', 'Edit', 'Duplicate', 'Archive', 'Delete']" :key="action">
                <ButtonComponent variant="ghost" style="width: 100%; justify-content: flex-start;">
                  {{ action }}
                </ButtonComponent>
              </li>
            </ul>
            <ActionSheetFooter>
              <ActionSheetClose as-child>
                <ButtonComponent variant="outline">Cancel</ButtonComponent>
              </ActionSheetClose>
            </ActionSheetFooter>
          </div>
        </ActionSheetContent>
      </ActionSheet>
    `
  }),
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
} satisfies Meta<typeof ActionSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      ActionSheet,
      ActionSheetTrigger,
      ActionSheetContent,
      ActionSheetHeader,
      ActionSheetFooter,
      ActionSheetTitle,
      ActionSheetDescription,
      ActionSheetClose,
      ButtonComponent
    },
    template: `
      <ActionSheet modal dismissible>
        <div style="margin: var(--spacing-6) auto 0; width: 100%; max-width: var(--spacing-lg); display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-3); padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <div>
            <p style="margin: 0; font-weight: var(--font-weight-medium);">Sunset over the bay</p>
            <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Posted 2 hours ago</p>
          </div>
          <ActionSheetTrigger as-child>
            <ButtonComponent variant="ghost" size="sm">⋯</ButtonComponent>
          </ActionSheetTrigger>
        </div>
        <ActionSheetContent>
          <div style="margin: 0 auto; width: 100%; max-width: var(--spacing-sm);">
            <ActionSheetHeader>
              <ActionSheetTitle>Manage post</ActionSheetTitle>
              <ActionSheetDescription>
                Choose what to do with this post.
              </ActionSheetDescription>
            </ActionSheetHeader>
            <ul>
              <li v-for="action in ['Save to Collection', 'Share', 'Copy Link', 'Report', 'Delete Post']" :key="action">
                <ButtonComponent variant="ghost" style="width: 100%; justify-content: flex-start;">
                  {{ action }}
                </ButtonComponent>
              </li>
            </ul>
            <ActionSheetFooter>
              <ActionSheetClose as-child>
                <ButtonComponent variant="outline">Cancel</ButtonComponent>
              </ActionSheetClose>
            </ActionSheetFooter>
          </div>
        </ActionSheetContent>
      </ActionSheet>
    `
  }),
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}
