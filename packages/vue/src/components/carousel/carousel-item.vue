<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'

interface CarouselContext {
  orientation: 'horizontal' | 'vertical'
}

const carouselContext = inject<CarouselContext>('carousel')

const orientation = computed(() => carouselContext?.orientation || 'horizontal')
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
}
</style>
