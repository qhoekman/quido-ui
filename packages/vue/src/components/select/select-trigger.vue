<script setup lang="ts">
import { computed } from 'vue'
import { SelectTrigger as SelectTriggerPrimitive, SelectIcon } from 'reka-ui'
import { ChevronsUpDown } from 'lucide-vue-next'
import { cva, type VariantProps } from 'class-variance-authority'

const selectTriggerVariants = cva('q-select-trigger', {
  variants: {
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>

export interface SelectTriggerProps {
  size?: SelectTriggerVariants['size']
  asChild?: boolean
  as?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  size: 'md',
  asChild: false,
  as: 'button',
  disabled: false,
})

const classes = computed(() => {
  return selectTriggerVariants({
    size: props.size,
  })
})
</script>

<template>
  <SelectTriggerPrimitive
    :as-child="asChild"
    :as="as"
    :disabled="disabled"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronsUpDown :size="20" class="q-select-trigger-icon" aria-hidden="true" />
    </SelectIcon>
  </SelectTriggerPrimitive>
</template>

<style scoped>
.q-select-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  color: var(--color-background-fg);
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  box-shadow: var(--box-shadow-sm);
  outline: none;
  cursor: pointer;
}

.q-select-trigger::placeholder {
  color: var(--color-muted-fg);
}

.q-select-trigger:focus {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-select-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-select-trigger > span {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.q-select-trigger-icon {
  height: var(--spacing-4);
  width: var(--spacing-4);
  opacity: 0.5;
  flex-shrink: 0;
}

/* Size variants */
.size--sm {
  height: var(--spacing-9);
  padding: var(--spacing-2) var(--spacing-2);
}

.size--md {
  height: var(--spacing-10);
  padding: var(--spacing-2) var(--spacing-3);
}

.size--lg {
  height: var(--spacing-11);
  padding: var(--spacing-3) var(--spacing-4);
}
</style>
