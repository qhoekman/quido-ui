<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ProgressBarProps {
  value?: number
  asChild?: boolean
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: undefined,
  asChild: false
})

const indicatorClasses = computed(() => {
  return [
    'indicator',
    props.value === undefined
      ? 'variant--indeterminate'
      : 'variant--determinate'
  ]
})

const indicatorStyle = computed(() => {
  if (props.value !== undefined) {
    return {
      transform: `translateX(${-100 + props.value}%)`
    }
  }
  return {}
})
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    class="q-progress-bar"
    data-testid="qui-progress-bar"
    v-bind="$attrs"
  >
    <div
      data-testid="qui-progress-bar-indicator"
      :class="indicatorClasses"
      :style="indicatorStyle"
    ></div>
  </Primitive>
</template>

<style scoped>
.q-progress-bar {
  position: relative;
  height: 2px;
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  background-color: hsl(from var(--color-primary) h s l / 20%);
}

.q-progress-bar .indicator {
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: var(--color-primary);
  transition: transform 0.3s ease;
}

.q-progress-bar .indicator.variant--indeterminate {
  animation: indeterminate 1.5s infinite linear;
}

@keyframes indeterminate {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
