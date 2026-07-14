<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface BlockTitleProps {
  asChild?: boolean
  as?: 'h2'
}

const props = withDefaults(defineProps<BlockTitleProps>(), {
  asChild: false,
  as: 'h2'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-block-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h2 {
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  margin-top: var(--spacing-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: calc(var(--spacing-6) * -1);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
}
</style>
