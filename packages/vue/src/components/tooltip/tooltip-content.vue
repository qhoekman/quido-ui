<script setup lang="ts">
import { computed } from 'vue'
import { TooltipContent as RekaTooltipContent, TooltipPortal } from 'reka-ui'

export interface TooltipContentProps {
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  alignOffset?: number
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
  align: 'center',
  side: 'bottom',
  alignOffset: 0,
  forceMount: false,
  asChild: false,
  as: 'div'
})

const contentClasses = computed(() => [
  'q-tooltip-content'
])
</script>

<template>
  <TooltipPortal>
    <RekaTooltipContent
      :side-offset="sideOffset"
      :align="align"
      :side="side"
      :align-offset="alignOffset"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="contentClasses"
      v-bind="$attrs"
    >
      <slot />
    </RekaTooltipContent>
  </TooltipPortal>
</template>

<style>
/*
 * Not scoped: TooltipContent renders via reka-ui's internal
 * Teleport/Presence machinery, whose actual DOM output never receives
 * Vue's scoped-CSS data-v-* attribute (confirmed via direct DOM
 * inspection). A scoped selector here would silently never match.
 */
.q-tooltip-content {
  z-index: var(--z-index-50);
  overflow: hidden;
  border-radius: var(--border-radius-md);
  background-color: var(--color-tooltip);
  color: var(--color-tooltip-fg);
  padding: var(--spacing-1-5) var(--spacing-3);
  font-size: var(--font-size-xs);
  box-shadow: var(--box-shadow-default);
  animation: fadeInZoomIn 0.15s ease-out;
}

.q-tooltip-content[data-state="closed"] {
  animation: fadeOutZoomOut 0.15s ease-out;
}

.q-tooltip-content[data-side="bottom"] {
  animation: slideInFromTop 0.15s ease-out;
}

.q-tooltip-content[data-side="left"] {
  animation: slideInFromRight 0.15s ease-out;
}

.q-tooltip-content[data-side="right"] {
  animation: slideInFromLeft 0.15s ease-out;
}

.q-tooltip-content[data-side="top"] {
  animation: slideInFromBottom 0.15s ease-out;
}

.q-tooltip-content[data-state="closed"][data-side="bottom"],
.q-tooltip-content[data-state="closed"][data-side="left"],
.q-tooltip-content[data-state="closed"][data-side="right"],
.q-tooltip-content[data-state="closed"][data-side="top"] {
  animation: fadeOutZoomOut 0.15s ease-out;
}

@keyframes fadeInZoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOutZoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: scale(0.95) translateX(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
