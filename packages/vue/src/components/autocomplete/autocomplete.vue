<script setup lang="ts">
import { provide, ref, computed, watch } from 'vue'
import { PopoverRoot } from 'reka-ui'
import { Primitive } from 'reka-ui'

export interface AutocompleteOption {
  value: string | number
  label: string
}

export interface AutocompleteProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AutocompleteProps>(), {
  defaultOpen: false,
  // Without an explicit `undefined` default, an unbound `open` prop
  // (Boolean-typed, no default) resolves to `false` instead of
  // `undefined` per Vue's prop-resolution rules -- which would make
  // `isControlled` below permanently `true` even for plain, unbound
  // usage, pinning `isOpen` at `false` forever and breaking the popover
  // entirely (typing would never show results).
  open: undefined,
  disabled: false,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  'valueChange': [option: AutocompleteOption | null]
}>()

// Internal state management
const internalOpen = ref(props.defaultOpen)
const isControlled = computed(() => props.open !== undefined)
const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value))

const setOpen = (value: boolean) => {
  if (!isControlled.value) {
    internalOpen.value = value
  }
  emit('update:open', value)
}

const openPopover = () => setOpen(true)
const closePopover = () => setOpen(false)
const togglePopover = () => setOpen(!isOpen.value)

// Selected option state
const selectedOption = ref<AutocompleteOption | null>(null)

const select = (option: AutocompleteOption) => {
  selectedOption.value = option
  emit('valueChange', option)
  closePopover()
}

const getSelectedOption = () => selectedOption.value

// Watch for external changes
watch(
  () => props.open,
  (newValue) => {
    if (isControlled.value && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)

// Provide context to child components
provide('autocompleteContext', {
  isOpen,
  open: openPopover,
  close: closePopover,
  toggle: togglePopover,
  disabled: computed(() => props.disabled),
  selectedOption: computed(() => selectedOption.value),
  select,
  getSelectedOption
})
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :disabled="disabled"
    :class="['q-autocomplete']"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <slot />
  </PopoverRoot>
</template>

<style scoped>
.q-autocomplete {
  position: relative;
  display: inline-block;
}
</style>
