<script setup lang="ts">
import { inject } from 'vue'
import { Primitive } from 'reka-ui'

const spotlightGallery = inject<{
  items: any[]
  activeIndex: any
  handleClick: (index: number) => void
  handleKeydown: (event: KeyboardEvent, index: number) => void
}>('spotlightGallery')

if (!spotlightGallery) {
  throw new Error('SpotlightGalleryList must be used within SpotlightGallery')
}
</script>

<template>
  <Primitive
    as="div"
    :class="['q-spotlight-gallery-list']"
    data-testid="qui-spotlight-gallery-list"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-spotlight-gallery-list {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
}
</style>
