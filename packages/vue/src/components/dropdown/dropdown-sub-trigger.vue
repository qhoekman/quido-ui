<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuSubTrigger as RekaDropdownMenuSubTrigger } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'

export interface DropdownSubTriggerProps {
  inset?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownSubTriggerProps>(), {
  inset: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return [
    'q-dropdown-sub-trigger',
    {
      'inset': props.inset
    }
  ]
})
</script>

<template>
  <RekaDropdownMenuSubTrigger
    :as-child="asChild"
    :as="as"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
    <ChevronRight :size="16" class="q-dropdown-sub-trigger-icon" aria-hidden="true" />
  </RekaDropdownMenuSubTrigger>
</template>

<style scoped>
.q-dropdown-sub-trigger {
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
}

.q-dropdown-sub-trigger:focus {
  background-color: var(--color-muted);
}

.q-dropdown-sub-trigger[data-state="open"] {
  background-color: var(--color-muted);
}

.q-dropdown-sub-trigger.inset {
  padding-left: var(--spacing-8);
}

.q-dropdown-sub-trigger-icon {
  margin-left: auto;
  height: var(--spacing-4);
  width: var(--spacing-4);
}
</style>
