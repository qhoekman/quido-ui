<script setup lang="ts">
import { computed } from 'vue'
import { MenuSubTrigger as RekaMenuSubTrigger } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'

export interface DropdownMenuSubTriggerProps {
  inset?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuSubTriggerProps>(), {
  inset: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return [
    'q-dropdown-menu-sub-trigger',
    {
      'inset': props.inset
    }
  ]
})
</script>

<template>
  <RekaMenuSubTrigger
    :as-child="asChild"
    :as="as"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
    <ChevronRight :size="16" class="q-dropdown-menu-sub-trigger-icon" aria-hidden="true" />
  </RekaMenuSubTrigger>
</template>

<style scoped>
.q-dropdown-menu-sub-trigger {
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
}

.q-dropdown-menu-sub-trigger:focus {
  background-color: var(--color-muted);
}

.q-dropdown-menu-sub-trigger[data-state="open"] {
  background-color: var(--color-muted);
}

.q-dropdown-menu-sub-trigger.inset {
  padding-left: var(--spacing-8);
}

.q-dropdown-menu-sub-trigger-icon {
  margin-left: auto;
  height: var(--spacing-4);
  width: var(--spacing-4);
}
</style>
