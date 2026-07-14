<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from 'vue'
import { Primitive } from 'reka-ui'

export interface CarouselContentProps {
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<CarouselContentProps>(), {
  orientation: 'horizontal'
})

interface CarouselContext {
  orientation: 'horizontal' | 'vertical'
  currentIndex: { value: number }
  scrollPrev: () => void
  scrollNext: () => void
  updateIndex: (index: number) => void
  canScrollPrev: { value: boolean }
  canScrollNext: { value: boolean }
}

const carouselContext = inject<CarouselContext>('carousel')

if (!carouselContext) {
  throw new Error('CarouselContent must be used within a Carousel component')
}

const contentRef = ref<HTMLElement | null>(null)
const itemCount = ref(0)

const orientation = computed(() => props.orientation || carouselContext.orientation)

const updateCarouselPosition = () => {
  if (!contentRef.value) return

  const currentIndex = carouselContext.currentIndex.value
  const offset = orientation.value === 'horizontal' ? 'translateX' : 'translateY'
  contentRef.value.style.transform = `${offset}(-${currentIndex * 100}%)`

  // Update can scroll states
  carouselContext.canScrollPrev.value = currentIndex > 0
  carouselContext.canScrollNext.value = currentIndex < itemCount.value - 1
}

const scrollPrev = () => {
  if (carouselContext.currentIndex.value > 0) {
    carouselContext.currentIndex.value--
    updateCarouselPosition()
  }
}

const scrollNext = () => {
  if (carouselContext.currentIndex.value < itemCount.value - 1) {
    carouselContext.currentIndex.value++
    updateCarouselPosition()
  }
}

// Override the context methods with local implementations
carouselContext.scrollPrev = scrollPrev
carouselContext.scrollNext = scrollNext

onMounted(() => {
  if (contentRef.value) {
    itemCount.value = contentRef.value.children.length
    updateCarouselPosition()
  }
})

watch(() => carouselContext.currentIndex.value, () => {
  updateCarouselPosition()
})
</script>

<template>
  <Primitive
    as="div"
    ref="contentRef"
    :class="['q-carousel-content']"
    :data-orientation="orientation"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-carousel-content {
  display: flex;
  transition: transform 0.3s ease;
  width: 100%;
}

.q-carousel-content[data-orientation='vertical'] {
  flex-direction: column;
  height: 100%;
}
</style>
