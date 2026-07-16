<script setup lang="ts">
import { PopoverContent } from 'reka-ui'

export interface ComboboxContentProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxContentProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <PopoverContent
    :as-child="asChild"
    :as="as"
    :class="['q-combobox-content']"
    role="listbox"
    id="combobox-content"
    tabindex="-1"
    v-bind="$attrs"
  >
    <slot />
  </PopoverContent>
</template>

<style scoped>
.q-combobox-content {
  width: 100%;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  max-height: var(--spacing-60);
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 50;
}
</style>
