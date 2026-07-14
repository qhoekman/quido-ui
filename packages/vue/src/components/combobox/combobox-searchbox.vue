<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { Search } from 'lucide-vue-next'

export interface ComboboxSearchboxProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxSearchboxProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-combobox-searchbox']"
    v-bind="$attrs"
  >
    <Search :size="16" class="q-combobox-searchbox-icon" aria-hidden="true" />
    <slot />
  </Primitive>
</template>

<style scoped>
.q-combobox-searchbox {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  margin: var(--spacing-2) var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-2);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  gap: var(--spacing-2);
}

.q-combobox-searchbox-icon {
  color: var(--color-muted-fg);
  width: var(--spacing-4);
  height: var(--spacing-4);
  flex-shrink: 0;
}
</style>
