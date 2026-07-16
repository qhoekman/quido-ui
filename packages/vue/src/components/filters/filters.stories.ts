import FiltersForm from './filters-form.vue'
import FilterCheckbox from './filter-checkbox.vue'
import FilterRange from './filter-range.vue'
import FilterRadioGroup from './filter-radio-group.vue'
import FilterRadioGroupItem from './filter-radio-group-item.vue'
import FilterClearButton from './filter-clear-button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Ecommerce/Components/Filters',
  component: FiltersForm,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    labelPrefix: {
      control: 'text',
      description: "Prefix for FilterRange labels (e.g., '€', '$')"
    },
    min: {
      control: 'number',
      description: 'Minimum value for FilterRange'
    },
    max: {
      control: 'number',
      description: 'Maximum value for FilterRange'
    },
    step: {
      control: 'number',
      description: 'Step value for FilterRange'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable state for filter components'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Variant for FilterClearButton'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Size for FilterClearButton'
    }
  },
  args: {
    labelPrefix: '€',
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    variant: 'primary',
    size: 'md'
  }
} satisfies Meta<typeof FiltersForm>

export default meta

type Story = StoryObj<typeof meta>

const filters = {
  category: ['shoes', 'clothes', 'accessories', 'electronics'],
  brand: ['nike', 'adidas', 'puma', 'reebok'],
  size: ['s', 'm', 'l', 'xl']
}

export const Default: Story = {
  render: (args) => ({
    components: {
      FiltersForm,
      FilterCheckbox,
      FilterRange,
      FilterRadioGroup,
      FilterRadioGroupItem,
      FilterClearButton
    },
    setup() {
      return { args, filters }
    },
    template: `
      <div style="max-width: var(--spacing-64); padding: var(--spacing-4);">
        <h3 style="margin-bottom: var(--spacing-4);">Categories</h3>
        <FiltersForm>
          <FilterCheckbox
            v-for="category in filters.category"
            :key="'category.' + category"
            :name="'category.' + category"
            :disabled="args.disabled"
          >
            {{ category }}
          </FilterCheckbox>
        </FiltersForm>
        
        <h3 style="margin-top: var(--spacing-8); margin-bottom: var(--spacing-4);">Price</h3>
        <FilterRange
          name="price"
          :min="args.min"
          :max="args.max"
          :step="args.step"
          :label-prefix="args.labelPrefix"
          :disabled="args.disabled"
        />
        
        <h3 style="margin-top: var(--spacing-8); margin-bottom: var(--spacing-4);">Brand</h3>
        <FiltersForm>
          <FilterRadioGroup name="brand">
            <FilterRadioGroupItem
              v-for="brand in filters.brand"
              :key="'brand.' + brand"
              :id="'brand.' + brand"
              html-for="brand"
              :value="brand"
              :disabled="args.disabled"
            >
              {{ brand }}
            </FilterRadioGroupItem>
          </FilterRadioGroup>
        </FiltersForm>
        
        <FilterClearButton
          style="width: 100%; margin-top: var(--spacing-8);"
          :variant="args.variant"
          :size="args.size"
          :disabled="args.disabled"
        >
          Clear all filters
        </FilterClearButton>
      </div>
    `
  })
}
