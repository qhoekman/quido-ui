<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'

export interface SpotlightGalleryTriggerProps {
  index: number
  active?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SpotlightGalleryTriggerProps>(), {
  asChild: false,
  as: 'div'
})

const spotlightGallery = inject<{
  activeIndex: any
  handleClick: (index: number) => void
  handleKeydown: (event: KeyboardEvent, index: number) => void
}>('spotlightGallery')

if (!spotlightGallery) {
  throw new Error('SpotlightGalleryTrigger must be used within SpotlightGallery')
}

const isActive = computed(() => {
  return props.active !== undefined 
    ? props.active 
    : spotlightGallery.activeIndex.value === props.index
})

const componentClasses = computed(() => {
  return [
    'q-spotlight-gallery-trigger',
    {
      'active': isActive.value
    }
  ]
})

const handleClick = () => {
  spotlightGallery.handleClick(props.index)
}

const handleKeydown = (event: KeyboardEvent) => {
  spotlightGallery.handleKeydown(event, props.index)
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    :tabindex="0"
    data-testid="qui-spotlight-gallery-trigger"
    @click="handleClick"
    @keydown="handleKeydown"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-spotlight-gallery-trigger {
  display: flex;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  color: var(--color-gray-900);
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: background-color 0.3s;
}

.q-spotlight-gallery-trigger:hover {
  background-color: var(--color-gray-50);
}

.q-spotlight-gallery-trigger.active {
  border: 1px solid var(--color-ring);
}

.q-spotlight-gallery-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
