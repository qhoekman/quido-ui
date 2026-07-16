<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from 'reka-ui'

export interface ScrollAreaProps {
  type?: 'auto' | 'always' | 'scroll' | 'hover'
  asChild?: boolean
}

const props = withDefaults(defineProps<ScrollAreaProps>(), {
  type: 'auto',
  asChild: false
})
</script>

<template>
  <ScrollAreaRoot
    :type="type"
    :as-child="asChild"
    class="q-scroll-area"
    v-bind="$attrs"
  >
    <ScrollAreaViewport class="q-scroll-area-viewport">
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      orientation="vertical"
      class="q-scroll-area-scrollbar q-scroll-area-scrollbar--vertical"
    >
      <ScrollAreaThumb class="q-scroll-area-thumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      orientation="horizontal"
      class="q-scroll-area-scrollbar q-scroll-area-scrollbar--horizontal"
    >
      <ScrollAreaThumb class="q-scroll-area-thumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style scoped>
.q-scroll-area {
  position: relative;
  overflow: hidden;
}

/*
 * reka-ui's ScrollAreaViewport/Scrollbar/Thumb render multi-root Fragments
 * with inheritAttrs: false, so Vue's scoped-CSS data-v-* attribute never
 * lands on the actual DOM nodes. Plain scoped selectors below silently
 * never match, so these must use :deep() to compile to an ancestor-scoped
 * descendant selector instead.
 */
:deep(.q-scroll-area-viewport) {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

:deep(.q-scroll-area-scrollbar) {
  display: flex;
  touch-action: none;
  user-select: none;
  transition: colors 0.3s;
  padding: 1px;
}

:deep(.q-scroll-area-scrollbar--vertical) {
  height: 100%;
  width: var(--spacing-2-5);
  border-left: var(--border-width-default) solid transparent;
}

:deep(.q-scroll-area-scrollbar--horizontal) {
  height: var(--spacing-2-5);
  flex-direction: column;
  border-top: var(--border-width-default) solid transparent;
}

:deep(.q-scroll-area-thumb) {
  position: relative;
  flex: 1 1 0%;
  border-radius: var(--border-radius-full);
  background-color: var(--color-border);
}
</style>
