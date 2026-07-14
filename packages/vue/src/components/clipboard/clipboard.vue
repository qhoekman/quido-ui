<script setup lang="ts">
import { computed, ref, onUnmounted } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { Copy, Check } from 'lucide-vue-next'

const clipboardVariants = cva('q-clipboard', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      outline: 'variant--outline',
      ghost: 'variant--ghost',
      link: 'variant--link'
    },
    size: {
      md: 'size--md',
      sm: 'size--sm',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md'
  }
})

export type ClipboardVariants = VariantProps<typeof clipboardVariants>

export interface ClipboardProps {
  variant?: ClipboardVariants['variant']
  size?: ClipboardVariants['size']
  as?: 'button' | 'a'
  asChild?: boolean
  disabled?: boolean
  text: string
  copiedDuration?: number
}

const props = withDefaults(defineProps<ClipboardProps>(), {
  variant: 'outline',
  size: 'md',
  asChild: false,
  disabled: false,
  copiedDuration: 2000
})

const emit = defineEmits<{
  copy: [text: string]
  error: [error: Error]
}>()

const isCopied = ref(false)
const copyTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

const classes = computed(() => {
  return clipboardVariants({
    variant: props.variant,
    size: props.size
  })
})

const clipboardClasses = computed(() => {
  return [
    classes.value,
    {
      'is-copied': isCopied.value
    }
  ]
})

const isDisabled = computed(() => props.disabled)
const role = computed(() => (props.as === 'a' ? 'button' : undefined))
const iconSize = computed(() => {
  if (props.size === 'sm') return 16
  if (props.size === 'lg') return 24
  return 20
})

const copyToClipboard = async () => {
  if (isDisabled.value || !props.text) {
    return
  }

  try {
    await navigator.clipboard.writeText(props.text)
    isCopied.value = true
    emit('copy', props.text)

    // Clear existing timeout if any
    if (copyTimeout.value) {
      clearTimeout(copyTimeout.value)
    }

    // Reset copied state after duration
    copyTimeout.value = setTimeout(() => {
      isCopied.value = false
      copyTimeout.value = null
    }, props.copiedDuration)
  } catch (error) {
    emit('error', error as Error)
  }
}

// Cleanup timeout on unmount
onUnmounted(() => {
  if (copyTimeout.value) {
    clearTimeout(copyTimeout.value)
  }
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="clipboardClasses"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-label="isCopied ? 'Copied!' : 'Copy to clipboard'"
    :role="role"
    @click="copyToClipboard"
    v-bind="$attrs"
  >
    <slot>
      <Copy v-if="!isCopied" :size="iconSize" />
      <Check v-else :size="iconSize" />
    </slot>
  </Primitive>
</template>

<style scoped>
button,
[role='button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;
}

button:focus-visible,
[role='button']:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:not(:disabled),
[role='button']:not(:disabled) {
  cursor: pointer;
}

button:disabled,
[role='button'][aria-disabled='true'] {
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
  color: var(--color-background-fg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: transparent;
}

.variant--outline:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--ghost {
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--ghost:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--link {
  color: var(--color-primary);
  text-underline-offset: var(--spacing-4);
}

.variant--link:hover:not(:disabled) {
  text-decoration: underline;
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
  padding: 0;
}

/* State modifiers */
.is-copied {
  color: var(--color-success, var(--color-primary));
}

.is-copied.variant--outline {
  border-color: var(--color-success, var(--color-primary));
}
</style>
