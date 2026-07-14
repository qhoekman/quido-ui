import DropdownComponent from '@/components/dropdown/dropdown.vue'
import DropdownTriggerComponent from '@/components/dropdown/dropdown-trigger.vue'
import DropdownContentComponent from '@/components/dropdown/dropdown-content.vue'
import DropdownGroupComponent from '@/components/dropdown/dropdown-group.vue'
import DropdownItemComponent from '@/components/dropdown/dropdown-item.vue'
import DropdownLabelComponent from '@/components/dropdown/dropdown-label.vue'
import DropdownSeparatorComponent from '@/components/dropdown/dropdown-separator.vue'
import DropdownShortcutComponent from '@/components/dropdown/dropdown-shortcut.vue'
import DropdownSubComponent from '@/components/dropdown/dropdown-sub.vue'
import DropdownSubTriggerComponent from '@/components/dropdown/dropdown-sub-trigger.vue'
import DropdownSubContentComponent from '@/components/dropdown/dropdown-sub-content.vue'
import DropdownPortalComponent from '@/components/dropdown/dropdown-portal.vue'
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
  title: 'Components/Overlay/Drop Down',
  component: DropdownComponent,
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
      DropdownComponent,
      DropdownTriggerComponent,
      DropdownContentComponent,
      DropdownGroupComponent,
      DropdownItemComponent,
      DropdownLabelComponent,
      DropdownSeparatorComponent,
      DropdownShortcutComponent,
      DropdownSubComponent,
      DropdownSubTriggerComponent,
      DropdownSubContentComponent,
      DropdownPortalComponent,
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
      <DropdownComponent
        v-model:open="open"
        :modal="args.modal"
        :dir="args.dir"
      >
        <DropdownTriggerComponent as-child>
          <ButtonComponent variant="outline">Open</ButtonComponent>
        </DropdownTriggerComponent>
        <DropdownContentComponent :style="{ width: 'var(--spacing-56)' }">
          <DropdownLabelComponent>My Account</DropdownLabelComponent>
          <DropdownSeparatorComponent />
          <DropdownGroupComponent>
            <DropdownItemComponent>
              <User :size="16" />
              <span>Profile</span>
              <DropdownShortcutComponent>⇧⌘P</DropdownShortcutComponent>
            </DropdownItemComponent>
            <DropdownItemComponent>
              <CreditCard :size="16" />
              <span>Billing</span>
              <DropdownShortcutComponent>⌘B</DropdownShortcutComponent>
            </DropdownItemComponent>
            <DropdownItemComponent>
              <Settings :size="16" />
              <span>Settings</span>
              <DropdownShortcutComponent>⌘S</DropdownShortcutComponent>
            </DropdownItemComponent>
            <DropdownItemComponent>
              <Keyboard :size="16" />
              <span>Keyboard shortcuts</span>
              <DropdownShortcutComponent>⌘K</DropdownShortcutComponent>
            </DropdownItemComponent>
          </DropdownGroupComponent>
          <DropdownSeparatorComponent />
          <DropdownGroupComponent>
            <DropdownItemComponent>
              <Users :size="16" />
              <span>Team</span>
            </DropdownItemComponent>
            <DropdownSubComponent>
              <DropdownSubTriggerComponent>
                <UserPlus :size="16" />
                <span>Invite users</span>
              </DropdownSubTriggerComponent>
              <DropdownPortalComponent>
                <DropdownSubContentComponent>
                  <DropdownItemComponent>
                    <Mail :size="16" />
                    <span>Email</span>
                  </DropdownItemComponent>
                  <DropdownItemComponent>
                    <MessageSquare :size="16" />
                    <span>Message</span>
                  </DropdownItemComponent>
                  <DropdownSeparatorComponent />
                  <DropdownItemComponent>
                    <PlusCircle :size="16" />
                    <span>More...</span>
                  </DropdownItemComponent>
                </DropdownSubContentComponent>
              </DropdownPortalComponent>
            </DropdownSubComponent>
            <DropdownItemComponent>
              <Plus :size="16" />
              <span>New Team</span>
              <DropdownShortcutComponent>⌘+T</DropdownShortcutComponent>
            </DropdownItemComponent>
          </DropdownGroupComponent>
          <DropdownSeparatorComponent />
          <DropdownItemComponent>
            <Github :size="16" />
            <span>GitHub</span>
          </DropdownItemComponent>
          <DropdownItemComponent>
            <LifeBuoy :size="16" />
            <span>Support</span>
          </DropdownItemComponent>
          <DropdownItemComponent disabled>
            <Cloud :size="16" />
            <span>API</span>
          </DropdownItemComponent>
          <DropdownSeparatorComponent />
          <DropdownItemComponent>
            <LogOut :size="16" />
            <span>Log out</span>
            <DropdownShortcutComponent>⇧⌘Q</DropdownShortcutComponent>
          </DropdownItemComponent>
        </DropdownContentComponent>
      </DropdownComponent>
    `
  })
} satisfies Meta<typeof DropdownComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
