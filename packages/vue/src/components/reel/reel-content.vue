<script setup lang="ts">
import { inject, nextTick, type Ref } from 'vue'
import { Primitive } from 'reka-ui'

export interface ReelContentProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ReelContentProps>(), {
  asChild: false
})

interface ReelContext {
  updateScrollState: () => void
}

const contentRef = inject<Ref<HTMLElement | null> | null>('reelContentRef', null)
const reel = inject<ReelContext | null>('reel', null)

const setRef = (el: any) => {
  if (el && contentRef) {
    // Primitive component exposes the DOM element via $el
    contentRef.value = (el.$el || el) as HTMLElement
    nextTick(() => {
      reel?.updateScrollState()
    })
  }
}
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
