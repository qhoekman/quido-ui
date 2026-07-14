<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { PopoverRoot } from 'reka-ui'

export interface PopoverProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  dir?: 'ltr' | 'rtl'
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<PopoverProps>(), {
  defaultOpen: false,
  modal: true,
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

// Watch for external changes
watch(
  () => props.open,
  (newValue) => {
    if (isControlled && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :modal="modal"
    :dir="dir"
    :class="['q-popover']"
    data-testid="qui-popover"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <slot />
  </PopoverRoot>
</template>

<style scoped>
.q-popover {
  position: relative;
}
</style>
