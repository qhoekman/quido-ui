<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const gridVariants = cva('q-grid')

export type GridVariants = VariantProps<typeof gridVariants>

export interface GridProps {
  columns?: number
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<GridProps>(), {
  columns: 4,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return gridVariants()
})

const gridStyle = computed(() => {
  return {
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`
  }
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :style="gridStyle"
    data-testid="qui-grid"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: grid;
  gap: var(--spacing-4);
}
</style>
