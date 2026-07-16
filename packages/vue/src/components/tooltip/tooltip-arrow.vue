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

<style>
/*
 * Not scoped: this component is normally used as slot content inside
 * TooltipContent, whose entire rendered subtree (including slotted
 * children) is moved by reka-ui's Teleport into the tooltip portal --
 * none of the elements in that relocated subtree receive Vue's
 * scoped-CSS data-v-* attribute (confirmed via direct DOM inspection).
 * A scoped selector here would silently never match.
 */
.q-tooltip-arrow {
  fill: var(--color-tooltip);
}
</style>
