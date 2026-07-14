<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardFooterProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardFooterProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card-footer']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
}
</style>
