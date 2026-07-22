import AutocompleteComponent from '@/components/autocomplete/autocomplete.vue'
import AutocompleteTriggerComponent from '@/components/autocomplete/autocomplete-trigger.vue'
import AutocompleteContentComponent from '@/components/autocomplete/autocomplete-content.vue'
import AutocompleteItemComponent from '@/components/autocomplete/autocomplete-item.vue'
import AutocompleteGroupComponent from '@/components/autocomplete/autocomplete-group.vue'
import AutocompleteLabelComponent from '@/components/autocomplete/autocomplete-label.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, computed } from 'vue'
import type { AutocompleteOption } from '@/components/autocomplete/autocomplete.vue'

const data = [
  { id: 1, title: 'United States' },
  { id: 2, title: 'Canada' },
  { id: 3, title: 'United Kingdom' },
  { id: 4, title: 'Germany' },
  { id: 5, title: 'France' },
  { id: 6, title: 'Netherlands' },
  { id: 7, title: 'Belgium' },
  { id: 8, title: 'Spain' },
  { id: 9, title: 'Italy' },
  { id: 10, title: 'Portugal' },
  { id: 11, title: 'Sweden' },
  { id: 12, title: 'Norway' },
  { id: 13, title: 'Denmark' },
  { id: 14, title: 'Finland' },
  { id: 15, title: 'Ireland' },
  { id: 16, title: 'Switzerland' },
  { id: 17, title: 'Austria' },
  { id: 18, title: 'Poland' },
  { id: 19, title: 'Japan' },
  { id: 20, title: 'Australia' },
]

const meta = {
  title: 'Components/Data Entry/Autocomplete',
  component: AutocompleteComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
    open: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    defaultOpen: false,
    disabled: false,
  },
  render: (args: any) => ({
    components: {
      AutocompleteComponent,
      AutocompleteTriggerComponent,
      AutocompleteContentComponent,
      AutocompleteItemComponent,
      AutocompleteGroupComponent,
      AutocompleteLabelComponent,
    },
    setup() {
      const searchValue = ref('')
      const options = ref<AutocompleteOption[]>(
        data.map((item) => ({
          value: item.id,
          label: item.title,
        }))
      )

      const filteredOptions = computed(() => {
        if (!searchValue.value) {
          return options.value
        }
        return options.value.filter((option) =>
          option.label.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      })

      const handleSearchChange = (value: string) => {
        searchValue.value = value
      }

      const handleValueChange = (option: AutocompleteOption | null) => {
        if (option) {
          searchValue.value = option.label
        }
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
        <AutocompleteComponent v-bind="args" @valueChange="handleValueChange">
          <AutocompleteTriggerComponent
            :search-value="searchValue"
            placeholder="Search countries..."
            @valueChange="handleSearchChange"
          />
          <AutocompleteContentComponent>
            <AutocompleteGroupComponent>
              <AutocompleteItemComponent
                v-for="option in filteredOptions"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </AutocompleteGroupComponent>
          </AutocompleteContentComponent>
        </AutocompleteComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof AutocompleteComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      AutocompleteComponent,
      AutocompleteTriggerComponent,
      AutocompleteContentComponent,
      AutocompleteItemComponent,
      AutocompleteGroupComponent,
      AutocompleteLabelComponent,
    },
    setup() {
      const searchValue = ref('')
      const options = ref<AutocompleteOption[]>(
        data.map((item) => ({
          value: item.id,
          label: item.title,
        }))
      )

      const filteredOptions = computed(() => {
        if (!searchValue.value) {
          return options.value
        }
        return options.value.filter((option) =>
          option.label.toLowerCase().includes(searchValue.value.toLowerCase())
        )
      })

      const handleSearchChange = (value: string) => {
        searchValue.value = value
      }

      const handleValueChange = (option: AutocompleteOption | null) => {
        if (option) {
          searchValue.value = option.label
        }
      }

      return {
        searchValue,
        filteredOptions,
        handleSearchChange,
        handleValueChange,
      }
    },
    template: `
      <div style="max-width: 320px;">
        <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Country</label>
        <AutocompleteComponent @valueChange="handleValueChange">
          <AutocompleteTriggerComponent
            :search-value="searchValue"
            placeholder="e.g. Netherlands"
            @valueChange="handleSearchChange"
          />
          <AutocompleteContentComponent>
            <AutocompleteGroupComponent>
              <AutocompleteItemComponent
                v-for="option in filteredOptions"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </AutocompleteGroupComponent>
          </AutocompleteContentComponent>
        </AutocompleteComponent>
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Used for billing address and tax calculation.</p>
      </div>
    `,
  })
}
