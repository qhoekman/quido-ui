<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface LoadingBarProps {
  loading?: boolean
  asChild?: boolean
}

const props = withDefaults(defineProps<LoadingBarProps>(), {
  loading: false,
  asChild: false
})

const loadingBarClasses = computed(() => {
  return [
    'q-loading-bar',
    {
      loading: props.loading
    }
  ]
})
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    :class="loadingBarClasses"
    data-testid="qui-loading-bar"
    v-bind="$attrs"
  >
    <div v-if="loading" class="indicator"></div>
  </Primitive>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  overflow: hidden;
  z-index: 1000;
}

.indicator {
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
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
