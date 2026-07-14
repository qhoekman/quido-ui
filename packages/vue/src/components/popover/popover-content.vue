<script setup lang="ts">
import { computed } from 'vue'
import { PopoverContent as RekaPopoverContent, PopoverPortal } from 'reka-ui'

export interface PopoverContentProps {
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<PopoverContentProps>(), {
  sideOffset: 4,
  align: 'center',
  side: 'bottom',
  forceMount: false,
  asChild: false,
  as: 'div'
})

const contentClasses = computed(() => [
  'q-popover-content'
])
</script>

<template>
  <PopoverPortal>
    <RekaPopoverContent
      :side-offset="sideOffset"
      :align="align"
      :side="side"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="contentClasses"
      v-bind="$attrs"
    >
      <slot />
    </RekaPopoverContent>
  </PopoverPortal>
</template>

<style scoped>
.q-popover-content {
  color: var(--color-popover-fg);
  z-index: var(--z-index-50);
  width: var(--columns-xs);
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  padding: var(--spacing-4);
  box-shadow: var(--box-shadow-md);
  outline: none;
}

.q-popover-content[data-state="open"][data-side="bottom"] {
  animation: fadeInZoomInSlideFromTop 0.15s ease-out;
}

.q-popover-content[data-state="open"][data-side="left"] {
  animation: fadeInZoomInSlideFromRight 0.15s ease-out;
}

.q-popover-content[data-state="open"][data-side="right"] {
  animation: fadeInZoomInSlideFromLeft 0.15s ease-out;
}

.q-popover-content[data-state="open"][data-side="top"] {
  animation: fadeInZoomInSlideFromBottom 0.15s ease-out;
}

.q-popover-content[data-state="closed"][data-side="bottom"] {
  animation: fadeOutZoomOutSlideToTop 0.15s ease-in;
}

.q-popover-content[data-state="closed"][data-side="left"] {
  animation: fadeOutZoomOutSlideToRight 0.15s ease-in;
}

.q-popover-content[data-state="closed"][data-side="right"] {
  animation: fadeOutZoomOutSlideToLeft 0.15s ease-in;
}

.q-popover-content[data-state="closed"][data-side="top"] {
  animation: fadeOutZoomOutSlideToBottom 0.15s ease-in;
}

@keyframes fadeInZoomInSlideFromTop {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fadeInZoomInSlideFromRight {
  from {
    opacity: 0;
    transform: scale(0.95) translateX(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

@keyframes fadeInZoomInSlideFromLeft {
  from {
    opacity: 0;
    transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

@keyframes fadeInZoomInSlideFromBottom {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fadeOutZoomOutSlideToTop {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
  }
}

@keyframes fadeOutZoomOutSlideToRight {
  from {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateX(var(--spacing-2));
  }
}

@keyframes fadeOutZoomOutSlideToLeft {
  from {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
  }
}

@keyframes fadeOutZoomOutSlideToBottom {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(var(--spacing-2));
  }
}
</style>
