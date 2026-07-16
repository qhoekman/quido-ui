import DropdownMenuComponent from '@/components/dropdown-menu/dropdown-menu.vue'
import DropdownMenuTriggerComponent from '@/components/dropdown-menu/dropdown-menu-trigger.vue'
import DropdownMenuContentComponent from '@/components/dropdown-menu/dropdown-menu-content.vue'
import DropdownMenuGroupComponent from '@/components/dropdown-menu/dropdown-menu-group.vue'
import DropdownMenuItemComponent from '@/components/dropdown-menu/dropdown-menu-item.vue'
import DropdownMenuLabelComponent from '@/components/dropdown-menu/dropdown-menu-label.vue'
import DropdownMenuSeparatorComponent from '@/components/dropdown-menu/dropdown-menu-separator.vue'
import DropdownMenuShortcutComponent from '@/components/dropdown-menu/dropdown-menu-shortcut.vue'
import DropdownMenuSubComponent from '@/components/dropdown-menu/dropdown-menu-sub.vue'
import DropdownMenuSubTriggerComponent from '@/components/dropdown-menu/dropdown-menu-sub-trigger.vue'
import DropdownMenuSubContentComponent from '@/components/dropdown-menu/dropdown-menu-sub-content.vue'
import DropdownMenuPortalComponent from '@/components/dropdown-menu/dropdown-menu-portal.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users
} from 'lucide-vue-next'

const meta = {
  title: 'Components/Overlay/Dropdown Menu',
  component: DropdownMenuComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the dropdown menu when it is initially rendered'
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the dropdown menu'
    },
    modal: {
      control: 'boolean',
      description: 'Whether the dropdown menu is modal'
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the dropdown menu'
    }
  },
  args: {
    defaultOpen: false
  },
  render: (args) => ({
    components: {
      DropdownMenuComponent,
      DropdownMenuTriggerComponent,
      DropdownMenuContentComponent,
      DropdownMenuGroupComponent,
      DropdownMenuItemComponent,
      DropdownMenuLabelComponent,
      DropdownMenuSeparatorComponent,
      DropdownMenuShortcutComponent,
      DropdownMenuSubComponent,
      DropdownMenuSubTriggerComponent,
      DropdownMenuSubContentComponent,
      DropdownMenuPortalComponent,
      ButtonComponent,
      Cloud,
      CreditCard,
      Github,
      Keyboard,
      LifeBuoy,
      LogOut,
      Mail,
      MessageSquare,
      Plus,
      PlusCircle,
      Settings,
      User,
      UserPlus,
      Users
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
      <DropdownMenuComponent
        v-model:open="open"
        :modal="args.modal"
        :dir="args.dir"
      >
        <DropdownMenuTriggerComponent as-child>
          <ButtonComponent variant="outline">Open</ButtonComponent>
        </DropdownMenuTriggerComponent>
        <DropdownMenuContentComponent :style="{ width: 'var(--spacing-56)' }">
          <DropdownMenuLabelComponent>My Account</DropdownMenuLabelComponent>
          <DropdownMenuSeparatorComponent />
          <DropdownMenuGroupComponent>
            <DropdownMenuItemComponent>
              <User :size="16" />
              <span>Profile</span>
              <DropdownMenuShortcutComponent>⇧⌘P</DropdownMenuShortcutComponent>
            </DropdownMenuItemComponent>
            <DropdownMenuItemComponent>
              <CreditCard :size="16" />
              <span>Billing</span>
              <DropdownMenuShortcutComponent>⌘B</DropdownMenuShortcutComponent>
            </DropdownMenuItemComponent>
            <DropdownMenuItemComponent>
              <Settings :size="16" />
              <span>Settings</span>
              <DropdownMenuShortcutComponent>⌘S</DropdownMenuShortcutComponent>
            </DropdownMenuItemComponent>
            <DropdownMenuItemComponent>
              <Keyboard :size="16" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcutComponent>⌘K</DropdownMenuShortcutComponent>
            </DropdownMenuItemComponent>
          </DropdownMenuGroupComponent>
          <DropdownMenuSeparatorComponent />
          <DropdownMenuGroupComponent>
            <DropdownMenuItemComponent>
              <Users :size="16" />
              <span>Team</span>
            </DropdownMenuItemComponent>
            <DropdownMenuSubComponent>
              <DropdownMenuSubTriggerComponent>
                <UserPlus :size="16" />
                <span>Invite users</span>
              </DropdownMenuSubTriggerComponent>
              <DropdownMenuPortalComponent>
                <DropdownMenuSubContentComponent>
                  <DropdownMenuItemComponent>
                    <Mail :size="16" />
                    <span>Email</span>
                  </DropdownMenuItemComponent>
                  <DropdownMenuItemComponent>
                    <MessageSquare :size="16" />
                    <span>Message</span>
                  </DropdownMenuItemComponent>
                  <DropdownMenuSeparatorComponent />
                  <DropdownMenuItemComponent>
                    <PlusCircle :size="16" />
                    <span>More...</span>
                  </DropdownMenuItemComponent>
                </DropdownMenuSubContentComponent>
              </DropdownMenuPortalComponent>
            </DropdownMenuSubComponent>
            <DropdownMenuItemComponent>
              <Plus :size="16" />
              <span>New Team</span>
              <DropdownMenuShortcutComponent>⌘+T</DropdownMenuShortcutComponent>
            </DropdownMenuItemComponent>
          </DropdownMenuGroupComponent>
          <DropdownMenuSeparatorComponent />
          <DropdownMenuItemComponent>
            <Github :size="16" />
            <span>GitHub</span>
          </DropdownMenuItemComponent>
          <DropdownMenuItemComponent>
            <LifeBuoy :size="16" />
            <span>Support</span>
          </DropdownMenuItemComponent>
          <DropdownMenuItemComponent disabled>
            <Cloud :size="16" />
            <span>API</span>
          </DropdownMenuItemComponent>
          <DropdownMenuSeparatorComponent />
          <DropdownMenuItemComponent>
            <LogOut :size="16" />
            <span>Log out</span>
            <DropdownMenuShortcutComponent>⇧⌘Q</DropdownMenuShortcutComponent>
          </DropdownMenuItemComponent>
        </DropdownMenuContentComponent>
      </DropdownMenuComponent>
    `
  })
} satisfies Meta<typeof DropdownMenuComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Uncontrolled: Story = {
  render: () => ({
    components: {
      DropdownMenuComponent,
      DropdownMenuTriggerComponent,
      DropdownMenuContentComponent,
      DropdownMenuItemComponent,
      ButtonComponent
    },
    // No v-model:open here -- this is the plain, most common real-world
    // usage (no external state at all), which previously never toggled
    // because `open` silently auto-defaulted to `false` instead of
    // `undefined`, pinning reka-ui's internal state in controlled mode.
    template: `
      <DropdownMenuComponent>
        <DropdownMenuTriggerComponent as-child>
          <ButtonComponent variant="outline">Open</ButtonComponent>
        </DropdownMenuTriggerComponent>
        <DropdownMenuContentComponent :style="{ width: 'var(--spacing-56)' }">
          <DropdownMenuItemComponent>Profile</DropdownMenuItemComponent>
          <DropdownMenuItemComponent>Settings</DropdownMenuItemComponent>
        </DropdownMenuContentComponent>
      </DropdownMenuComponent>
    `
  })
}
