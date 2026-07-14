<script setup lang="ts">
import { ref, provide, onMounted, nextTick } from 'vue'
import { Primitive } from 'reka-ui'
import { useReel } from './useReel'

export interface ReelContentProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ReelContentProps>(), {
  asChild: false
})

const contentRef = ref<HTMLElement | null>(null)
const reel = useReel(contentRef)

// Provide reel methods to child components
provide('reel', reel)

const setRef = (el: any) => {
  if (el) {
    // Primitive component exposes the DOM element via $el
    contentRef.value = (el.$el || el) as HTMLElement
    nextTick(() => {
      reel.updateScrollState()
    })
  }
}

onMounted(() => {
  nextTick(() => {
    reel.updateScrollState()
  })
})
</script>

<template>
  <Primitive
    :as="'div'"
    :as-child="asChild"
    :ref="setRef"
    :class="['q-reel-content']"
    data-reel-content
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-reel-content {
  display: flex;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
}
</style>
