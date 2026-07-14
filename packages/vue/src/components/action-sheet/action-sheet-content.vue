<script setup lang="ts">
import { inject, computed, watch, onMounted, onUnmounted, type ComputedRef } from 'vue'
import { Teleport } from 'vue'
import { Primitive } from 'reka-ui'

export interface ActionSheetContentProps {
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetContentProps>(), {
  forceMount: false,
  asChild: false,
  as: 'div'
})

const context = inject<{
  isOpen: ComputedRef<boolean>
  close: () => void
  dismissible: ComputedRef<boolean>
  shouldScaleBackground: ComputedRef<boolean>
}>('actionSheetContext')

if (!context) {
  throw new Error('ActionSheetContent must be used within ActionSheet')
}

const handleOverlayClick = (event: MouseEvent) => {
  if (context.dismissible.value && event.target === event.currentTarget) {
    context.close()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && context.dismissible.value && context.isOpen.value) {
    context.close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})

const contentClasses = computed(() => [
  'q-action-sheet-content',
  {
    'is-open': context.isOpen.value
  }
])

const overlayClasses = computed(() => [
  'q-action-sheet-overlay',
  {
    'is-open': context.isOpen.value,
    'should-scale': context.shouldScaleBackground.value
  }
])
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="context.isOpen.value || props.forceMount"
        :class="overlayClasses"
        @click="handleOverlayClick"
      >
      </div>
    </Transition>
    <Transition name="content">
      <Primitive
        v-if="context.isOpen.value || props.forceMount"
        :as="as"
        :as-child="asChild"
        :class="contentClasses"
        v-bind="$attrs"
      >
        <div class="q-action-sheet-handle"></div>
        <slot />
      </Primitive>
    </Transition>
  </Teleport>
</template>

<style scoped>
.q-action-sheet-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-50);
  background-color: hsl(from var(--color-black) h s l / 80%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.q-action-sheet-overlay.is-open {
  opacity: 1;
}

.q-action-sheet-overlay.should-scale {
  transform: scale(1);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.q-action-sheet-content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-index-50);
  margin-top: var(--spacing-24);
  display: flex;
  height: auto;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.q-action-sheet-content.is-open {
  transform: translateY(0);
}

.q-action-sheet-handle {
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-4);
  height: var(--spacing-2);
  width: 100px;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

/* Transition animations */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.content-enter-active,
.content-leave-active {
  transition: transform 0.3s ease;
}

.content-enter-from,
.content-leave-to {
  transform: translateY(100%);
}
</style>
