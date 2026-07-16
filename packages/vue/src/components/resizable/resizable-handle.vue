<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { Primitive } from 'reka-ui'
import { GripVertical } from 'lucide-vue-next'

export interface ResizableHandleProps {
  withHandle?: boolean
  asChild?: boolean
}

const props = withDefaults(defineProps<ResizableHandleProps>(), {
  withHandle: false,
  asChild: false
})

const direction = inject<computed<'horizontal' | 'vertical'>>('direction', computed(() => 'horizontal'))
const panelGroupId = inject<string>('panelGroupId', '')
const getPanels = inject<() => Array<{ updateSize: (size: number) => void; minSize: number; maxSize: number }>>('getPanels', () => [])

const isResizing = ref(false)
const startPos = ref(0)
const startSizes = ref<number[]>([])
const handleElement = ref<{ $el: HTMLElement } | null>(null)

const getElement = (): HTMLElement | null => handleElement.value?.$el ?? null

const handleId = ref(`handle-${Math.random().toString(36).substr(2, 9)}`)

const classes = computed(() => {
  return [
    'q-resizable-handle',
    {
      'direction--vertical': direction.value === 'vertical',
      'with-handle': props.withHandle
    }
  ]
})

const handleMouseDown = (event: MouseEvent) => {
  const el = getElement()
  if (!el) return

  event.preventDefault()
  event.stopPropagation()
  isResizing.value = true
  startPos.value = direction.value === 'horizontal' ? event.clientX : event.clientY

  // Get all panels directly in this group (not nested groups' panels)
  const panelGroup = el.parentElement as HTMLElement
  if (!panelGroup) return

  const panels = Array.from(panelGroup.children).filter((child) =>
    child.classList.contains('q-resizable-panel')
  ) as HTMLElement[]
  startSizes.value = panels.map((panel) => {
    const rect = panel.getBoundingClientRect()
    const groupRect = panelGroup.getBoundingClientRect()
    return direction.value === 'horizontal'
      ? (rect.width / groupRect.width) * 100
      : (rect.height / groupRect.height) * 100
  })

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = direction.value === 'horizontal' ? 'col-resize' : 'row-resize'
  document.body.style.userSelect = 'none'
}

const handleMouseMove = (event: MouseEvent) => {
  const el = getElement()
  if (!isResizing.value || !el) return

  const currentPos = direction.value === 'horizontal' ? event.clientX : event.clientY
  const delta = currentPos - startPos.value

  const panelGroup = el.parentElement as HTMLElement
  if (!panelGroup) return

  const groupRect = panelGroup.getBoundingClientRect()
  const deltaPercent = direction.value === 'horizontal'
    ? (delta / groupRect.width) * 100
    : (delta / groupRect.height) * 100

  // Find how many panels precede this handle among the group's direct
  // children (not the handle's raw child position, since handles are
  // interleaved with panels and nested groups have their own children).
  const children = Array.from(panelGroup.children)
  const handleDomIndex = children.indexOf(el)
  if (handleDomIndex === -1) return

  const handleIndex = children
    .slice(0, handleDomIndex)
    .filter((child) => child.classList.contains('q-resizable-panel')).length

  if (handleIndex === 0) return

  const panels = children.filter((child) =>
    child.classList.contains('q-resizable-panel')
  ) as HTMLElement[]
  if (panels.length < handleIndex) return

  const leftPanel = panels[handleIndex - 1]
  const rightPanel = panels[handleIndex]

  if (!leftPanel || !rightPanel) return

  const panelApis = getPanels()
  if (panelApis.length < handleIndex) return

  const leftPanelApi = panelApis[handleIndex - 1]
  const rightPanelApi = panelApis[handleIndex]

  const leftSize = startSizes.value[handleIndex - 1] + deltaPercent
  const rightSize = startSizes.value[handleIndex] - deltaPercent

  // Apply min/max constraints
  const clampedLeftSize = Math.max(leftPanelApi.minSize, Math.min(leftPanelApi.maxSize, leftSize))
  const clampedRightSize = Math.max(rightPanelApi.minSize, Math.min(rightPanelApi.maxSize, rightSize))

  // Update panel sizes
  leftPanelApi.updateSize(clampedLeftSize)
  rightPanelApi.updateSize(clampedRightSize)
}

const handleMouseUp = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

onMounted(() => {
  // handleElement will be set via template ref
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <Primitive
    ref="handleElement"
    as="div"
    :as-child="asChild"
    :class="classes"
    :data-panel-group-direction="direction"
    :data-handle-id="handleId"
    @mousedown="handleMouseDown"
    v-bind="$attrs"
  >
    <div v-if="withHandle" class="q-resizable-handle-grip">
      <GripVertical :size="20" />
    </div>
  </Primitive>
</template>

<style scoped>
.q-resizable-handle {
  position: relative;
  display: flex;
  width: 1px;
  flex-shrink: 0;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  cursor: col-resize;
  user-select: none;
}

.q-resizable-handle::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: var(--spacing-1);
  transform: translateX(-50%);
}

.q-resizable-handle:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring), 0 0 0 2px var(--color-background);
}

.q-resizable-handle.direction--vertical {
  height: 1px;
  width: 100%;
  cursor: row-resize;
}

.q-resizable-handle.direction--vertical::after {
  top: 50%;
  left: 0;
  height: var(--spacing-1);
  width: 100%;
  transform: translateY(-50%);
}

.q-resizable-handle.direction--vertical .q-resizable-handle-grip {
  transform: rotate(90deg);
}

.q-resizable-handle-grip {
  z-index: var(--z-index-10);
  display: flex;
  height: var(--spacing-4);
  width: var(--spacing-3);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-border);
}
</style>
