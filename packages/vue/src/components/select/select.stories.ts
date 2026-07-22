import SelectComponent from '@/components/select/select.vue'
import SelectTriggerComponent from '@/components/select/select-trigger.vue'
import SelectContentComponent from '@/components/select/select-content.vue'
import SelectItemComponent from '@/components/select/select-item.vue'
import SelectValueComponent from '@/components/select/select-value.vue'
import SelectLabelComponent from '@/components/select/select-label.vue'
import SelectGroupComponent from '@/components/select/select-group.vue'
import SelectSeparatorComponent from '@/components/select/select-separator.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Select',
  component: SelectComponent,
  argTypes: {
    value: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    open: {
      control: false,
    },
    defaultOpen: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    required: false,
    defaultOpen: false,
    open: undefined,
  },
  render: (args: any) => ({
    components: {
      SelectComponent,
      SelectTriggerComponent,
      SelectContentComponent,
      SelectItemComponent,
      SelectValueComponent,
      SelectLabelComponent,
      SelectGroupComponent,
      SelectSeparatorComponent,
    },
    setup() {
      const selectedValue = ref<string | undefined>(args.value || args.defaultValue)

      const handleValueChange = (value: string | undefined) => {
        selectedValue.value = value
        console.log('Selected value:', value)
      }

      return {
        args,
        selectedValue,
        handleValueChange,
      }
    },
    template: `
      <div style="max-width: var(--spacing-96); padding: var(--spacing-4);">
        <SelectComponent v-bind="args" v-model:value="selectedValue" @valueChange="handleValueChange">
          <SelectTriggerComponent>
            <SelectValueComponent placeholder="Select a theme" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectGroupComponent>
              <SelectLabelComponent>Theme</SelectLabelComponent>
              <SelectItemComponent value="light">Light</SelectItemComponent>
              <SelectItemComponent value="dark">Dark</SelectItemComponent>
              <SelectItemComponent value="system">System</SelectItemComponent>
            </SelectGroupComponent>
          </SelectContentComponent>
        </SelectComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof SelectComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'dark',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithGroups: Story = {
  render: (args: any) => ({
    components: {
      SelectComponent,
      SelectTriggerComponent,
      SelectContentComponent,
      SelectItemComponent,
      SelectValueComponent,
      SelectLabelComponent,
      SelectGroupComponent,
      SelectSeparatorComponent,
    },
    setup() {
      const selectedValue = ref<string | undefined>(args.value || args.defaultValue)

      const handleValueChange = (value: string | undefined) => {
        selectedValue.value = value
        console.log('Selected value:', value)
      }

      return {
        args,
        selectedValue,
        handleValueChange,
      }
    },
    template: `
      <div style="max-width: var(--spacing-96); padding: var(--spacing-4);">
        <SelectComponent v-bind="args" v-model:value="selectedValue" @valueChange="handleValueChange">
          <SelectTriggerComponent>
            <SelectValueComponent placeholder="Select a fruit" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectGroupComponent>
              <SelectLabelComponent>Fruits</SelectLabelComponent>
              <SelectItemComponent value="apple">Apple</SelectItemComponent>
              <SelectItemComponent value="banana">Banana</SelectItemComponent>
              <SelectItemComponent value="orange">Orange</SelectItemComponent>
            </SelectGroupComponent>
            <SelectSeparatorComponent />
            <SelectGroupComponent>
              <SelectLabelComponent>Vegetables</SelectLabelComponent>
              <SelectItemComponent value="carrot">Carrot</SelectItemComponent>
              <SelectItemComponent value="broccoli">Broccoli</SelectItemComponent>
              <SelectItemComponent value="spinach">Spinach</SelectItemComponent>
            </SelectGroupComponent>
          </SelectContentComponent>
        </SelectComponent>
      </div>
    `,
  }),
}

export const Composition: Story = {
  render: () => ({
    components: {
      SelectComponent,
      SelectTriggerComponent,
      SelectContentComponent,
      SelectItemComponent,
      SelectValueComponent,
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem;">
        <h3 style="margin: 0;">Sprint Backlog</h3>
        <SelectComponent default-value="priority">
          <SelectTriggerComponent style="width: 10rem;">
            <SelectValueComponent placeholder="Sort by" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectItemComponent value="priority">Priority</SelectItemComponent>
            <SelectItemComponent value="due-date">Due date</SelectItemComponent>
            <SelectItemComponent value="assignee">Assignee</SelectItemComponent>
          </SelectContentComponent>
        </SelectComponent>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: (args: any) => ({
    components: {
      SelectComponent,
      SelectTriggerComponent,
      SelectContentComponent,
      SelectItemComponent,
      SelectValueComponent,
    },
    setup() {
      const selectedValue1 = ref<string | undefined>()
      const selectedValue2 = ref<string | undefined>()
      const selectedValue3 = ref<string | undefined>()

      return {
        args,
        selectedValue1,
        selectedValue2,
        selectedValue3,
      }
    },
    template: `
      <div style="max-width: var(--spacing-96); padding: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
        <SelectComponent v-bind="args" v-model:value="selectedValue1">
          <SelectTriggerComponent size="sm">
            <SelectValueComponent placeholder="Small" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectItemComponent value="light">Light</SelectItemComponent>
            <SelectItemComponent value="dark">Dark</SelectItemComponent>
            <SelectItemComponent value="system">System</SelectItemComponent>
          </SelectContentComponent>
        </SelectComponent>
        
        <SelectComponent v-bind="args" v-model:value="selectedValue2">
          <SelectTriggerComponent size="md">
            <SelectValueComponent placeholder="Medium" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectItemComponent value="light">Light</SelectItemComponent>
            <SelectItemComponent value="dark">Dark</SelectItemComponent>
            <SelectItemComponent value="system">System</SelectItemComponent>
          </SelectContentComponent>
        </SelectComponent>
        
        <SelectComponent v-bind="args" v-model:value="selectedValue3">
          <SelectTriggerComponent size="lg">
            <SelectValueComponent placeholder="Large" />
          </SelectTriggerComponent>
          <SelectContentComponent>
            <SelectItemComponent value="light">Light</SelectItemComponent>
            <SelectItemComponent value="dark">Dark</SelectItemComponent>
            <SelectItemComponent value="system">System</SelectItemComponent>
          </SelectContentComponent>
        </SelectComponent>
      </div>
    `,
  }),
}
