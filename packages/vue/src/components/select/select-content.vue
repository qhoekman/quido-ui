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
    :data-position="position"
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

<style>
/*
 * Not scoped: SelectContent teleports via reka-ui Presence/Portal, so
 * Vue scoped data-v-* attributes never land on the rendered nodes.
 */
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
  box-shadow: var(--box-shadow-md);
}

.q-select-content[data-state='open'] {
  animation: q-select-fadeIn 0.15s ease-out, q-select-zoomIn 0.15s ease-out;
}

.q-select-content[data-state='closed'] {
  animation: q-select-fadeOut 0.15s ease-in, q-select-zoomOut 0.15s ease-in;
}

.q-select-content[data-side='bottom'] {
  animation: q-select-slideInFromTop 0.15s ease-out;
}

.q-select-content[data-side='left'] {
  animation: q-select-slideInFromRight 0.15s ease-out;
}

.q-select-content[data-side='right'] {
  animation: q-select-slideInFromLeft 0.15s ease-out;
}

.q-select-content[data-side='top'] {
  animation: q-select-slideInFromBottom 0.15s ease-out;
}

.q-select-viewport {
  padding: var(--spacing-1);
}

.q-select-content[data-position='popper'] .q-select-viewport {
  width: 100%;
  min-width: var(--reka-select-trigger-width);
}

.q-select-scroll-button {
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
}

@keyframes q-select-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes q-select-fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes q-select-zoomIn {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

@keyframes q-select-zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
}

@keyframes q-select-slideInFromTop {
  from {
    transform: translateY(calc(-1 * var(--spacing-2)));
  }
  to {
    transform: translateY(0);
  }
}

@keyframes q-select-slideInFromRight {
  from {
    transform: translateX(var(--spacing-2));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes q-select-slideInFromLeft {
  from {
    transform: translateX(calc(-1 * var(--spacing-2)));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes q-select-slideInFromBottom {
  from {
    transform: translateY(var(--spacing-2));
  }
  to {
    transform: translateY(0);
  }
}
</style>
