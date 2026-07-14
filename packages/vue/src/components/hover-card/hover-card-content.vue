<script setup lang="ts">
import { inject, computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface HoverCardContentProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  asChild: false,
  as: 'div'
})

const hoverCardContext = inject<{
  isOpen: ReturnType<typeof computed<boolean>>
  show: () => void
  disabled: ReturnType<typeof computed<boolean>>
}>('hoverCardContext')

if (!hoverCardContext) {
  throw new Error('HoverCardContent must be used within HoverCard')
}

const handleMouseEnter = () => {
  if (!hoverCardContext.disabled.value) {
    hoverCardContext.show()
  }
}

const isVisible = computed(() => hoverCardContext.isOpen.value)
</script>

<template>
  <Primitive
    v-if="isVisible"
    :as="as"
    :as-child="asChild"
    :class="['q-hover-card-content']"
    @mouseenter="handleMouseEnter"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-hover-card-content {
  background-color: var(--color-muted);
  padding: var(--spacing-2);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-md);
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: var(--spacing-1);
  z-index: 1000;
}
</style>
