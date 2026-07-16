<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const resizablePanelGroupVariants = cva('q-resizable-panel-group', {
  variants: {
    direction: {
      horizontal: 'direction--horizontal',
      vertical: 'direction--vertical'
    }
  },
  defaultVariants: {
    direction: 'horizontal'
  }
})

export type ResizablePanelGroupVariants = VariantProps<typeof resizablePanelGroupVariants>

export interface ResizablePanelGroupProps {
  direction?: ResizablePanelGroupVariants['direction']
  asChild?: boolean
}

const props = withDefaults(defineProps<ResizablePanelGroupProps>(), {
  direction: 'horizontal',
  asChild: false
})

const classes = computed(() => {
  return resizablePanelGroupVariants({
    direction: props.direction
  })
})

// Provide panel group context to children
const panelGroupId = ref(`panel-group-${Math.random().toString(36).substr(2, 9)}`)
const panelRefs = ref<Array<{ updateSize: (size: number) => void; minSize: number; maxSize: number }>>([])

provide('panelGroupId', panelGroupId)
provide('direction', computed(() => props.direction))
provide('registerPanel', (panel: { updateSize: (size: number) => void; minSize: number; maxSize: number }) => {
  panelRefs.value.push(panel)
  return () => {
    const index = panelRefs.value.indexOf(panel)
    if (index > -1) {
      panelRefs.value.splice(index, 1)
    }
  }
})
provide('getPanels', () => panelRefs.value)
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="classes"
    :data-panel-group-direction="direction"
    :data-panel-group-id="panelGroupId"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  height: 100%;
  width: 100%;
}

.direction--vertical {
  flex-direction: column;
}
</style>
