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
            <ToastTitleComponent>Toast Title</ToastTitleComponent>
            <ToastDescriptionComponent>This is a toast description.</ToastDescriptionComponent>
          </div>
          <div style="display: flex; flex-direction: row; gap: var(--spacing-2);">
            <ToastActionComponent>Action</ToastActionComponent>
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
          <ToastTitleComponent>Toast Title</ToastTitleComponent>
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
            <ToastTitleComponent>Toast Title</ToastTitleComponent>
            <ToastDescriptionComponent>This is a toast description.</ToastDescriptionComponent>
          </div>
          <ToastCloseComponent />
        </ToastComponent>
      </ToastViewportComponent>
    `
  })
}
