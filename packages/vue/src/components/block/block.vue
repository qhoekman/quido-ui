<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const blockVariants = cva('q-block')

export type BlockVariants = VariantProps<typeof blockVariants>

export interface BlockProps {
  inset?: boolean
  outline?: boolean
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<BlockProps>(), {
  inset: false,
  outline: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return [
    blockVariants(),
    {
      'inset': props.inset,
      'outline': props.outline
    }
  ]
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  font-size: var(--font-size-sm);
  z-index: var(--z-index-10);
  position: relative;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.inset {
  margin-left: var(--spacing-4);
  margin-right: var(--spacing-4);
}

.outline {
  border: var(--border-width-default) solid var(--color-border);
}
</style>
