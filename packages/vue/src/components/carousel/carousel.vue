<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref, watch } from 'vue'
import { Primitive } from 'reka-ui'

export interface CarouselProps {
  orientation?: 'horizontal' | 'vertical'
  autoplay?: boolean
  autoplayInterval?: number
}

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  autoplay: false,
  autoplayInterval: 3000
})

const currentIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const context = {
  orientation: computed(() => props.orientation),
  currentIndex,
  scrollPrev: () => {},
  scrollNext: () => {},
  updateIndex: (index: number) => {
    currentIndex.value = index
  },
  canScrollPrev,
  canScrollNext
}

provide('carousel', context)

let autoplayTimer: ReturnType<typeof setInterval> | null = null

const clearAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const startAutoplay = () => {
  clearAutoplay()
  if (!props.autoplay) return
  autoplayTimer = setInterval(() => {
    if (canScrollNext.value) {
      context.scrollNext()
    } else {
      currentIndex.value = 0
    }
  }, props.autoplayInterval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearAutoplay()
})

watch(
  () => [props.autoplay, props.autoplayInterval] as const,
  () => {
    startAutoplay()
  }
)
</script>

<template>
  <Primitive
    as="div"
    :class="['q-carousel']"
    :data-orientation="orientation"
    role="region"
    aria-roledescription="carousel"
    @mouseenter="clearAutoplay"
    @mouseleave="startAutoplay"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-carousel {
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
