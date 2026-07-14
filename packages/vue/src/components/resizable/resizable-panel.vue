<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue'
import { Primitive } from 'reka-ui'

export interface ResizablePanelProps {
  defaultSize?: number
  minSize?: number
  maxSize?: number
  asChild?: boolean
}

const props = withDefaults(defineProps<ResizablePanelProps>(), {
  defaultSize: 50,
  minSize: 10,
  maxSize: 90,
  asChild: false
})

const panelGroupId = inject<string>('panelGroupId', '')
const direction = inject<computed<'horizontal' | 'vertical'>>('direction', computed(() => 'horizontal'))
const registerPanel = inject<(panel: { updateSize: (size: number) => void; minSize: number; maxSize: number }) => (() => void) | undefined>('registerPanel')

const size = ref(props.defaultSize)
const isResizing = ref(false)

const panelId = ref(`panel-${Math.random().toString(36).substr(2, 9)}`)

const style = computed(() => {
  const flexBasis = `${size.value}%`
  return {
    flexBasis,
    minWidth: direction.value === 'horizontal' ? `${props.minSize}%` : undefined,
    maxWidth: direction.value === 'horizontal' ? `${props.maxSize}%` : undefined,
    minHeight: direction.value === 'vertical' ? `${props.minSize}%` : undefined,
    maxHeight: direction.value === 'vertical' ? `${props.maxSize}%` : undefined,
    flexShrink: 1,
    flexGrow: 0,
    overflow: 'auto'
  }
})

const updateSize = (newSize: number) => {
  const clampedSize = Math.max(props.minSize, Math.min(props.maxSize, newSize))
  size.value = clampedSize
}

const panelApi = {
  updateSize,
  minSize: props.minSize,
  maxSize: props.maxSize
}

let unregister: (() => void) | undefined

onMounted(() => {
  if (registerPanel) {
    unregister = registerPanel(panelApi)
  }
})

onUnmounted(() => {
  if (unregister) {
    unregister()
  }
})

defineExpose({
  updateSize,
  size,
  panelId
})

watch(
  () => props.defaultSize,
  (newSize) => {
    if (!isResizing.value) {
      size.value = newSize
    }
  }
)

watch(
  () => [props.minSize, props.maxSize],
  () => {
    if (registerPanel) {
      if (unregister) {
        unregister()
      }
      panelApi.minSize = props.minSize
      panelApi.maxSize = props.maxSize
      unregister = registerPanel(panelApi)
    }
  }
)
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="['q-resizable-panel']"
    :data-panel-id="panelId"
    :data-min-size="props.minSize"
    :data-max-size="props.maxSize"
    :style="style"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  overflow: auto;
}
</style>
