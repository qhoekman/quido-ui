<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CountdownItemProps {
  asChild?: boolean
  as?: 'span'
}

const props = withDefaults(defineProps<CountdownItemProps>(), {
  asChild: false,
  as: 'span'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-countdown-item"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
span {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}
</style>
