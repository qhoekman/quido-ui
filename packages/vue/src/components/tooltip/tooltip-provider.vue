<script setup lang="ts">
import { TooltipProvider as RekaTooltipProvider } from 'reka-ui'

export interface TooltipProviderProps {
  delayDuration?: number
  skipDelayDuration?: number
  disableHoverableContent?: boolean
}

const props = withDefaults(defineProps<TooltipProviderProps>(), {
  delayDuration: 700,
  skipDelayDuration: 300,
  disableHoverableContent: false
})
</script>

<template>
  <RekaTooltipProvider
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
    :disable-hoverable-content="disableHoverableContent"
    v-bind="$attrs"
  >
    <slot />
  </RekaTooltipProvider>
</template>
