<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const skipToContentVariants = cva('q-skip-to-content', {
  variants: {
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type SkipToContentVariants = VariantProps<typeof skipToContentVariants>

export interface SkipToContentProps {
  targetId?: string | null
  size?: SkipToContentVariants['size']
  as?: 'button' | 'a'
  asChild?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<SkipToContentProps>(), {
  targetId: null,
  size: 'md',
  asChild: false,
  as: 'button',
  disabled: false
})

const isVisible = ref(false)

const classes = computed(() => {
  return skipToContentVariants({
    size: props.size
  })
})

const componentClasses = computed(() => {
  return [
    classes.value,
    {
      'variant--visible': isVisible.value
    }
  ]
})

const role = computed(() => (props.as === 'a' ? 'button' : undefined))

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Tab') {
    isVisible.value = true
    return
  }

  if (event.key === 'Escape') {
    isVisible.value = false
    return
  }

  if (
    (event.key === ' ' || event.key === 'Enter') &&
    isVisible.value &&
    props.targetId
  ) {
    const targetElement = document.getElementById(props.targetId)
    if (targetElement) {
      event.preventDefault()
      // Make element focusable if it isn't naturally focusable
      if (
        !targetElement.hasAttribute('tabindex') &&
        !['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(
          targetElement.tagName
        )
      ) {
        targetElement.setAttribute('tabindex', '-1')
      }
      targetElement.focus()
      targetElement.scrollIntoView({ behavior: 'smooth' })
      isVisible.value = false
    }
  }
}

const handleClick = () => {
  if (isVisible.value && props.targetId) {
    const targetElement = document.getElementById(props.targetId)
    if (targetElement) {
      // Make element focusable if it isn't naturally focusable
      if (
        !targetElement.hasAttribute('tabindex') &&
        !['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(
          targetElement.tagName
        )
      ) {
        targetElement.setAttribute('tabindex', '-1')
      }
      targetElement.focus()
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    :disabled="disabled"
    :aria-disabled="disabled"
    :role="role"
    data-testid="qui-skip-to-content"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
button,
[role='button'] {
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  outline: var(--color-ring) 1px solid;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

button:focus-visible,
[role='button']:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

button:not(:disabled),
[role='button']:not([aria-disabled='true']) {
  cursor: pointer;
}

button:disabled,
[role='button'][aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

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

.variant--visible {
  transform: translateY(0);
}
</style>
