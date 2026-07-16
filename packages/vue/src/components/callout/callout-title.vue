<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CalloutTitleProps {
  asChild?: boolean
  as?: 'h5' | 'h1' | 'h2' | 'h3' | 'h4' | 'h6'
}

const props = withDefaults(defineProps<CalloutTitleProps>(), {
  asChild: false,
  as: 'h5'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-callout-title']"
    data-testid="qui-callout-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-callout-title {
  margin: 0;
  margin-bottom: var(--spacing-1);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
}
</style>
