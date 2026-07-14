<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  box-shadow: var(--box-shadow-sm);
}
</style>
