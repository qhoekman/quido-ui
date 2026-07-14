<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ReelProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ReelProps>(), {
  asChild: false
})
</script>

<template>
  <Primitive
    :as="'div'"
    :as-child="asChild"
    :class="['q-reel']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-reel {
  position: relative;
  display: flex;
  overflow: hidden;
}
</style>
