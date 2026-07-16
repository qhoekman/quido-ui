<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TooltipRoot } from 'reka-ui'

export interface TooltipProps {
  defaultOpen?: boolean
  open?: boolean
  delayDuration?: number
  disableHoverableContent?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
  defaultOpen: false,
  // Without an explicit `undefined` default, an unbound `open` prop
  // (Boolean-typed, no default) resolves to `false` instead of
  // `undefined` per Vue's prop-resolution rules -- which would make
  // `isControlled` below permanently `true` even for plain, unbound
  // usage, pinning `isOpen` at `false` forever and breaking hover.
  open: undefined,
  delayDuration: 700,
  disableHoverableContent: false,
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

// Watch for external changes
watch(
  () => props.open,
  (newValue) => {
    if (isControlled.value && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)
</script>

<template>
  <TooltipRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :delay-duration="delayDuration"
    :disable-hoverable-content="disableHoverableContent"
    :class="['q-tooltip']"
    data-testid="qui-tooltip"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <slot />
  </TooltipRoot>
</template>

<style scoped>
.q-tooltip {
  display: inline-flex;
}
</style>
