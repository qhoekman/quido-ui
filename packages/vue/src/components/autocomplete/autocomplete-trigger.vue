<script setup lang="ts">
import { inject, ref, watch, computed } from 'vue'
import { PopoverTrigger, PopoverAnchor } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import InputComponent from '../input/input.vue'
import type { AutocompleteOption } from './autocomplete.vue'

export interface AutocompleteTriggerProps {
  searchValue?: string
  placeholder?: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AutocompleteTriggerProps>(), {
  searchValue: '',
  placeholder: 'Search...',
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:searchValue': [value: string]
  'valueChange': [value: string]
}>()

const autocompleteContext = inject<{
  isOpen: ReturnType<typeof computed<boolean>>
  open: () => void
  close: () => void
  toggle: () => void
  selectedOption: ReturnType<typeof computed<AutocompleteOption | null>>
  getSelectedOption: () => AutocompleteOption | null
}>('autocompleteContext')

if (!autocompleteContext) {
  throw new Error('AutocompleteTrigger must be used within Autocomplete')
}

const internalSearchValue = ref(props.searchValue)

// Watch for selected option changes
watch(
  () => autocompleteContext.selectedOption.value,
  (option) => {
    if (option) {
      internalSearchValue.value = option.label
      emit('update:searchValue', option.label)
      emit('valueChange', option.label)
    }
  },
  { immediate: true }
)

// Watch for external searchValue changes
watch(
  () => props.searchValue,
  (newValue) => {
    if (newValue !== undefined) {
      internalSearchValue.value = newValue
    }
  }
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  internalSearchValue.value = target.value
  emit('update:searchValue', target.value)
  emit('valueChange', target.value)
  autocompleteContext.open()
}

const handleClick = () => {
  autocompleteContext.toggle()
}
</script>

<template>
  <PopoverAnchor :as-child="asChild" :as="as" :class="['q-autocomplete-trigger']" v-bind="$attrs">
    <PopoverTrigger
      :as-child="true"
      :as="'div'"
      :class="['q-autocomplete-trigger-wrapper']"
      @click="handleClick"
    >
      <InputComponent
        v-model="internalSearchValue"
        :placeholder="placeholder"
        @input="handleInput"
        @click.stop
        class="q-autocomplete-trigger-input"
      />
      <ChevronDown :size="20" :class="['q-autocomplete-trigger-icon']" aria-hidden="true" />
    </PopoverTrigger>
  </PopoverAnchor>
</template>

<style scoped>
.q-autocomplete-trigger {
  display: inline-flex;
  flex: 1 1 auto;
  position: relative;
}

.q-autocomplete-trigger-wrapper {
  display: inline-flex;
  flex: 1 1 auto;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  cursor: pointer;
  padding: var(--spacing-3) var(--spacing-2);
  gap: var(--spacing-2);
}

.q-autocomplete-trigger-input {
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
}

.q-autocomplete-trigger-input :deep(input) {
  border: none;
  padding: 0;
  background-color: transparent;
}

.q-autocomplete-trigger-icon {
  flex-shrink: 0;
  color: var(--color-muted-fg);
  transition: transform 0.2s;
}

.q-autocomplete-trigger-wrapper[data-state='open'] .q-autocomplete-trigger-icon {
  transform: rotate(180deg);
}
</style>
