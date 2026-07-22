import DialogComponent from '@/components/dialog/dialog.vue'
import DialogTriggerComponent from '@/components/dialog/dialog-trigger.vue'
import DialogContentComponent from '@/components/dialog/dialog-content.vue'
import DialogHeaderComponent from '@/components/dialog/dialog-header.vue'
import DialogFooterComponent from '@/components/dialog/dialog-footer.vue'
import DialogTitleComponent from '@/components/dialog/dialog-title.vue'
import DialogDescriptionComponent from '@/components/dialog/dialog-description.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Overlay/Dialog',
  component: DialogComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean'
    },
    open: {
      control: 'boolean'
    },
    modal: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    defaultOpen: false,
    modal: true,
    size: 'md'
  },
  render: (args) => ({
    components: {
      DialogComponent,
      DialogTriggerComponent,
      DialogContentComponent,
      DialogHeaderComponent,
      DialogFooterComponent,
      DialogTitleComponent,
      DialogDescriptionComponent,
      ButtonComponent
    },
    setup() {
      // Use controlled mode with v-model for Storybook
      const open = ref(args.defaultOpen ?? false)

      // Watch for changes to defaultOpen from Controls
      watch(
        () => args.defaultOpen,
        (newValue) => {
          open.value = newValue ?? false
        }
      )

      return { args, open }
    },
    template: `
      <DialogComponent
        v-model:open="open"
        :modal="args.modal"
      >
        <DialogTriggerComponent as-child>
          <ButtonComponent variant="outline">Edit Profile</ButtonComponent>
        </DialogTriggerComponent>
        <DialogContentComponent :size="args.size">
          <DialogHeaderComponent>
            <DialogTitleComponent>Edit profile</DialogTitleComponent>
            <DialogDescriptionComponent>
              Make changes to your profile here. Click save when you're done.
            </DialogDescriptionComponent>
          </DialogHeaderComponent>
          <div
            style="display: grid; gap: var(--spacing-4); padding: var(--spacing-4);"
          >
            <div
              style="display: grid; grid-template-columns: 4fr 1fr; gap: var(--spacing-4);"
            >
              <label
                for="name"
                style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value="Pedro Duarte"
                style="grid-column: span 3; padding: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); font-size: var(--font-size-sm);"
              />
            </div>
            <div
              style="display: grid; grid-template-columns: 4fr 1fr; gap: var(--spacing-4);"
            >
              <label
                for="username"
                style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value="@peduarte"
                style="grid-column: span 3; padding: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); font-size: var(--font-size-sm);"
              />
            </div>
          </div>
          <DialogFooterComponent>
            <ButtonComponent type="submit">Save changes</ButtonComponent>
          </DialogFooterComponent>
        </DialogContentComponent>
      </DialogComponent>
    `
  })
} satisfies Meta<typeof DialogComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Uncontrolled: Story = {
  render: () => ({
    components: {
      DialogComponent,
      DialogTriggerComponent,
      DialogContentComponent,
      DialogHeaderComponent,
      DialogFooterComponent,
      DialogTitleComponent,
      DialogDescriptionComponent,
      ButtonComponent
    },
    // No v-model:open here -- this is the plain, most common real-world
    // usage (no external state at all), which previously never toggled
    // because `open` silently auto-defaulted to `false` instead of
    // `undefined`, pinning reka-ui's internal state in controlled mode.
    template: `
      <DialogComponent>
        <DialogTriggerComponent as-child>
          <ButtonComponent variant="outline">Edit Profile</ButtonComponent>
        </DialogTriggerComponent>
        <DialogContentComponent>
          <DialogHeaderComponent>
            <DialogTitleComponent>Edit profile</DialogTitleComponent>
            <DialogDescriptionComponent>
              Make changes to your profile here. Click save when you're done.
            </DialogDescriptionComponent>
          </DialogHeaderComponent>
          <DialogFooterComponent>
            <ButtonComponent type="submit">Save changes</ButtonComponent>
          </DialogFooterComponent>
        </DialogContentComponent>
      </DialogComponent>
    `
  })
}

export const Confirm: Story = {
  args: {
    defaultOpen: false,
    modal: true,
    size: 'md'
  },
  render: (args) => ({
    components: {
      DialogComponent,
      DialogTriggerComponent,
      DialogContentComponent,
      DialogHeaderComponent,
      DialogFooterComponent,
      DialogTitleComponent,
      ButtonComponent
    },
    setup() {
      const open = ref(args.defaultOpen ?? false)

      watch(
        () => args.defaultOpen,
        (newValue) => {
          open.value = newValue ?? false
        }
      )

      return { args, open }
    },
    template: `
      <DialogComponent
        v-model:open="open"
        :modal="args.modal"
      >
        <DialogTriggerComponent as-child>
          <ButtonComponent variant="destructive">Delete Account</ButtonComponent>
        </DialogTriggerComponent>
        <DialogContentComponent :size="args.size">
          <DialogHeaderComponent>
            <DialogTitleComponent>Are you absolutely sure?</DialogTitleComponent>
          </DialogHeaderComponent>
          <div style="padding: var(--spacing-4);">
            <p style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </p>
          </div>
          <DialogFooterComponent>
            <ButtonComponent variant="outline">Cancel</ButtonComponent>
            <ButtonComponent variant="destructive">Confirm</ButtonComponent>
          </DialogFooterComponent>
        </DialogContentComponent>
      </DialogComponent>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: {
      DialogComponent,
      DialogTriggerComponent,
      DialogContentComponent,
      DialogHeaderComponent,
      DialogFooterComponent,
      DialogTitleComponent,
      DialogDescriptionComponent,
      ButtonComponent
    },
    template: `
      <div style="width: 360px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Pedro Duarte</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">@peduarte</p>
        </div>
        <DialogComponent>
          <DialogTriggerComponent as-child>
            <ButtonComponent variant="outline" size="sm">Edit</ButtonComponent>
          </DialogTriggerComponent>
          <DialogContentComponent>
            <DialogHeaderComponent>
              <DialogTitleComponent>Edit profile</DialogTitleComponent>
              <DialogDescriptionComponent>
                Make changes to your profile here. Click save when you're done.
              </DialogDescriptionComponent>
            </DialogHeaderComponent>
            <DialogFooterComponent>
              <ButtonComponent type="submit">Save changes</ButtonComponent>
            </DialogFooterComponent>
          </DialogContentComponent>
        </DialogComponent>
      </div>
    `
  })
}
