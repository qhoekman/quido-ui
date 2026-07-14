<script setup lang="ts">
import { inject, computed } from 'vue'
import { Primitive } from 'reka-ui'
import type { AutocompleteOption } from './autocomplete.vue'

export interface AutocompleteItemProps {
  value: string | number
  label: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AutocompleteItemProps>(), {
  asChild: false,
  as: 'div'
})

const autocompleteContext = inject<{
  isOpen: ReturnType<typeof computed<boolean>>
  selectedOption: ReturnType<typeof computed<AutocompleteOption | null>>
  select: (option: AutocompleteOption) => void
}>('autocompleteContext')

if (!autocompleteContext) {
  throw new Error('AutocompleteItem must be used within Autocomplete')
}

const isSelected = computed(() => {
  const selected = autocompleteContext.selectedOption.value
  return selected?.value === props.value
})

const handleClick = () => {
  autocompleteContext.select({
    value: props.value,
    label: props.label
  })
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick()
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    const nextSibling = (event.target as HTMLElement).nextElementSibling as HTMLElement
    if (nextSibling) {
      nextSibling.focus()
    }
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    const previousSibling = (event.target as HTMLElement).previousElementSibling as HTMLElement
    if (previousSibling) {
      previousSibling.focus()
    }
  }
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-autocomplete-item']"
    role="option"
    :aria-selected="isSelected"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeyDown"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </Primitive>
</template>

<style scoped>
.q-autocomplete-item {
  padding: var(--spacing-2) var(--spacing-4);
  cursor: pointer;
  transition: background-color 0.2s;
}

.q-autocomplete-item:hover {
  background-color: var(--color-muted);
}

.q-autocomplete-item[aria-selected='true'] {
  background-color: hsl(from var(--color-primary) h s l / 33%);
}

.q-autocomplete-item:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
