<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ColorSelectorItemsProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ColorSelectorItemsProps>(), {
  asChild: false,
  as: 'div'
})

const componentClasses = computed(() => 'q-color-selector-items')
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    data-testid="qui-color-selector-items"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-color-selector-items {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}
</style>
