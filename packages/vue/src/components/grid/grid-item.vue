<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const gridItemVariants = cva('q-grid-item')

export type GridItemVariants = VariantProps<typeof gridItemVariants>

export interface GridItemProps {
  colSpan?: number
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<GridItemProps>(), {
  colSpan: 1,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return gridItemVariants()
})

const gridItemStyle = computed(() => {
  return {
    gridColumn: `span ${props.colSpan}`
  }
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :style="gridItemStyle"
    data-testid="qui-grid-item"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  grid-column: span 1;
}
</style>
