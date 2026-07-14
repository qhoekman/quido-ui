<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { X } from 'lucide-vue-next'

export interface ToastCloseProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ToastCloseProps>(), {
  asChild: false
})

const emit = defineEmits<{
  close: []
}>()

const handleClick = () => {
  emit('close')
}
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'button'"
    :as-child="asChild"
    class="q-toast-close"
    data-testid="qui-toast-close"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot>
      <X :size="16" />
    </slot>
  </Primitive>
</template>

<style scoped>
button {
  position: absolute;
  right: var(--spacing-4);
  top: var(--spacing-2);
  background-color: transparent;
  border: none;
  width: var(--spacing-4);
  height: var(--spacing-4);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-1);
  color: currentcolor;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

button:hover:not(:disabled) {
  opacity: 0.8;
}

button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
