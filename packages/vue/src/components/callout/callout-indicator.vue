<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CalloutIndicatorProps {
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<CalloutIndicatorProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-callout-indicator']"
    data-testid="qui-callout-indicator"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-callout-indicator {
  position: absolute;
  top: var(--spacing-4);
  left: var(--spacing-4);
  transform: translateY(-3px);
  color: inherit;
  width: var(--spacing-8);
  height: var(--spacing-8);
}
</style>
