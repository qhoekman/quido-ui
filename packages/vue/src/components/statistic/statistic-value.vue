<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface StatisticValueProps {
  asChild?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const props = withDefaults(defineProps<StatisticValueProps>(), {
  asChild: false,
  as: 'h2'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-statistic-value']"
    data-testid="qui-statistic-value"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0;
}
</style>
