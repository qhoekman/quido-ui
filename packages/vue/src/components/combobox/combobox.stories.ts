import ComboboxComponent from '@/components/combobox/combobox.vue'
import ComboboxTriggerComponent from '@/components/combobox/combobox-trigger.vue'
import ComboboxContentComponent from '@/components/combobox/combobox-content.vue'
import ComboboxItemComponent from '@/components/combobox/combobox-item.vue'
import ComboboxGroupComponent from '@/components/combobox/combobox-group.vue'
import ComboboxLabelComponent from '@/components/combobox/combobox-label.vue'
import ComboboxSearchboxComponent from '@/components/combobox/combobox-searchbox.vue'
import ComboboxSearchComponent from '@/components/combobox/combobox-search.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, computed } from 'vue'
import type { ComboboxOption } from '@/components/combobox/combobox.vue'

const options = [
  { value: 'next', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const meta = {
  title: 'Components/Data Entry/Combobox',
  component: ComboboxComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
    open: {
      control: false,
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    defaultOpen: false,
    disabled: false,
    open: undefined,
  },
  render: (args: any) => ({
    components: {
      ComboboxComponent,
      ComboboxTriggerComponent,
      ComboboxContentComponent,
      ComboboxItemComponent,
      ComboboxGroupComponent,
      ComboboxLabelComponent,
      ComboboxSearchboxComponent,
      ComboboxSearchComponent,
    },
    setup() {
      const searchValue = ref('')
      const optionsList = ref<ComboboxOption[]>(options)

      const filteredOptions = computed(() => {
        if (!searchValue.value) {
          return optionsList.value
        }
        return optionsList.value.filter((option) =>
          option.label.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      })

      const handleSearchChange = (value: string) => {
        searchValue.value = value
      }

      const handleValueChange = (option: ComboboxOption | null) => {
        console.log('Selected option:', option)
      }

      return {
        args,
        searchValue,
        filteredOptions,
        handleSearchChange,
        handleValueChange,
      }
    },
    template: `
      <div style="max-width: var(--spacing-96); padding: var(--spacing-4);">
        <ComboboxComponent v-bind="args" @valueChange="handleValueChange">
          <ComboboxTriggerComponent placeholder="Select a framework" />
          <ComboboxContentComponent>
            <ComboboxSearchboxComponent>
              <ComboboxSearchComponent
                v-model="searchValue"
                placeholder="Search..."
                @update:modelValue="handleSearchChange"
              />
            </ComboboxSearchboxComponent>
            <ComboboxGroupComponent>
              <ComboboxItemComponent
                v-for="option in filteredOptions"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </ComboboxGroupComponent>
          </ComboboxContentComponent>
        </ComboboxComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof ComboboxComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      ComboboxComponent,
      ComboboxTriggerComponent,
      ComboboxContentComponent,
      ComboboxItemComponent,
      ComboboxGroupComponent,
      ComboboxSearchboxComponent,
      ComboboxSearchComponent,
    },
    setup() {
      const searchValue = ref('')
      const assignees = [
        { value: 'jane', label: 'Jane Doe' },
        { value: 'marcus', label: 'Marcus Lee' },
        { value: 'priya', label: 'Priya Nair' },
        { value: 'alex', label: 'Alex Kim' },
      ]

      const filteredOptions = computed(() => {
        if (!searchValue.value) {
          return assignees
        }
        return assignees.filter((option) =>
          option.label.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      })

      const handleSearchChange = (value: string) => {
        searchValue.value = value
      }

      return { searchValue, filteredOptions, handleSearchChange }
    },
    template: `
      <div style="max-width: 320px; display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-3) var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);">
        <div>
          <div style="font-weight: var(--font-weight-semibold);">Fix login redirect bug</div>
          <div style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">#412 · Bug</div>
        </div>
        <ComboboxComponent>
          <ComboboxTriggerComponent placeholder="Assign to" style="width: 160px;" />
          <ComboboxContentComponent>
            <ComboboxSearchboxComponent>
              <ComboboxSearchComponent
                v-model="searchValue"
                placeholder="Search people..."
                @update:modelValue="handleSearchChange"
              />
            </ComboboxSearchboxComponent>
            <ComboboxGroupComponent>
              <ComboboxItemComponent
                v-for="option in filteredOptions"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </ComboboxGroupComponent>
          </ComboboxContentComponent>
        </ComboboxComponent>
      </div>
    `,
  }),
}
