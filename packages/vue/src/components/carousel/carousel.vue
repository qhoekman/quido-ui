<script setup lang="ts">
import { provide, ref } from 'vue'
import { Primitive } from 'reka-ui'

export interface CarouselProps {
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal'
})

// Provide carousel context to child components
const currentIndex = ref(0)
const scrollPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const scrollNext = () => {
  // This will be updated by carousel-content based on actual item count
  currentIndex.value++
}

const updateIndex = (index: number) => {
  currentIndex.value = index
}

const canScrollPrev = ref(false)
const canScrollNext = ref(true)

provide('carousel', {
  orientation: props.orientation,
  currentIndex,
  scrollPrev,
  scrollNext,
  updateIndex,
  canScrollPrev,
  canScrollNext
})
</script>

<template>
  <Primitive
    as="div"
    :class="['q-carousel']"
    role="region"
    aria-roledescription="carousel"
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
