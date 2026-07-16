<script setup lang="ts">
import { ref, provide } from 'vue'
import { Primitive } from 'reka-ui'
import { useReel } from './useReel'

export interface ReelProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ReelProps>(), {
  asChild: false
})

const contentRef = ref<HTMLElement | null>(null)
const reel = useReel(contentRef)

// Provide reel methods and the shared content ref to descendants
// (ReelButton and ReelContent are siblings under this root, so the
// provide must live here rather than on ReelContent itself)
provide('reel', reel)
provide('reelContentRef', contentRef)
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
