<script setup lang="ts">
import { TooltipArrow as RekaTooltipArrow } from 'reka-ui'

export interface TooltipArrowProps {
  width?: number
  height?: number
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  width: 10,
  height: 5,
  asChild: false,
  as: 'svg'
})
</script>

<template>
  <RekaTooltipArrow
    :width="width"
    :height="height"
    :as-child="asChild"
    :as="as"
    :class="['q-tooltip-arrow']"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-tooltip-arrow {
  fill: var(--color-tooltip);
}
</style>
