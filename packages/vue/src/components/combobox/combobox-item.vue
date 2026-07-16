<script setup lang="ts">
import { inject, computed } from 'vue'
import { Primitive } from 'reka-ui'
import type { ComboboxOption } from './combobox.vue'

export interface ComboboxItemProps {
  value: string | number
  label: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxItemProps>(), {
  asChild: false,
  as: 'div'
})

const comboboxContext = inject<{
  selectedOption: ReturnType<typeof computed<ComboboxOption | null>>
  select: (option: ComboboxOption) => void
}>('comboboxContext')

if (!comboboxContext) {
  throw new Error('ComboboxItem must be used within Combobox')
}

const isSelected = computed(() => {
  const selected = comboboxContext.selectedOption.value
  return selected?.value === props.value
})

const handleClick = () => {
  comboboxContext.select({
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
    :class="['q-combobox-item']"
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
.q-combobox-item {
  padding: var(--spacing-2) var(--spacing-4);
  cursor: pointer;
  transition: background-color 0.2s;
}

.q-combobox-item:hover {
  background-color: var(--color-muted);
}

.q-combobox-item[aria-selected='true'] {
  background-color: hsl(from var(--color-primary) h s l / 33%);
}

.q-combobox-item:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}
</style>
