<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardHeaderProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardHeaderProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card-header']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  padding: var(--spacing-6);
}
</style>
