<script setup lang="ts">
import { computed } from 'vue'
import { MenuLabel as RekaMenuLabel } from 'reka-ui'

export interface DropdownMenuLabelProps {
  inset?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuLabelProps>(), {
  inset: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return [
    'q-dropdown-menu-label',
    {
      'inset': props.inset
    }
  ]
})
</script>

<template>
  <RekaMenuLabel
    :as-child="asChild"
    :as="as"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuLabel>
</template>

<style scoped>
.q-dropdown-menu-label {
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.q-dropdown-menu-label.inset {
  padding-left: var(--spacing-8);
}
</style>
