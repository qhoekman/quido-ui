<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardTitleProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardTitleProps>(), {
  asChild: false,
  as: 'h3'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card-title']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h3 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0;
}
</style>
