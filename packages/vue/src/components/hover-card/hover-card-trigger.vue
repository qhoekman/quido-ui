<script setup lang="ts">
import { inject, computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface HoverCardTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<HoverCardTriggerProps>(), {
  asChild: false,
  as: 'button'
})

const hoverCardContext = inject<{
  isOpen: ReturnType<typeof computed<boolean>>
  show: () => void
  hide: () => void
  disabled: ReturnType<typeof computed<boolean>>
}>('hoverCardContext')

if (!hoverCardContext) {
  throw new Error('HoverCardTrigger must be used within HoverCard')
}

const handleMouseEnter = () => {
  if (!hoverCardContext.disabled.value) {
    hoverCardContext.show()
  }
}

const handleFocus = () => {
  if (!hoverCardContext.disabled.value) {
    hoverCardContext.show()
  }
}

const handleBlur = () => {
  if (!hoverCardContext.disabled.value) {
    hoverCardContext.hide()
  }
}

const isDisabled = computed(() => hoverCardContext.disabled.value)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-hover-card-trigger']"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    @mouseenter="handleMouseEnter"
    @focus="handleFocus"
    @blur="handleBlur"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-hover-card-trigger {
  display: inline-block;
}

.q-hover-card-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-hover-card-trigger:disabled,
.q-hover-card-trigger[aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
