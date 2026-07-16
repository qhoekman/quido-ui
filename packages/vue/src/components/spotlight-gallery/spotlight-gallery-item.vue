<script setup lang="ts">
import { inject, onMounted, onUnmounted, useSlots, h } from 'vue'

export interface SpotlightGalleryItemProps {
  id?: string
}

const props = withDefaults(defineProps<SpotlightGalleryItemProps>(), {
  id: () => `spotlight-gallery-item-${Math.random().toString(36).substr(2, 9)}`
})

const slots = useSlots()

const spotlightGallery = inject<{
  registerItem: (id: string, render: () => any) => void
  unregisterItem: (id: string) => void
}>('spotlightGallery')

if (!spotlightGallery) {
  throw new Error('SpotlightGalleryItem must be used within SpotlightGallery')
}

onMounted(() => {
  // Register this component's render function
  spotlightGallery.registerItem(props.id, () => {
    return h('div', { 'data-testid': 'qui-spotlight-gallery-item' }, slots.default?.())
  })
})

onUnmounted(() => {
  spotlightGallery.unregisterItem(props.id)
})
</script>

<template>
  <div data-testid="qui-spotlight-gallery-item">
    <slot />
  </div>
</template>
