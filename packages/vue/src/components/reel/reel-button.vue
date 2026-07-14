<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const reelButtonVariants = cva('q-reel-button', {
  variants: {
    direction: {
      prev: 'direction--prev',
      next: 'direction--next'
    }
  },
  defaultVariants: {
    direction: 'next'
  }
})

export type ReelButtonVariants = VariantProps<typeof reelButtonVariants>

export interface ReelButtonProps {
  direction?: ReelButtonVariants['direction']
  asChild?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ReelButtonProps>(), {
  direction: 'next',
  asChild: false,
  disabled: false
})

interface ReelContext {
  canScrollPrev: Ref<boolean>
  canScrollNext: Ref<boolean>
  scrollPrev: () => void
  scrollNext: () => void
  updateScrollState: () => void
}

const reel = inject<ReelContext | null>('reel', null)

const classes = computed(() => {
  return reelButtonVariants({
    direction: props.direction
  })
})

const isDisabled = computed(() => {
  if (props.disabled) return true
  if (!reel) return true
  return props.direction === 'prev' ? !reel.canScrollPrev.value : !reel.canScrollNext.value
})

const handleClick = () => {
  if (!reel || isDisabled.value) return
  if (props.direction === 'prev') {
    reel.scrollPrev()
  } else {
    reel.scrollNext()
  }
}
</script>

<template>
  <Primitive
    :as="'button'"
    :as-child="asChild"
    :class="classes"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot>
      <ChevronLeft v-if="direction === 'prev'" :size="20" />
      <ChevronRight v-else :size="20" />
    </slot>
  </Primitive>
</template>

<style scoped>
.q-reel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-primary);
  color: var(--color-primary-fg);
  backdrop-filter: blur(5px);
  border: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-md);
}

.q-reel-button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-reel-button:disabled,
.q-reel-button[aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

.q-reel-button:not(:disabled):hover {
  background-color: hsl(from var(--color-primary) h s l / 90%);
}

.direction--prev {
  left: 0;
}

.direction--next {
  right: 0;
}
</style>
