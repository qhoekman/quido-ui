import ToastComponent from '@/components/toast/toast.vue'
import ToastTitleComponent from '@/components/toast/toast-title.vue'
import ToastDescriptionComponent from '@/components/toast/toast-description.vue'
import ToastCloseComponent from '@/components/toast/toast-close.vue'
import ToastViewportComponent from '@/components/toast/toast-viewport.vue'
import ToastActionComponent from '@/components/toast/toast-action.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Toast',
  component: ToastComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive']
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'default',
    asChild: false
  },
  render: (args) => ({
    components: {
      ToastComponent,
      ToastTitleComponent,
      ToastDescriptionComponent,
      ToastCloseComponent,
      ToastViewportComponent,
      ToastActionComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ToastViewportComponent>
        <ToastComponent v-bind="args">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
            <ToastTitleComponent>{{ args.variant === 'destructive' ? 'Failed to save' : 'Event created' }}</ToastTitleComponent>
            <ToastDescriptionComponent>{{ args.variant === 'destructive' ? 'There was a problem saving your changes.' : 'Your event has been added to the calendar.' }}</ToastDescriptionComponent>
          </div>
          <div style="display: flex; flex-direction: row; gap: var(--spacing-2);">
            <ToastActionComponent>{{ args.variant === 'destructive' ? 'Retry' : 'Undo' }}</ToastActionComponent>
          </div>
          <ToastCloseComponent />
        </ToastComponent>
      </ToastViewportComponent>
    `
  })
} satisfies Meta<typeof ToastComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  }
}

export const Composition: Story = {
  render: () => ({
    components: {
      ToastComponent,
      ToastTitleComponent,
      ToastDescriptionComponent,
      ToastCloseComponent,
      ToastViewportComponent,
      ToastActionComponent
    },
    template: `
      <div style="height: 320px; position: relative; background-color: var(--color-muted); border-radius: var(--border-radius-lg);">
        <div style="padding: var(--spacing-4);">
          <h3 style="margin: 0 0 var(--spacing-1);">Calendar</h3>
          <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Your events for this week will appear here.</p>
        </div>
        <ToastViewportComponent style="position: absolute; top: auto; bottom: 0; right: 0; left: auto;">
          <ToastComponent variant="default">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
              <ToastTitleComponent>Event created</ToastTitleComponent>
              <ToastDescriptionComponent>Your event has been added to the calendar.</ToastDescriptionComponent>
            </div>
            <div style="display: flex; flex-direction: row; gap: var(--spacing-2);">
              <ToastActionComponent>Undo</ToastActionComponent>
            </div>
            <ToastCloseComponent />
          </ToastComponent>
        </ToastViewportComponent>
      </div>
    `
  })
}

export const WithoutDescription: Story = {
  args: {
    variant: 'default'
  },
  render: (args) => ({
    components: {
      ToastComponent,
      ToastTitleComponent,
      ToastCloseComponent,
      ToastViewportComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ToastViewportComponent>
        <ToastComponent v-bind="args">
          <ToastTitleComponent>Message sent</ToastTitleComponent>
          <ToastCloseComponent />
        </ToastComponent>
      </ToastViewportComponent>
    `
  })
}

export const WithoutAction: Story = {
  args: {
    variant: 'default'
  },
  render: (args) => ({
    components: {
      ToastComponent,
      ToastTitleComponent,
      ToastDescriptionComponent,
      ToastCloseComponent,
      ToastViewportComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ToastViewportComponent>
        <ToastComponent v-bind="args">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
            <ToastTitleComponent>Copied to clipboard</ToastTitleComponent>
            <ToastDescriptionComponent>The link has been copied to your clipboard.</ToastDescriptionComponent>
          </div>
          <ToastCloseComponent />
        </ToastComponent>
      </ToastViewportComponent>
    `
  })
}
