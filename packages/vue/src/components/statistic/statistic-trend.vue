<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowUp, ArrowDown } from 'lucide-vue-next'

const statisticTrendVariants = cva('q-statistic-trend', {
  variants: {
    variant: {
      up: 'variant--up',
      down: 'variant--down',
      neutral: 'variant--neutral'
    }
  },
  defaultVariants: {
    variant: 'neutral'
  }
})

export type StatisticTrendVariants = VariantProps<typeof statisticTrendVariants>

export interface StatisticTrendProps {
  variant?: StatisticTrendVariants['variant']
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<StatisticTrendProps>(), {
  variant: 'neutral',
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return statisticTrendVariants({
    variant: props.variant
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-statistic-trend"
    v-bind="$attrs"
  >
    <ArrowUp v-if="variant === 'up'" :size="15" />
    <ArrowDown v-else-if="variant === 'down'" :size="15" />
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
}

.variant--up {
  color: var(--color-emerald-600);
}

.variant--down {
  color: var(--color-red-600);
}

.variant--neutral {
  color: var(--color-gray-600);
}
</style>
