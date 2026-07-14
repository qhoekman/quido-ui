<script setup lang="ts">
import { provide, ref, watch, computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ActionSheetProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  dismissible?: boolean
  shouldScaleBackground?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetProps>(), {
  defaultOpen: false,
  modal: true,
  dismissible: true,
  shouldScaleBackground: true,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
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

const open = () => setOpen(true)
const close = () => setOpen(false)
const toggle = () => setOpen(!isOpen.value)

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
provide('actionSheetContext', {
  isOpen,
  open,
  close,
  toggle,
  modal: computed(() => props.modal),
  dismissible: computed(() => props.dismissible),
  shouldScaleBackground: computed(() => props.shouldScaleBackground)
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="['q-action-sheet']" v-bind="$attrs">
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet {
  position: relative;
}
</style>
