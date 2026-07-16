<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const statisticVariants = cva('q-statistic', {
  variants: {
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type StatisticVariants = VariantProps<typeof statisticVariants>

export interface StatisticProps {
  size?: StatisticVariants['size']
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<StatisticProps>(), {
  size: 'md',
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return statisticVariants({
    size: props.size
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-statistic"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.size--sm {
  gap: var(--spacing-0-5);
}

.size--md {
  gap: var(--spacing-1);
}

.size--lg {
  gap: var(--spacing-2);
}
</style>
