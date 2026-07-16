<script setup lang="ts">
import { provide, ref, computed, watch } from 'vue'
import { PopoverRoot } from 'reka-ui'

export interface ComboboxOption {
  value: string | number
  label: string
}

export interface ComboboxProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxProps>(), {
  defaultOpen: false,
  disabled: false,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  'valueChange': [option: ComboboxOption | null]
}>()

// Internal state management
const internalOpen = ref(props.defaultOpen)
const isControlled = props.open !== undefined
const isOpen = computed(() => (isControlled ? props.open : internalOpen.value))

const setOpen = (value: boolean) => {
  if (!isControlled) {
    internalOpen.value = value
  }
  emit('update:open', value)
}

const openPopover = () => setOpen(true)
const closePopover = () => setOpen(false)
const togglePopover = () => setOpen(!isOpen.value)

// Selected option state
const selectedOption = ref<ComboboxOption | null>(null)

const select = (option: ComboboxOption) => {
  selectedOption.value = option
  emit('valueChange', option)
  closePopover()
}

const getSelectedOption = () => selectedOption.value

// Watch for external changes
watch(
  () => props.open,
  (newValue) => {
    if (isControlled && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)

// Provide context to child components
provide('comboboxContext', {
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
    :class="['q-combobox']"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <slot />
  </PopoverRoot>
</template>

<style scoped>
.q-combobox {
  position: relative;
  display: inline-block;
}
</style>
