<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardContentProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardContentProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card-content']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
}
</style>
