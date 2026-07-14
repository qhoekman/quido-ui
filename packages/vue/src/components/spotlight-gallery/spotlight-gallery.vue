<script setup lang="ts">
import { provide, ref, computed, onMounted, h } from 'vue'
import { Primitive } from 'reka-ui'
import SpotlightGalleryList from './spotlight-gallery-list.vue'
import SpotlightGalleryTrigger from './spotlight-gallery-trigger.vue'
import SpotlightGalleryContent from './spotlight-gallery-content.vue'

export interface SpotlightGalleryProps {
  defaultActiveIndex?: number
  activeIndex?: number
}

const props = withDefaults(defineProps<SpotlightGalleryProps>(), {
  defaultActiveIndex: 0
})

const emit = defineEmits<{
  'update:activeIndex': [value: number]
}>()

// Internal state
const internalActiveIndex = ref(props.defaultActiveIndex)
const items = ref<Array<{ id: string; render: () => any }>>([])

// Computed active index (controlled or uncontrolled)
const activeIndex = computed({
  get: () => props.activeIndex ?? internalActiveIndex.value,
  set: (value: number) => {
    internalActiveIndex.value = value
    emit('update:activeIndex', value)
  }
})

// Register item
const registerItem = (id: string, render: () => any) => {
  if (!items.value.find(item => item.id === id)) {
    items.value.push({ id, render })
  }
}

// Unregister item
const unregisterItem = (id: string) => {
  const index = items.value.findIndex(item => item.id === id)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

// Set active index
const setActiveIndex = (index: number) => {
  if (index >= 0 && index < items.value.length) {
    activeIndex.value = index
  }
}

// Handle click
const handleClick = (index: number) => {
  setActiveIndex(index)
}

// Handle keydown
const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    setActiveIndex(activeIndex.value + 1)
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    setActiveIndex(activeIndex.value - 1)
  }
}

// Provide context to child components
provide('spotlightGallery', {
  activeIndex,
  items,
  registerItem,
  unregisterItem,
  handleClick,
  handleKeydown
})

onMounted(() => {
  if (items.value.length > 0) {
    setActiveIndex(0)
  }
})
</script>

<template>
  <Primitive
    as="div"
    :class="['q-spotlight-gallery']"
    v-bind="$attrs"
  >
    <SpotlightGalleryList>
      <SpotlightGalleryTrigger
        v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        :active="index === activeIndex"
      >
        <component :is="item.render()" />
      </SpotlightGalleryTrigger>
    </SpotlightGalleryList>
    <SpotlightGalleryContent>
      <component :is="items[activeIndex]?.render()" v-if="items[activeIndex]" />
    </SpotlightGalleryContent>
    <div style="display: none;">
      <slot />
    </div>
  </Primitive>
</template>

<style scoped>
.q-spotlight-gallery {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}
</style>
