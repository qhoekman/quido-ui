<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ReelItemProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ReelItemProps>(), {
  asChild: false
})
</script>

<template>
  <Primitive
    :as="'div'"
    :as-child="asChild"
    :class="['q-reel-item']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-reel-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
}
</style>
