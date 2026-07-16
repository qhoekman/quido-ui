<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const separatorVariants = cva('q-separator', {
  variants: {
    orientation: {
      horizontal: 'variant--horizontal',
      vertical: 'variant--vertical'
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

export type SeparatorVariants = VariantProps<typeof separatorVariants>

export interface SeparatorProps {
  orientation?: SeparatorVariants['orientation']
  decorative?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  decorative: true,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return separatorVariants({
    orientation: props.orientation
  })
})

const role = computed(() => (props.decorative ? undefined : 'separator'))
const ariaOrientation = computed(() => (props.decorative ? undefined : props.orientation))
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :role="role"
    :aria-orientation="ariaOrientation"
    :data-orientation="orientation"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-separator {
  display: block;
  flex-shrink: 0;
  background-color: var(--color-border);
}

.variant--horizontal {
  height: 1px;
  width: 100%;
}

.variant--vertical {
  height: 100%;
  width: 1px;
}
</style>
