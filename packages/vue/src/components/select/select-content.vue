<script setup lang="ts">
import { SelectContent as SelectContentPrimitive, SelectViewport, SelectScrollUpButton, SelectScrollDownButton } from 'reka-ui'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

export interface SelectContentProps {
  position?: 'popper' | 'item-aligned'
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectContentProps>(), {
  position: 'popper',
  asChild: false,
  as: 'div',
})
</script>

<template>
  <SelectContentPrimitive
    :as-child="asChild"
    :as="as"
    :position="position"
    :class="['q-select-content']"
    v-bind="$attrs"
  >
    <SelectScrollUpButton :class="['q-select-scroll-button']">
      <ChevronUp :size="16" />
    </SelectScrollUpButton>
    <SelectViewport :class="['q-select-viewport']">
      <slot />
    </SelectViewport>
    <SelectScrollDownButton :class="['q-select-scroll-button']">
      <ChevronDown :size="16" />
    </SelectScrollDownButton>
  </SelectContentPrimitive>
</template>

<style scoped>
.q-select-content {
  color: var(--color-popover-fg);
  z-index: var(--z-index-100);
  position: relative;
  max-height: 24rem;
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  box-shadow: var(--box-shadow-md);
}

.q-select-content[data-state='open'] {
  animation: fadeIn 0.15s ease-out, zoomIn 0.15s ease-out;
}

.q-select-content[data-state='closed'] {
  animation: fadeOut 0.15s ease-in, zoomOut 0.15s ease-in;
}

.q-select-content[data-side='bottom'] {
  animation: slideInFromTop 0.15s ease-out;
}

.q-select-content[data-side='left'] {
  animation: slideInFromRight 0.15s ease-out;
}

.q-select-content[data-side='right'] {
  animation: slideInFromLeft 0.15s ease-out;
}

.q-select-content[data-side='top'] {
  animation: slideInFromBottom 0.15s ease-out;
}

.q-select-viewport {
  padding: var(--spacing-1);
}

.q-select-scroll-button {
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(calc(-1 * var(--spacing-2)));
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(var(--spacing-2));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(calc(-1 * var(--spacing-2)));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(var(--spacing-2));
  }
  to {
    transform: translateY(0);
  }
}
</style>
