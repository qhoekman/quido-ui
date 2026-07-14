<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ComboboxSearchProps {
  modelValue?: string
  placeholder?: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxSearchProps>(), {
  modelValue: '',
  placeholder: 'Search...',
  asChild: false,
  as: 'input'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleKeyDown = (event: KeyboardEvent) => {
  event.stopPropagation()
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-combobox-search']"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
    @keydown="handleKeyDown"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-combobox-search {
  display: inline-flex;
  flex: 1 1 auto;
  border: none;
  background-color: transparent;
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  outline: none;
  width: 100%;
}
</style>
