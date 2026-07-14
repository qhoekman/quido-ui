<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface StatisticLabelProps {
  asChild?: boolean
  as?: 'p' | 'span'
}

const props = withDefaults(defineProps<StatisticLabelProps>(), {
  asChild: false,
  as: 'span'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-statistic-label']"
    data-testid="qui-statistic-label"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p,
span {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-muted-fg);
  margin: 0;
}
</style>
