<script setup lang="ts">
import { computed, inject, type ComputedRef } from 'vue'
import { Primitive } from 'reka-ui'

interface CarouselContext {
  orientation: ComputedRef<'horizontal' | 'vertical'> | 'horizontal' | 'vertical'
}

const carouselContext = inject<CarouselContext>('carousel')

const orientation = computed(() => {
  const ctxOrientation = carouselContext?.orientation
  if (!ctxOrientation) return 'horizontal'
  return typeof ctxOrientation === 'object' && 'value' in ctxOrientation
    ? ctxOrientation.value
    : ctxOrientation
})
</script>

<template>
  <Primitive
    as="div"
    :class="['q-carousel-item']"
    :data-orientation="orientation"
    role="group"
    aria-roledescription="slide"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-carousel-item {
  flex: 0 0 100%;
  min-width: 0;
}

.q-carousel-item[data-orientation='vertical'] {
  flex: 0 0 100%;
  min-height: 0;
  height: 100%;
}
</style>
