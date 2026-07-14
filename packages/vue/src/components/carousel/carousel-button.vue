<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const buttonVariants = cva('q-carousel-button', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      outline: 'variant--outline',
      ghost: 'variant--ghost'
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
      icon: 'size--icon'
    },
    position: {
      prev: 'position--prev',
      next: 'position--next',
      unset: ''
    }
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'icon',
    position: 'unset'
  }
})

export type CarouselButtonVariants = VariantProps<typeof buttonVariants>

export interface CarouselButtonProps {
  variant?: CarouselButtonVariants['variant']
  size?: CarouselButtonVariants['size']
  position?: CarouselButtonVariants['position']
  disabled?: boolean
}

const props = withDefaults(defineProps<CarouselButtonProps>(), {
  variant: 'ghost',
  size: 'icon',
  position: 'unset',
  disabled: false
})

interface CarouselContext {
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: { value: boolean }
  canScrollNext: { value: boolean }
}

const carouselContext = inject<CarouselContext>('carousel')

const classes = computed(() => {
  return buttonVariants({
    variant: props.variant,
    size: props.size,
    position: props.position
  })
})

const isDisabled = computed(() => {
  if (props.disabled) return true
  if (props.position === 'prev' && carouselContext) {
    return !carouselContext.canScrollPrev.value
  }
  if (props.position === 'next' && carouselContext) {
    return !carouselContext.canScrollNext.value
  }
  return false
})

const handleClick = () => {
  if (isDisabled.value || !carouselContext) return

  if (props.position === 'prev') {
    carouselContext.scrollPrev()
  } else if (props.position === 'next') {
    carouselContext.scrollNext()
  }
}
</script>

<template>
  <Primitive
    as="button"
    :class="classes"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot>
      <ChevronLeft v-if="props.position === 'prev'" :size="20" aria-hidden="true" />
      <ChevronRight v-if="props.position === 'next'" :size="20" aria-hidden="true" />
    </slot>
  </Primitive>
</template>

<style scoped>
.q-carousel-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;
}

.q-carousel-button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-carousel-button:not(:disabled) {
  cursor: pointer;
}

.q-carousel-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Variant modifiers */
.variant--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--primary:hover:not(:disabled) {
  background-color: hsl(from var(--color-primary) h s l / 90%);
}

.variant--secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-fg);
}

.variant--secondary:hover:not(:disabled) {
  background-color: hsl(from var(--color-secondary) h s l / 90%);
}

.variant--destructive {
  background-color: var(--color-danger);
  color: var(--color-danger-fg);
}

.variant--destructive:hover:not(:disabled) {
  background-color: hsl(from var(--color-danger) h s l / 90%);
}

.variant--outline {
  border: var(--border-width-default) solid var(--color-neutral-200);
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--outline:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 5%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--ghost {
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--ghost:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 5%);
  color: var(--color-background-fg);
}

/* Size modifiers */
.size--sm {
  height: var(--spacing-9);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
}

.size--md {
  height: var(--spacing-10);
  padding: var(--spacing-2) var(--spacing-4);
}

.size--lg {
  height: var(--spacing-11);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-8);
}

.size--icon {
  height: var(--spacing-10);
  width: var(--spacing-10);
}

/* Position modifiers */
.position--prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.position--next {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
