<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface CardDescriptionProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CardDescriptionProps>(), {
  asChild: false,
  as: 'p'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-card-description']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p {
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
  margin: 0;
}
</style>
