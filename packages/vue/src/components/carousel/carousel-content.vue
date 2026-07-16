<script setup lang="ts">
import { computed, inject, onMounted, ref, watch, type ComputedRef } from 'vue'
import { Primitive } from 'reka-ui'

export interface CarouselContentProps {
  orientation?: 'horizontal' | 'vertical'
}

const props = defineProps<CarouselContentProps>()

interface CarouselContext {
  orientation: ComputedRef<'horizontal' | 'vertical'> | 'horizontal' | 'vertical'
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

// `Primitive` is a Vue component, so a template ref on it yields the
// component instance, not the rendered DOM node — its actual element must
// be read via `.$el`.
const contentRef = ref<{ $el: HTMLElement } | null>(null)
const itemCount = ref(0)

const orientation = computed(() => {
  if (props.orientation !== undefined) {
    return props.orientation
  }
  const ctxOrientation = carouselContext.orientation
  return typeof ctxOrientation === 'object' && 'value' in ctxOrientation
    ? ctxOrientation.value
    : ctxOrientation
})

const getElement = (): HTMLElement | null => contentRef.value?.$el ?? null

const updateCarouselPosition = () => {
  const el = getElement()
  if (!el) return

  const currentIndex = carouselContext.currentIndex.value
  const offset = orientation.value === 'horizontal' ? 'translateX' : 'translateY'
  el.style.transform = `${offset}(-${currentIndex * 100}%)`

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

carouselContext.scrollPrev = scrollPrev
carouselContext.scrollNext = scrollNext

onMounted(() => {
  const el = getElement()
  if (el) {
    itemCount.value = el.children.length
    updateCarouselPosition()
  }
})

watch(() => carouselContext.currentIndex.value, () => {
  updateCarouselPosition()
})

watch(orientation, () => {
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
