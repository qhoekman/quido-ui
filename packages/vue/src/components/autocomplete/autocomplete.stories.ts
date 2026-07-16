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
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
  },
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
  },
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
            placeholder="Search..."
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
