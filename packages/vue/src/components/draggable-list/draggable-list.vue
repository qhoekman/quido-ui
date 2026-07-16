<script setup lang="ts" generic="T = unknown">
import { ref, watch } from 'vue'
import { Primitive } from 'reka-ui'
import { GripVertical } from 'lucide-vue-next'

export interface DraggableListProps {
  items: T[]
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DraggableListProps>(), {
  asChild: false,
  as: 'ul'
})

const emit = defineEmits<{
  reorder: [items: T[]]
}>()

// Internal list state
const list = ref<T[]>([...props.items])
const draggedIndex = ref<number | null>(null)

// Watch for external changes to items
watch(
  () => props.items,
  (newItems) => {
    list.value = [...newItems]
  },
  { deep: true }
)

const handleDragStart = (event: DragEvent, index: number) => {
  draggedIndex.value = index
  if (event.dataTransfer) {
    event.dataTransfer.setData('text/plain', index.toString())
    event.dataTransfer.effectAllowed = 'move'
  }
}

const handleDragOver = (event: DragEvent, index: number) => {
  event.preventDefault()
  if (draggedIndex.value === null || draggedIndex.value === index) return

  const newList = [...list.value]
  const [reorderedItem] = newList.splice(draggedIndex.value, 1)
  newList.splice(index, 0, reorderedItem)

  list.value = newList
  draggedIndex.value = index
}

const handleDragEnd = () => {
  draggedIndex.value = null
  emit('reorder', list.value)
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-draggable-list"
    role="list"
    data-testid="qui-draggable-list"
    v-bind="$attrs"
  >
    <li
      v-for="(item, index) in list"
      :key="index"
      data-testid="qui-draggable-list-item"
      class="q-draggable-item"
      :class="{ dragging: draggedIndex === index }"
      draggable="true"
      @dragstart="handleDragStart($event, index)"
      @dragover="handleDragOver($event, index)"
      @dragend="handleDragEnd"
      role="listitem"
      :aria-grabbed="draggedIndex === index"
    >
      <div class="drag-handle" aria-hidden="true">
        <GripVertical :size="16" />
      </div>
      <slot :item="item" :index="index" />
    </li>
  </Primitive>
</template>

<style scoped>
.q-draggable-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  list-style: none;
  padding: 0;
  margin: 0;
}

.q-draggable-item {
  position: relative;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-card);
  padding: var(--spacing-4) var(--spacing-8);
  transition: all 0.2s;
  cursor: move;
}

.q-draggable-item.dragging {
  opacity: 0.5;
}

.drag-handle {
  position: absolute;
  left: var(--spacing-2);
  top: 50%;
  transform: translateY(-50%);
  cursor: move;
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  color: var(--color-muted-fg);
}

.q-draggable-item:hover .drag-handle {
  opacity: 1;
}
</style>
