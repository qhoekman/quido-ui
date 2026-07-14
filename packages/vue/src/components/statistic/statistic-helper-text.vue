<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface StatisticHelperTextProps {
  asChild?: boolean
  as?: 'p' | 'span'
}

const props = withDefaults(defineProps<StatisticHelperTextProps>(), {
  asChild: false,
  as: 'p'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-statistic-helper-text']"
    data-testid="qui-statistic-helper-text"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p,
span {
  font-size: var(--font-size-xs);
  color: var(--color-muted-fg);
  margin: 0;
}
</style>
