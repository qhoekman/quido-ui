<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CalloutDescriptionProps {
  asChild?: boolean
  as?: 'div' | 'p'
}

const props = withDefaults(defineProps<CalloutDescriptionProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-callout-description']"
    data-testid="qui-callout-description"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-callout-description {
  margin: 0;
  font-size: var(--font-size-sm);
}
</style>
