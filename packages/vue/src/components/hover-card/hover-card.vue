<script setup lang="ts">
import { provide, ref, computed, watch, onUnmounted } from 'vue'
import { Primitive } from 'reka-ui'

export interface HoverCardProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
  delayMs?: number
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<HoverCardProps>(), {
  defaultOpen: false,
  // Without an explicit `undefined` default, an unbound `open` prop
  // (Boolean-typed, no default) resolves to `false` instead of
  // `undefined` per Vue's prop-resolution rules -- which would make
  // `isControlled` below permanently `true` even for plain, unbound
  // usage, pinning `isOpen` at `false` forever and breaking hover.
  open: undefined,
  disabled: false,
  delayMs: 300,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
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

let showTimeout: ReturnType<typeof setTimeout> | null = null
let hideTimeout: ReturnType<typeof setTimeout> | null = null

const show = () => {
  // Clear any pending hide
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  
  // If already showing, don't do anything
  if (isOpen.value) return
  
  // Clear any pending show
  if (showTimeout) {
    clearTimeout(showTimeout)
  }
  
  showTimeout = setTimeout(() => {
    setOpen(true)
    showTimeout = null
  }, props.delayMs)
}

const hide = () => {
  // Clear any pending show
  if (showTimeout) {
    clearTimeout(showTimeout)
    showTimeout = null
  }
  
  // If already hidden, don't do anything
  if (!isOpen.value) return
  
  // Clear any pending hide
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  
  hideTimeout = setTimeout(() => {
    setOpen(false)
    hideTimeout = null
  }, props.delayMs)
}

const debounceHide = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
}

// Watch for external changes
watch(
  () => props.open,
  (newValue) => {
    if (isControlled.value && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)

// Cleanup timeouts on unmount
onUnmounted(() => {
  if (showTimeout) clearTimeout(showTimeout)
  if (hideTimeout) clearTimeout(hideTimeout)
})

// Provide context to child components
provide('hoverCardContext', {
  isOpen,
  show,
  hide,
  debounceHide,
  disabled: computed(() => props.disabled)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-hover-card']"
    @mouseenter="debounceHide"
    @mouseleave="hide"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-hover-card {
  position: relative;
  display: inline-block;
}
</style>
